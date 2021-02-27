<template>
  <div class="globals_App">
    <!-- page home connect -->
    <router-view name="HomeView"></router-view>

    <!-- dasbord app -->
    <router-view name="DashbordPage"></router-view>

    <!-- validate account -->
    <router-view name="HomeValidateAccount"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
//load css globals app no scoped
@import "./assets/scss/styles.scss";
</style>
