<template>
  <div class="box_home">
    <!-- preloader juste for load connect user-->
    <RingLoader v-if="isLoading" :loading="isLoading" :color="'#F84210'" :color2="'#4C39E9'" :size="'100px'" />

    <!-- component home for page connection user -->
    <Home v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import Home from "../../components/Home/Home";
import RingLoader from "../../components/PreLoader/RingLoader";

export default {
  name: "HomeView",
  components: { Home, RingLoader },
  computed: {
    //true or false loading
    ...mapGetters("Loading", ["isLoading"]),
  },
  created() {
    //load img of app
    this.$store.dispatch("Files/getFiles");
  },
};
</script>
