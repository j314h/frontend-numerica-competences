<template>
  <h3 :class="styleCustom">{{ upperFirstLetter(text) }}</h3>
</template>

<script>
export default {
  name: "H3Component",
  props: {
    text: { type: String, default: "Title h3" },
    styleCustom: { type: String, default: "h3_title_component" },
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style></style>
