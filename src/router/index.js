import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import DashbordPage from "../views/DashbordPage";
import store from "../store";
import VueCookies from "vue-cookies";
import Setting from "../components/ContentApp/Setting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
    path: "/dashbord-page",
    name: "DashbordPage",
    components: {
      DashbordPage,
    },
    children: [
      {
        path: "/dashbord-page/setting",
        name: "Setting",
        components: {
          Setting,
        },
      },
    ],
    //if not connect, not next
    beforeEnter: (to, from, next) => {
      store.commit("UserConnect/checkedJwt", VueCookies.isKey("jwt"));
      store.getters["UserConnect/isSignIn"] ? next() : next("/");
    },
  },
];

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
