<template>
  <div class="the_menu_box" :class="bgLayout + ' ' + openMenu">
    <!-- menu burger -->
    <div class="the_menu_title">
      <MenuSandwich :menuIsOpen.sync="menuIsOpen" />
      <span>Menu</span>
    </div>

    <!-- content menu -->
    <div class="the_menu_content">
      <!-- setting and disconnect user -->
      <TheMenuHead />

      <!-- item dashbord -->
      <TheMenuDashbord :text="'Tableau de bord'" />

      <!-- content of menu -->
      <TheMenuContent :currentRoad="currentRoad" :currentComponent="currentComponent" />
    </div>
    <!-- footer menu -->
    <TheMenuFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import ButtonClose from "../Elements/Buttons/ButtonClose.vue";
import MenuSandwich from "../../components-globals/Menusandwich/MenuSandwich";
import TheMenuHead from "./TheMenuHead";
import TheMenuDashbord from "./TheMenuDashbord";
import TheMenuContent from "./TheMenuContent";
import TheMenuFooter from "./TheMenuFooter";

export default {
  components: { ButtonClose, MenuSandwich, TheMenuHead, TheMenuDashbord, TheMenuContent, TheMenuFooter },
  name: "TheMenu",
  data() {
    return {
      //toggle open close menu
      menuIsOpen: true,
      //current road and current component
      currentRoad: "",
      currentComponent: "",
    };
  },
  created() {
    this.recoverCurrentComponent(this.$route);
  },
  updated() {
    this.recoverCurrentComponent(this.$route);
  },
  watch: {
    $route(to, from) {
      this.recoverCurrentComponent(to);
    },
  },
  computed: {
    //load theme color for currentUser
    ...mapGetters("CurrentUser", ["colorMenuActive", "bgLayout"]),

    //load info company selected
    ...mapGetters("Companies", ["companySelected"]),

    //add class close block of menu side
    openMenu() {
      return this.menuIsOpen ? "menu" : "menu_close";
    },
  },
  methods: {
    //recover the current roads and component
    recoverCurrentComponent(x) {
      this.currentRoad = x.path;
      this.currentComponent = x.name;
    },
  },
};
</script>
