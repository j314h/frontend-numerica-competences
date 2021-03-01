<template>
  <div>
    <div class="sub">
      <router-link class="link_sub_menu" :to="{ name: 'DashHome' }">Accueil</router-link>
    </div>
    <div class="sub">
      <router-link class="link_sub_menu" :to="{ name: 'CreateCompany' }">Créer une entreprise</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubMenuDashbord",
};
</script>

<style></style>
