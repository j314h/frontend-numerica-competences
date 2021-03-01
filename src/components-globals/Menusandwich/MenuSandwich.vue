<template>
  <div @click="openCloseMenu" class="box_logo_menu">
    <div :class="stateMenu"></div>
    <div :class="stateMenu"></div>
    <div :class="stateMenu"></div>
  </div>
</template>

<script>
export default {
  name: "MenuSandwich",
  props: {
    menuIsOpen: Boolean,
  },
  computed: {
    //add class for menu burger
    stateMenu() {
      return this.menuIsOpen ? "active" : "";
    },
  },
  methods: {
    //open or close menu
    openCloseMenu() {
      console.log(this.menuIsOpen);
      this.$emit("update:menuIsOpen", !this.menuIsOpen);
    },
  },
};
</script>
