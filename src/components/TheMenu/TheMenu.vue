<template>
  <div class="menu" :class="currentUser.themeColor.bgMenuHeadband">
    <!-- img menu principal -->
    <div>
      <img />
    </div>
    <!-- all menu navigation -->
    <div>
      <!-- menu navigation principal -->
      <!-- menu onglet active -->
      <!-- menu option onglet active  -->
    </div>
    <!-- btn prametre juste for root -->
    <router-link
      to="dashbord-page/setting"
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
</style>
