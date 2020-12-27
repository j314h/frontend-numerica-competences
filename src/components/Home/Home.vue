<template>
  <div class="home">
    <!-- body -->
    <div class="box_content">
      <!-- text -->
      <home-text class="partial_flex_1"></home-text>
      <!-- form -->
      <home-form class="partial_flex_1 form"></home-form>
    </div>
    <!-- footer -->
    <div class="partial_flex_1">
      <the-footer></the-footer>
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
