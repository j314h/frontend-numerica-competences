<template>
  <div class="footer_box_menu">
    <!-- menu 1 -->
    <div class="footer_menu_1">
      <h4>Numerica Competence</h4>
      <ul>
        <li><router-link to="presentation">Présentation</router-link></li>
        <li><router-link to="conditions-utilisation">Conditions d'utilisation</router-link></li>
        <li><router-link to="mentions-legales">Mentions légales</router-link></li>
      </ul>
    </div>
    <!-- menu 2 -->
    <div class="footer_menu_2">
      <h4>Service</h4>
      <ul>
        <li><router-link to="contact">Contact</router-link></li>
        <li><router-link to="mise-a-jour">Mise à jour</router-link></li>
        <li><router-link to="sem-numerica">SEM Numerica</router-link></li>
        <li><router-link to="documentation">Documentation</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
//there "to" in tag router-link are provisional
export default {
  name: "FooterMenuComponent",
};
</script>
