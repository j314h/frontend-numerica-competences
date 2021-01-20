<template>
  <div class="stxm-r">{{ idCompaniesSelected }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SeeCompanyHome",
  props: {},
  computed: {
    ...mapGetters("CurrentCompany", ["idCompaniesSelected"]),
  },
};
</script>

<style lang="scss" scoped></style>
