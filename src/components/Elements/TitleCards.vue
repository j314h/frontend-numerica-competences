<template>
  <div>
    <!-- title of cards in content primary -->
    <h3 class="stxxm-b title_cards" :class="themeColor.titleCard">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "TitleCards",
  props: {
    title: String,
    themeColor: Object,
  },
};
</script>

<style></style>
