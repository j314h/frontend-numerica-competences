<template>
  <div>coucou</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeDashbord",
  mounted() {
    this.$store.commit("ParamApp/changeTitleHeadBand", "Tableau de bord");
  },
};
</script>

<style></style>
