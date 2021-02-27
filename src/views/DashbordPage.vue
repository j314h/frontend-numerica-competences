<template>
  <!-- loading a wait data of img api -->
  <RingLoader v-if="isLoading" :loading="isLoading" :color="'#F84210'" :color2="'#4C39E9'" :size="'100px'" />

  <!-- page app -->
  <div v-else class="box_dashbord">
    <!-- menu -->
    <the-menu class="menu_principal"></the-menu>

    <!-- content app with headband -->
    <div class="box_content_app">
      <!-- headband -->
      <the-headband class="head_principal"></the-headband>
      <the-sub-menu v-show="isSubMenu"></the-sub-menu>

      <!-- content text assigns background and text color according to dark mode-->
      <div class="content" :class="bgContent + ' ' + colorText">
        <transition appear name="fade" mode="out-in">
          <!-- view home for dashbord -->
          <router-view name="HomeDashbord"></router-view>

          <!-- view for setting app -->
          <router-view name="Setting"></router-view>

          <!-- views see company -->
          <router-view name="SeeCompany"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeadband from "../components/TheHeadband/TheHeadband";
import TheMenu from "../components/TheMenu/TheMenu";
import RingLoader from "../components/PreLoader/RingLoader";
import TheSubMenu from "../components/TheSubMenu/TheSubMenu";

import { mapGetters } from "vuex";

export default {
  components: { TheMenu, TheHeadband, RingLoader, TheSubMenu },
  name: "DashbordPage",
  computed: {
    //recover current user
    ...mapGetters("CurrentUser", ["bgContent", "colorText"]),
    //check variable load of app
    ...mapGetters("Loading", ["isLoading"]),
    //check if see or not sub menu
    isSubMenu() {
      return this.$store.getters["ParamApp/isSubMenu"];
    },
  },
  methods: {},
  async created() {
    //load img of app
    this.$store.commit("Loading/stateLoading", true);
    //load data for dashbord
    await this.$store.dispatch("Files/getFiles");
    await this.$store.dispatch("States/getAllState");
    await this.$store.dispatch("Companies/getAllCompaniesAdmin");
    //if company selected is define reload info company selected and users of company selected
    if (this.$store.getters["Companies/idCompaniesSelected"]) {
      await this.$store.dispatch("Companies/getCompanySelected", store.getters["Companies/idCompaniesSelected"]);
      await this.$store.dispatch("Sectors/getSectorsCompanySelected", store.getters["Companies/idCompaniesSelected"]);
    }
    this.$store.commit("Loading/stateLoading", false);
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
.box_dashbord {
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 0.8s;
}
.box_content_app {
  width: 100%;
  overflow: auto;
  flex: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.8s;
}
.head_principal {
  width: 100%;
  height: 50px;
}
.content {
  position: relative;
  flex: 5;
  overflow: auto;
  padding: 20px 20px 100px 20px;
  transition: all 0.8s;
  width: auto;
}
</style>
