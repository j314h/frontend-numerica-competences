import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import DashbordPage from "../views/DashbordPage";
import store from "../store";
import VueCookies from "vue-cookies";
import Setting from "../components/ContentApp/Setting/Setting.vue";
import HomeDashbord from "../components/ContentApp/HomeDashbord/HomeDashbord.vue";
import CreateCompany from "../components/ContentApp/HomeDashbord/CreateCompany/CreateCompany.vue";
import CreateNews from "../components/ContentApp/HomeDashbord/CreateNews/CreateNews.vue";
import DashHome from "../components/ContentApp/HomeDashbord/DashHome/DashHome.vue";
import SeeCompany from "../components/ContentApp/SeeCompany/SeeCompany.vue";
import SeeCompanyCreateUser from "../components/ContentApp/SeeCompany/SeeCompanyCreateUser.vue";
import SeeCompanyHome from "../components/ContentApp/SeeCompany/SeeCompanyHome.vue";
import SeeCompanyCreateFileWork from "../components/ContentApp/SeeCompany/SeeCompanyCreateFileWork.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", //home connect
    name: "HomeView",
    components: {
      HomeView,
    },
    //if cookie token not exist not next
    beforeEnter: (to, from, next) => {
      store.commit("UserConnect/checkedJwt", VueCookies.isKey("jwt"));
      store.getters["UserConnect/isSignIn"] ? next("/dashbord-page") : next();
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
        children: [
          {
            path: "dashbord-home", //dashbord home
            name: "DashHome",
            components: {
              DashHome,
            },
            //recover companies and referent of companies
            beforeEnter: async (to, from, next) => {
              await store.dispatch("Companies/getAllCompanies");
              next();
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
      },
      {
        path: "seecompany", //dashbord company with id params
        name: "SeeCompany",
        redirect: { name: "SeeCompanyHome" },
        components: {
          SeeCompany,
        },
        children: [
          {
            path: "seecompany-home", //dashbord create user compared with id company
            name: "SeeCompanyHome",
            components: {
              SeeCompanyHome,
            },
            //recover company selected
            beforeEnter: async (to, from, next) => {
              await store.dispatch(
                "CurrentCompany/getSelectedCompany",
                store.getters["CurrentCompany/idCompaniesSelected"]
              );
              next();
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
            components: {
              SeeCompanyCreateFileWork,
            },
          },
        ],
      },
    ],
    //if not connect, not next
    beforeEnter: (to, from, next) => {
      store.commit("UserConnect/checkedJwt", VueCookies.isKey("jwt"));
      store.getters["UserConnect/isSignIn"] ? next() : next("/");
    },
  },
];

//options roads
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//verification user connected if jwt cookie exist
router.beforeEach(async (to, from, next) => {
  try {
    if (VueCookies.isKey("jwt")) {
      await store.dispatch("UserConnect/userConnectVerification");
      next({ name: from });
    } else {
      next();
    }
  } catch (error) {
    next("/");
  }
});

export default router;

// {
//   path: "/about",
//   name: "About",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
// },
