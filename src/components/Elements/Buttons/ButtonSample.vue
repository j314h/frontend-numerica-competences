<template>
  <div>
    <!-- div for btn sample of not event submit, juste event click, large or small -->
    <div v-if="smallBtn" @click="$emit('click')" :class="themeColor.btnm" class="btn_sample">{{ textBtn }}</div>
    <div v-if="largeBtn" :class="themeColor.btn">{{ textBtn }}</div>
  </div>
</template>

<script>
export default {
  props: {
    textBtn: String,
    themeColor: Object,
    largeBtn: {
      type: Boolean,
      default: false,
    },
    smallBtn: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
