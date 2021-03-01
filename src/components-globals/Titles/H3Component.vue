<template>
  <h3 :class="styleCustom">{{ text }}</h3>
</template>

<script>
export default {
  name: "H3Component",
  props: {
    text: { type: String, default: "Title h3" },
    styleCustom: { type: String, default: "h3_title_component" },
  },
};
</script>

<style></style>
