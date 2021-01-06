<template>
  <div class="sub_menu stxm-r" :class="currentUser.themeColor.bgSubMenu">
    <div>
      <router-link class="link_sub_menu ctorange" :to="{ name: 'DashHome' }">Accueil</router-link>
    </div>
    <div>
      <router-link class="link_sub_menu ctorange" :to="{ name: 'CreateCompany' }">Créer une entreprise</router-link>
    </div>
    <div>
      <router-link class="link_sub_menu ctorange" :to="{ name: 'CreateNews' }">Créer un fils d'actualité</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheSubMenu",
  computed: {
    ...mapGetters("UserConnect", ["currentUser"]),
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 30px;
}
</style>
