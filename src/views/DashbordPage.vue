<template>
  <!-- page app -->
  <div class="box_dashbord">
    <!-- menu -->
    <the-menu class="menu_principal"></the-menu>
    <!-- content app with headband -->
    <div class="box_content_app">
      <!-- headband -->
      <the-headband class="head_principal"></the-headband>
      <!-- content text -->
      <div class="content" :class="classColorTextContent">
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

export default {
  components: { TheMenu, TheHeadband },
  name: "DashbordPage",
  data() {
    return {
      textColorContent: "ct-custom-",
    };
  },
  computed: {
    //load color text content of app
    classColorTextContent() {
      return this.textColorContent + this.$store.getters["UserConnect/currentUser"].themeColor.colorTextPrimary;
    },
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

.head_principal {
  width: 100%;
  height: 60px;
}

.box_content_app {
  width: 100%;
  overflow: auto;
  flex: 5;
  position: relative;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 5;
  overflow: auto;
  padding: 40px 40px 100px 40px;
}
</style>
