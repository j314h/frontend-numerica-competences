<template>
  <div class="box_home">
    <home class="content_home"></home>
  </div>
</template>

<script>
import Home from "../components/Home/Home";

export default {
  name: "HomeView",
  components: { Home },
  created() {
    //call api for get all files image
    this.$store.dispatch("ParamApp/getFilesImg");
  },
};
</script>

<style lang="scss" scoped>
.box_home {
  width: 100%;
  height: 100%;
}
</style>
