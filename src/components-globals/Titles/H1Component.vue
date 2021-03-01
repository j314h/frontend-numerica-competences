<template>
  <div>
    <h1 :class="styleCustom">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "H1Component",
  props: {
    text: { type: String, default: "Title h1" },
    styleCustom: { type: String, default: "h1_title_component" },
  },
};
</script>
