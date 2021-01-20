<template>
  <div>
    <transition appear name="fade" mode="out-in">
      <!-- view home -->
      <router-view name="SeeCompanyHome"></router-view>
      <!-- view create user -->
      <router-view name="SeeCompanyCreateUser"></router-view>
      <!-- view create file work -->
      <router-view name="SeeCompanyCreateFileWork"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SeeCompany",
  data() {
    return {};
  },
  mounted() {
    //for see or not sub menu
    this.$store.commit("ParamApp/seeSubMenu", true);
    //when title headband
    this.$store.commit("ParamApp/changeTitleHeadBand", "Entreprise");
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>
