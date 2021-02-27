<template>
  <div>
    <h1 class="h1_title_component">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "H1Component",
  props: {
    text: { type: String, default: "Title h1" },
  },
};
</script>
