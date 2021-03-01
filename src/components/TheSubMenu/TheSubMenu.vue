<template>
  <div class="sub_menu_box" :class="bgSubMenu">
    <transition name="fade" mode="out-in">
      <!-- sub menu for dashbord -->
      <TheSubMenuDashbord v-if="titleHeadBand === 'Tableau de bord'" />

      <!-- sub menu for company -->
      <TheSubMenuCompany v-if="titleHeadBand === companySelected.name" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import TheSubMenuDashbord from "./TheSubMenuDashbord";
import TheSubMenuCompany from "./TheSubMenuCompany";

export default {
  name: "TheSubMenu",
  components: {
    TheSubMenuDashbord,
    TheSubMenuCompany,
  },
  computed: {
    //recover info current user and company selected and title head band
    ...mapGetters("CurrentUser", ["bgSubMenu"]),
    ...mapGetters("Companies", ["companySelected"]),
    ...mapGetters("ParamApp", ["titleHeadBand"]),
  },
};
</script>
