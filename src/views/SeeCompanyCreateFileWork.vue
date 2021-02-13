<template>
  <div class="stxm-r">
    <transition appear name="fade" mode="out-in">
      <router-view name="ListFileWork"></router-view>
      <router-view name="CreateFileWork"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SeeCompanyCreateFileWork",
};
</script>

<style lang="scss" scoped></style>
