<template>
  <div class="stxm-r">
    <transition appear name="fade" mode="out-in">
      <!-- see list trades and update trades -->
      <router-view name="ListFileWork"></router-view>

      <!-- see search and create trades -->
      <router-view name="CreateFileWork"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SeeCompanyCreateFileWork",
};
</script>

<style></style>
