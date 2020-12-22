<template>
  <div class="headband" :class="classColorMenu"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheHeadband",
  data() {
    return {
      colorMenu: "bgm-",
    };
  },
  computed: {
    classColorMenu() {
      return (this.colorMenu += this.$store.getters["ParamApp/params"].bgMenuHeadband);
    },
  },
};
</script>

<style lang="scss" scoped></style>
