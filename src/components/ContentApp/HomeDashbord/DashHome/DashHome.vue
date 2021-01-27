<template>
  <div class="stxm-r">
    <dash-home-array-companies
      :companiesReferents="companiesReferents"
      :cbgBox="thColor.cbgBox"
      :colorTextTab="thColor.colorTextTab"
    ></dash-home-array-companies>
  </div>
</template>

<script>
import DashHomeArrayCompanies from "./DashHomeArrayCompanies.vue";

export default {
  name: "DashHome",
  components: { DashHomeArrayCompanies },
  props: {
    thColor: Object,
    companiesReferents: Array,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style></style>
