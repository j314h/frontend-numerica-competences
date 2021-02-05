<template>
  <div class="stxm-r">
    <dash-home-array-companies
      :companiesReferents="companiesReferents"
      :themeColor="themeColor"
    ></dash-home-array-companies>
  </div>
</template>

<script>
import DashHomeArrayCompanies from "./DashHomeArrayCompanies.vue";

export default {
  name: "DashHome",
  components: { DashHomeArrayCompanies },
  props: {
    themeColor: Object,
    companiesReferents: Array,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style></style>
