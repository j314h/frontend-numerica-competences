<template>
  <div class="globals_App">
    <!-- page home connect -->
    <router-view name="HomeView"></router-view>

    <!-- dasbord app -->
    <router-view name="DashbordPage"></router-view>

    <!-- validate account -->
    <router-view name="HomeValidateAccount"></router-view>

    <!-- preloader juste for load connect user-->
    <RingLoader v-if="!isSignIn" :loading="isLoading" :color="'#F84210'" :color2="'#4C39E9'" :size="'100px'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import RingLoader from "./components-globals/PreLoader/RingLoader.vue";

export default {
  components: { RingLoader },
  name: "App",
  computed: {
    //true or false loading
    ...mapGetters("Loading", ["isLoading"]),
    ...mapGetters("CurrentUser", ["isSignIn"]),
  },
};
</script>

<style lang="scss">
//load css globals app no scoped
@import "./assets/scss/styles.scss";
</style>
