<template>
  <div>
    <p class="stxs-r text_info_form" :class="themeColor.textBasic">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TextInfoForm",
  props: {
    text: String,
    themeColor: Object,
  },
};
</script>

<style></style>
