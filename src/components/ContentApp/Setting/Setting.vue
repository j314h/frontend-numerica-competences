<template>
  <div class="t-body">
    <!-- form change logo numerica -->
    <setting-img-logo-numerica></setting-img-logo-numerica>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SettingImgLogoNumerica from "./SettingImgLogoNumerica.vue";

export default {
  components: { SettingImgLogoNumerica },
  name: "Setting",
  data() {
    return {
      file: "",
    };
  },
  created() {
    //call api for get all files image
    this.$store.dispatch("ParamApp/getFilesImg");
  },
};
</script>

<style></style>
