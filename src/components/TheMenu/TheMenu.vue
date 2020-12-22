<template>
  <div class="menu" :class="classColorMenu">
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
    <div v-if="currentUser.role.libelle === 'root'">
      <router-link to="dashbord-page/setting" tag="button" class="btn-menu" :class="classColorText1"
        >Paramètres</router-link
      >
    </div>
    <!-- btn disconnect -->
    <div class="box_btn_deco">
      <button @click="logOut" class="btn-deco t-btn-primary" :class="classColorText1">Déconnexion</button>
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
      //first class custom color menu
      colorText1: "ctm-",
      colorText2: "ctm-",
      colorMenu: "bgm-",
    };
  },
  computed: {
    //class for color text
    classColorText1() {
      return (this.colorText1 += this.$store.getters["ParamApp/params"].colorText1Menu);
    },
    //class for color background menu
    classColorMenu() {
      return (this.colorMenu += this.$store.getters["ParamApp/params"].bgMenuHeadband);
    },
    //class for color text 2
    classColorText2() {
      return (this.colorText2 += this.$store.getters["ParamApp/params"].colorText2Menu);
    },

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
