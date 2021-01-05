<template>
  <div class="headband" :class="currentUser.themeColor.bgLayout + ' ' + currentUser.themeColor.colorMenuActive">
    <h3 class="stl-m">{{ titleHeadBand }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheHeadband",
  data() {
    return {};
  },
  computed: {
    //load theme color for currentUser and title band
    ...mapGetters("UserConnect", ["currentUser"]),
    ...mapGetters("ParamApp", ["titleHeadBand"]),
  },
};
</script>

<style lang="scss" scoped>
.headband {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
