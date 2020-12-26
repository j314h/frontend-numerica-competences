<template>
  <div class="menu" :class="currentUser.themeColor.bgMenuHeadband">
    <!-- img menu principal -->
    <div>
      <img src="" />
    </div>
    <!-- all menu navigation -->
    <div>
      <!-- menu navigation principal -->
      <div class="box_menu_pricipal">
        <ul>
          <router-link
            to="home"
            tag="button"
            class="btn-menu t-btn-secondary"
            :class="currentUser.themeColor.colorTextInactive"
            >Tableau de bord</router-link
          >
          <router-link
            to="home"
            tag="button"
            class="btn-menu t-btn-secondary"
            :class="currentUser.themeColor.colorTextInactive"
            >Entreprises</router-link
          >
          <router-link
            to="home"
            tag="button"
            class="btn-menu t-btn-secondary"
            :class="currentUser.themeColor.colorTextInactive"
            >Personnes</router-link
          >
        </ul>
      </div>
      <!-- menu onglet active -->
      <!-- menu option onglet active  -->
    </div>
    <!-- btn prametre juste for root -->
    <router-link
      to="setting"
      tag="button"
      class="btn-menu t-btn-secondary"
      :class="currentUser.themeColor.colorTextInactive"
      >Paramètres</router-link
    >
    <!-- btn disconnect -->
    <div class="box_btn_deco">
      <button @click="logOut" class="btn-deco t-btn-primary" :class="currentUser.themeColor.colorTextInactive">
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

.box_btn_deco {
  display: flex;
  justify-content: center;
}

.box_menu_pricipal {
  border-bottom: 1px solid #ffffff;
}
</style>
