<template>
  <div class="sub_menu_box" :class="bgSubMenu">
    <transition name="fade" mode="out-in">
      <!-- sub menu for dashbord -->
      <div class="sub_menu" v-if="titleHeadBand === 'Tableau de bord'">
        <TheSubMenuDashbord />
      </div>
      <!-- sub menu for company -->
      <div class="sub_menu" v-if="titleHeadBand === companySelected.name">
        <TheSubMenuCompany />
      </div>
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
