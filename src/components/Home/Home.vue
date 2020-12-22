<template>
  <div class="home">
    <!-- body -->
    <div class="box_up_home">
      <home-text class="left_partial"></home-text>
      <home-form class="right_partial"></home-form>
    </div>
    <!-- footer -->
    <div class="box_footer">
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheFooter from "../Elements/TheFooter";
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

.box_up_home {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 3;
  padding: 0 65px;
  background: linear-gradient(287.2deg, #8937db 29.09%, #4c39e9 63.29%);
}

.box_footer {
  flex: 1;
}

.left_partial {
  flex: 1;
}

.right_partial {
  flex: 1;
}

/** mobile */

@media screen and (max-width: 700px) {
  .box_up_home {
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    justify-content: center;
  }
  .right_partial {
    margin: 30px 0;
  }
}
</style>
