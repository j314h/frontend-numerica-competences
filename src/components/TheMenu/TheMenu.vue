<template>
  <div class="menu" :class="currentUser.themeColor.bgLayout">
    <!-- img menu principal -->
    <div>
      <img src="" />
    </div>
    <!-- all menu navigation -->
    <div>
      <h4 class="stxm-m upper" :class="currentUser.themeColor.colorMenuActive">Menu</h4>
      <!-- menu navigation principal -->
      <div class="box_menu_pricipal">
        <ul>
          <router-link to="home" tag="button" class="btn-menu" :class="currentUser.themeColor.colorMenuInactive"
            >Tableau de bord</router-link
          >
          <router-link to="home" tag="button" class="btn-menu" :class="currentUser.themeColor.colorMenuInactive"
            >Entreprises</router-link
          >
          <router-link to="home" tag="button" class="btn-menu" :class="currentUser.themeColor.colorMenuInactive"
            >Personnes</router-link
          >
          <router-link to="home" tag="button" class="btn-menu" :class="currentUser.themeColor.colorMenuInactive"
            >Fiches</router-link
          >
        </ul>
      </div>
      <!-- menu onglet active -->
      <!-- menu option onglet active  -->
    </div>
    <!-- menu option app -->
    <div class="box_option_app">
      <!-- btn prametre juste for root -->
      <router-link to="setting" tag="button" class="btn-menu" :class="currentUser.themeColor.colorMenuInactive"
        >Paramètres</router-link
      >
    </div>
    <!-- btn disconnect -->
    <div class="box_btn_deco">
      <button @click="logOut" class="btn-menu upper" :class="currentUser.themeColor.colorMenuInactive">
        Déconnexion
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheMenu",
  data() {
    return {
      user: null,
      //class custom color menu
      colorTextInactive: "ctm-",
      colorTextActive: "ctm-",
      colorMenu: "bgm-",
    };
  },
  computed: {
    //load theme color for currentUser
    ...mapGetters("UserConnect", ["currentUser"]),
    ...mapGetters("ParamApp", ["imgs"]),
  },
  methods: {
    //disconnect user connected
    logOut() {
      this.$store.dispatch("UserConnect/logOut");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 250px;
  height: 100%;
}
h4 {
  text-align: center;
  padding-bottom: 10px;
}
button {
  padding: 5px 0;
}
.box_menu_pricipal {
  border-top: 1px solid #b1b3b7;
  padding: 8px 0 8px 25px;
}
.box_option_app {
  padding: 8px 0 8px 25px;
}
.box_btn_deco {
  display: flex;
  justify-content: center;
  padding: 15px 0;
}
</style>
