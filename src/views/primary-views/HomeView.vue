<template>
  <div class="box_home">
    <!-- component home for page connection user -->
    <Home v-if="!loading" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import Home from "../../components/Home/Home";

export default {
  name: "HomeView",
  components: { Home },
  data() {
    return {
      loading: true,
    };
  },
  async beforeCreate() {
    //load img of app
    await this.$store.dispatch("Files/getFiles");
    this.loading = false;
  },
};
</script>
