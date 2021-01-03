<template>
  <!-- page app -->
  <div class="box_dashbord">
    <!-- menu -->
    <the-menu class="menu_principal"></the-menu>
    <!-- content app with headband -->
    <div class="box_content_app">
      <!-- headband -->
      <the-headband class="head_principal"></the-headband>
      <!-- content text assigns background and text color according to dark mode-->
      <div class="content" :class="currentUser.themeColor.bgContent + ' ' + currentUser.themeColor.colorText">
        <!-- view home for dashbord -->
        <router-view name="HomeDashbord"></router-view>
        <!-- view for setting app -->
        <router-view name="Setting"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeadband from "../components/TheHeadband/TheHeadband";
import TheMenu from "../components/TheMenu/TheMenu";
import { mapGetters } from "vuex";

export default {
  components: { TheMenu, TheHeadband },
  name: "DashbordPage",
  computed: {
    //load color text content of app
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.box_dashbord {
  width: 100%;
  height: 100%;
  display: flex;
}
.menu_principal {
  width: 250px;
}
.box_content_app {
  width: 100%;
  overflow: auto;
  flex: 5;
  position: relative;
  display: flex;
  flex-direction: column;
}
.head_principal {
  width: 100%;
  height: 60px;
}
.content {
  flex: 5;
  overflow: auto;
  padding: 20px 20px 100px 20px;
}
</style>
