<template>
  <div class="box_btn">
    <button class="t-btn-primary" :class="classObject">{{ textBtn }}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonApp",
  props: {
    grayWhite: Boolean,
    orange: Boolean,
    blue: Boolean,
    whiteGray: Boolean,
    textBtn: String,
  },
  computed: {
    //props given by the parent define the class of the button
    classObject() {
      return {
        "btn-gray-white": this.grayWhite,
        "btn-orange-white": this.orange,
        "btn-blue-white": this.blue,
        "btn-white-gray": this.whiteGray,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
