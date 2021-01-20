<template>
  <div class="stxm-r">
    <dash-home-array-companies></dash-home-array-companies>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DashHomeArrayCompanies from "./DashHomeArrayCompanies.vue";

export default {
  name: "DashHome",
  components: { DashHomeArrayCompanies },
  computed: {},
};
</script>

<style></style>
