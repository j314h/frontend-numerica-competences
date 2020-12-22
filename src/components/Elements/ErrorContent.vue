<template>
  <div class="error-basic">
    {{ error }}
  </div>
</template>

<script>
export default {
  name: "ErrorContent",
  props: {
    error: "",
  },
};
</script>

<style lang="scss" scoped></style>
