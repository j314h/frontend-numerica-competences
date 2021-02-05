<template>
  <div>
    <!-- if currentUser exist and mini is true-->
    <button v-if="themeColor && mini" :class="themeColor.btnm">
      {{ textBtn }}
    </button>

    <!-- if currentUser exist and mini is false-->
    <button v-else-if="themeColor && !mini" :class="themeColor.btn">
      {{ textBtn }}
    </button>

    <!-- if currentUser not exist -->
    <button v-else class="btn-orange">
      {{ textBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonApp",
  props: {
    textBtn: String,
    mini: Boolean,
    themeColor: Object,
  },
};
</script>

<style></style>
