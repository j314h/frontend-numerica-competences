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
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.box_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 3;
  padding: 0 65px;
  background: linear-gradient(287.2deg, #8937db 29.09%, #4c39e9 63.29%);
}

.partial_flex_1 {
  flex: 1;
}

/** mobile */
@media screen and (max-width: 700px) {
  .box_content {
    flex-direction: column;
    padding: 30px 10px;
    justify-content: center;
  }
  .form {
    margin: 30px 0;
  }
}
</style>
