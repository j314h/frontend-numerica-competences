<template>
  <div class="globals_App">
    <!-- page home connect -->
    <router-view name="HomeView"></router-view>
    <!-- dasbord app -->
    <router-view name="DashbordPage"></router-view>
    <!-- preloader -->
    <ring-loader
      v-if="!currentUser.name"
      :loading="isLoading"
      :color="color"
      :color2="color2"
      :size="size"
    ></ring-loader>
  </div>
</template>

<script>
//preloader
import RingLoader from "./components/PreLoader/RingLoader";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    RingLoader,
  },
  data() {
    return {
      //for preloader
      color: "#F84210",
      color2: "#4C39E9",
      size: "100px",
    };
  },
  created() {
    //call api for get all files image
    this.$store.dispatch("ParamApp/getFilesImg");
  },
  computed: {
    //true or false loading
    ...mapGetters("UserConnect", ["isLoading"]),
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss">
@import "./assets/scss/gobals-rules.scss";
</style>
