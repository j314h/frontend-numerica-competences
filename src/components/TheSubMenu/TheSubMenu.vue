<template>
  <div class="sub_menu stxm-r" :class="bgSubMenu">
    <!-- sub menu for dashbord -->
    <div v-if="titleHeadBand === 'Tableau de bord'" class="sub_menu_dashbord">
      <div>
        <router-link class="link_sub_menu ctorange" :to="{ name: 'DashHome' }">Accueil</router-link>
      </div>
      <div>
        <router-link class="link_sub_menu ctorange" :to="{ name: 'CreateCompany' }">Créer une entreprise</router-link>
      </div>
    </div>
    <!-- other sub menu -->
    <!-- sub menu for dashbord -->
    <div v-if="titleHeadBand === companySelected.name" class="sub_menu_dashbord">
      <div>
        <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyHome' }">Accueil</router-link>
      </div>
      <div>
        <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyCreateUser' }"
          >Créer un salarié</router-link
        >
      </div>
      <div>
        <router-link class="link_sub_menu ctorange" :to="{ name: 'SeeCompanyCreateFileWork' }"
          >Fiche métier</router-link
        >
      </div>
    </div>
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
.link_sub_menu {
  padding: 20px;
  border-bottom: 5px solid transparent;
  display: block;
}
.router-link-active {
  border-bottom: 5px solid #f84210;
}
.sub_menu {
}
.sub_menu_dashbord {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 30px;
}
</style>
