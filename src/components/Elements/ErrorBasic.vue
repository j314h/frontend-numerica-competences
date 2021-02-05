<template>
  <div class="error-basic">
    {{ error[0] }}
  </div>
</template>

<script>
export default {
  name: "ErrorBasic",
  props: {
    error: Array,
  },
};
</script>

<style></style>
