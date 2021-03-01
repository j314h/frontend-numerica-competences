<template>
  <div class="headband" :class="currentUser.themeColor.bgLayout + ' ' + currentUser.themeColor.colorMenuActive">
    <H3Component :styleCustom="'headband_title'" :text="titleHeadBand" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import H3Component from "../../components-globals/Titles/H3Component";

export default {
  name: "TheHeadband",
  components: {
    H3Component,
  },
  data() {
    return {};
  },
  computed: {
    //load theme color for currentUser and title band
    ...mapGetters("CurrentUser", ["currentUser"]),
    ...mapGetters("ParamApp", ["titleHeadBand"]),
  },
};
</script>

<style lang="scss" scoped></style>
