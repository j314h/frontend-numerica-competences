<template>
  <div class="headband" :class="currentUser.themeColor.bgLayout"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheHeadband",
  data() {
    return {};
  },
  computed: {
    //load theme color for currentUser
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped></style>
