<template>
  <div class="box_btn">
    <!-- if currentUser exist and mini is true-->
    <button v-if="currentUser.themeColor && mini" :class="currentUser.themeColor.btnm">
      {{ textBtn }}
    </button>
    <!-- if currentUser exist and mini is false-->
    <button v-else-if="currentUser.themeColor && !mini" :class="currentUser.themeColor.btn">
      {{ textBtn }}
    </button>
    <!-- if currentUser not exist -->
    <button v-else class="btn-orange">
      {{ textBtn }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonApp",
  props: {
    //text for btn
    textBtn: String,
    mini: Boolean,
  },
  computed: {
    //load color btn with currentUser
    ...mapGetters("CurrentUser", ["currentUser"]),
  },
};
</script>

<style></style>
