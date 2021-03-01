<template>
  <div>
    <div class="sub">
      <router-link class="link_sub_menu " :to="{ name: 'SeeCompanyHome' }">Accueil</router-link>
    </div>
    <div class="sub">
      <router-link class="link_sub_menu " :to="{ name: 'SeeCompanyCreateUser' }">Créer un salarié</router-link>
    </div>
    <div class="sub">
      <router-link class="link_sub_menu " :to="{ name: 'SeeCompanyCreateFileWork' }">Fiche métier</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubMenuCompany",
};
</script>
