<template>
  <div class="globals_App">
    <!-- page home connect -->
    <router-view name="HomeView"></router-view>

    <!-- dasbord app -->
    <router-view name="DashbordPage"></router-view>

    <!-- validate account -->
    <router-view name="HomeValidateAccount"></router-view>

    <!-- preloader juste for load connect user-->
    <ring-loader
      v-if="!isSignIn"
      :loading="isLoading"
      :color="'#F84210'"
      :color2="'#4C39E9'"
      :size="'100px'"
    ></ring-loader>
  </div>
</template>

<script>
import RingLoader from "./components/PreLoader/RingLoader";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    RingLoader,
  },
  computed: {
    //true or false loading
    ...mapGetters("Loading", ["isLoading"]),
    //recover info user
    ...mapGetters("CurrentUser", ["isSignIn"]),
  },
};
</script>

<style lang="scss">
//load css globals app no scoped
@import "./assets/scss/styles.scss";
</style>
