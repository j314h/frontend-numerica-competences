<template>
  <div>
    <transition appear name="fade" mode="out-in">
      <!-- views home in home dashbord -->
      <router-view name="DashHome"></router-view>
      <!-- views create company in dashbord -->
      <router-view name="CreateCompany"></router-view>
      <!-- views create newsletter in dashbord -->
      <router-view name="CreateNews"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeDashbord",
  components: {},
  mounted() {
    //for see or not sub menu
    this.$store.commit("ParamApp/seeSubMenu", true);
    //when title headband
    this.$store.commit("ParamApp/changeTitleHeadBand", "Tableau de bord");
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
