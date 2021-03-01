<template>
  <div class="home">
    <!-- body -->
    <div class="home_box_content">
      <!-- text -->
      <div class="home_partial_component">
        <HomeText />
      </div>

      <!-- form -->
      <div class="home_partial_component">
        <HomeForm />
      </div>
    </div>

    <!-- footer -->
    <div class="home_partial_component">
      <TheFooter />
    </div>
  </div>
</template>

<script>
//components
import TheFooter from "../TheFooter/TheFooter";
import HomeForm from "./HomeForm.vue";
import HomeText from "./HomeText.vue";

export default {
  name: "Home",
  components: { HomeText, HomeForm, TheFooter },
};
</script>
