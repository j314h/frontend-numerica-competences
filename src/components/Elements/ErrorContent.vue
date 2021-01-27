<template>
  <div class="error-basic">
    {{ error[0] }}
  </div>
</template>

<script>
export default {
  name: "ErrorContent",
  props: {
    error: Array,
  },
};
</script>

<style lang="scss" scoped></style>
