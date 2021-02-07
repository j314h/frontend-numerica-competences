<template>
  <div class="sub_menu stxm-r" :class="bgSubMenu">
    <transition name="fade" mode="out-in">
      <!-- sub menu for dashbord -->
      <div v-if="titleHeadBand === 'Tableau de bord'" class="sub_menu_dashbord">
        <div class="sub">
          <router-link class="link_sub_menu ctorange" :to="{ name: 'DashHome' }">Accueil</router-link>
        </div>
        <div class="sub">
          <router-link class="link_sub_menu ctorange" :to="{ name: 'CreateCompany' }">Créer une entreprise</router-link>
        </div>
      </div>
      <!-- other sub menu -->
      <!-- sub menu for dashbord -->
      <div v-if="titleHeadBand === companySelected.name" class="sub_menu_dashbord">
        <div class="sub">
          <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyHome' }">Accueil</router-link>
        </div>
        <div class="sub">
          <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyCreateUser' }"
            >Créer un salarié</router-link
          >
        </div>
        <div class="sub">
          <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyCreateFileWork' }"
            >Fiche métier</router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheSubMenu",
  computed: {
    //recover info current user and company selected and title head band
    ...mapGetters("CurrentUser", ["bgSubMenu"]),
    ...mapGetters("Companies", ["companySelected"]),
    ...mapGetters("ParamApp", ["titleHeadBand"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/app-components/menu/subMenu.scss";
</style>
