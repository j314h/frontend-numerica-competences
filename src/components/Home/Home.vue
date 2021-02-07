<template>
  <div class="home">
    <!-- body -->
    <div class="box_content">
      <!-- text -->
      <home-text class="partial_flex_1"></home-text>

      <!-- form -->
      <home-form :urlApiImg="urlApiImg" :logoNumerica="logoNumerica" class="partial_flex_1 form"></home-form>
    </div>

    <!-- footer -->
    <div class="partial_flex_1">
      <the-footer :urlApiImg="urlApiImg" :logoNumericaFooter="logoNumericaFooter"></the-footer>
    </div>
  </div>
</template>

<script>
import TheFooter from "../TheFooter/TheFooter";
import HomeForm from "./HomeForm.vue";
import HomeText from "./HomeText.vue";

export default {
  name: "Home",
  components: { HomeText, HomeForm, TheFooter },
  data() {
    return {
      //url in .env for api image
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
    };
  },
  computed: {
    //return file fieldName image logo numerica
    logoNumerica() {
      const img = this.$store.getters["Files/imgs"].find((el) => el.name === "logoNumerica");
      return img.fieldName;
    },
    //return file fieldName image logo numerica in footer
    logoNumericaFooter() {
      const img = this.$store.getters["Files/imgs"].find((el) => el.name === "logoFooterNumerica");
      return img.fieldName;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/app-components/home/home.scss";
</style>
