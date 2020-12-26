<template>
  <div class="box_btn">
    <button class="t-btn-secondary" :class="currentUser.themeColor.colorBtnSecondary">{{ textBtn }}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonAppMini",
  props: {
    //text for btn
    textBtn: String,
  },
  computed: {
    //load color btn with currentUser
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped></style>
