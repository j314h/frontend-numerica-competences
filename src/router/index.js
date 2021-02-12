import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import DashbordPage from "../views/DashbordPage";
import HomeDashbord from "../components/ContentApp/HomeDashbord/HomeDashbord.vue";
import DashHome from "../components/ContentApp/HomeDashbord/DashHome/DashHome.vue";
import store from "../store";
import VueCookies from "vue-cookies";
const Setting = () => import("../components/ContentApp/Setting/Setting.vue");
const CreateCompany = () => import("../components/ContentApp/HomeDashbord/CreateCompany/CreateCompany.vue");
const SeeCompany = () => import("../views/SeeCompany.vue");
const SeeCompanyCreateUser = () => import("../components/ContentApp/SeeCompany/SeeCompanyCreateUser.vue");
const SeeCompanyHome = () => import("../components/ContentApp/SeeCompany/SeeCompanyHome/SeeCompanyHome.vue");
const SeeCompanyCreateFileWork = () => import("../views/SeeCompanyCreateFileWork.vue");
const HomeValidateAccount = () => import("../views/HomeValidateAccount.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //home connect
    name: "HomeView",
    components: {
      HomeView,
    },

    beforeEnter: async (to, from, next) => {
      //check if cookie for variable isSignIn and check if img is load or not
      store.commit("CurrentUser/checkedJwt", VueCookies.isKey("jwt"));
      !localStorage.getItem("imgs") ? await store.dispatch("Files/getFiles") : null;

      //if cookie token not exist not next
      store.getters["CurrentUser/isSignIn"] ? next("/dashbord-page") : next();
    },
  },
  {
    path: "/dashbord-page", // acces dashbord
    name: "DashbordPage",
    redirect: { name: "HomeDashbord" },
    components: {
      DashbordPage,
    },
    children: [
      {
        path: "home", //dashbord
        name: "HomeDashbord",
        redirect: { name: "DashHome" },
        components: {
          HomeDashbord,
        },
        //recover state and companies admin, referent recover in dispatch getAllCompaniesAdmin
        beforeEnter: async (to, from, next) => {
          await store.dispatch("States/getAllState");
          await store.dispatch("Companies/getAllCompaniesAdmin");
          //if company selected is define reload info company selected and users of company selected
          if (store.getters["Companies/idCompaniesSelected"]) {
            await store.dispatch("Companies/getCompanySelected", store.getters["Companies/idCompaniesSelected"]);
            await store.dispatch("Sectors/getSectorsCompanySelected", store.getters["Companies/idCompaniesSelected"]);
          }
          next();
        },
        children: [
          {
            path: "dashbord-home", //dashbord home
            name: "DashHome",
            components: {
              DashHome,
            },
          },
          {
            path: "create-company", //dashbord create company
            name: "CreateCompany",
            components: {
              CreateCompany,
            },
          },
        ],
      },
      {
        path: "setting", // setting app
        name: "Setting",
        components: {
          Setting,
        },
        beforeEnter: async (to, from, next) => {
          //for see or not sub menu and modify the title in the title bar
          await store.dispatch("Roles/getRoles");
          await store.dispatch("States/getAllState");
          await store.dispatch("Companies/getAllCompaniesAdmin");
          store.commit("ParamApp/seeSubMenu", false);
          store.commit("ParamApp/changeTitleHeadBand", "Paramètres");
          //if company selected is define reload info company selected and users of company selected
          if (store.getters["Companies/idCompaniesSelected"]) {
            await store.dispatch("Companies/getCompanySelected", store.getters["Companies/idCompaniesSelected"]);
            await store.dispatch("Sectors/getSectorsCompanySelected", store.getters["Companies/idCompaniesSelected"]);
          }
          next();
        },
      },
      {
        path: "seecompany", //dashbord company with id params
        name: "SeeCompany",
        redirect: { name: "SeeCompanyHome" },
        components: {
          SeeCompany,
        },
        //recover company selected and sectors and trade and users of company selected
        beforeEnter: async (to, from, next) => {
          await store.dispatch("States/getAllState");
          await store.dispatch("Companies/getCompanySelected", store.getters["Companies/idCompaniesSelected"]);
          await store.dispatch("Sectors/getSectorsCompanySelected", store.getters["Companies/idCompaniesSelected"]);
          await store.dispatch("Trades/getTradesOfCompanySelected", store.getters["Companies/idCompaniesSelected"]);
          store.commit("ParamApp/changeTitleHeadBand", store.getters["Companies/companySelected"].name);
          store.commit("ParamApp/seeSubMenu", true);
          //change value bool of out company select for indicate to click on btn outCompanySelected
          store.commit("ParamApp/getOutCompanySelected", false);
          await store.dispatch("Roles/getRoles");

          next();
        },
        children: [
          {
            path: "seecompany-home", //dashbord create user compared with id company
            name: "SeeCompanyHome",
            components: {
              SeeCompanyHome,
            },
          },
          {
            path: "create-user", //dashbord create user compared with id company
            name: "SeeCompanyCreateUser",
            components: {
              SeeCompanyCreateUser,
            },
          },
          {
            path: "create-file-work", //dashbord create user compared with id company
            name: "SeeCompanyCreateFileWork",
            redirect: { name: "ListFileWork" },
            components: {
              SeeCompanyCreateFileWork,
            },
            children: [
              {
                path: "see-work", //dashbord create user compared with id company
                name: "ListFileWork",
                components: {
                  ListFileWork: () =>
                    import("../components/ContentApp/SeeCompany/SeeCompanyCreateFileWork/ListFileWork.vue"),
                },
              },
              {
                path: "create-work", //dashbord create user compared with id company
                name: "CreateFileWork",
                components: {
                  CreateFileWork: () =>
                    import("../components/ContentApp/SeeCompany/SeeCompanyCreateFileWork/CreateFileWork.vue"),
                },
              },
            ],
          },
        ],
      },
    ],
    //if not connect, not next
    // beforeEnter: (to, from, next) => {
    //   store.commit("CurrentUser/checkedJwt", VueCookies.isKey("jwt"));
    //   store.getters["CurrentUser/isSignIn"] ? next() : next("/");
    // },
  },
  {
    path: "/user-verify-create", //home connect
    name: "HomeValidateAccount",
    components: {
      HomeValidateAccount,
    },
  },
];

//options roads
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//test all roads for verification user connected if jwt cookie exist
router.beforeEach(async (to, from, next) => {
  try {
    //if cookie exist verification user in backend
    //else if not cookie, redirect in "/"
    if (VueCookies.isKey("jwt")) {
      await store.dispatch("CurrentUser/verificationUserConnect");
      next({ name: from });
    } else {
      if (to.path !== "/") {
        next("/");
      } else {
        next();
      }
    }
  } catch (error) {
    next("/");
  }
});

export default router;
