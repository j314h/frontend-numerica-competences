<template>
  <div class="menus_footer c-t-secondary">
    <!-- menu 1 -->
    <div class="menu_1">
      <h4>Numerica Competence</h4>
      <ul>
        <li><router-link to="presentation">Présentation</router-link></li>
        <li><router-link to="conditions-utilisation">Conditions d'utilisation</router-link></li>
        <li><router-link to="mentions-legales">Mentions légales</router-link></li>
      </ul>
    </div>
    <!-- menu 2 -->
    <div>
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

<style scoped>
/** globals */

.menus_footer {
  display: flex;
  height: 100%;

  padding-right: 65px;

  font-size: 1.2rem;
}

h4 {
  margin-bottom: 8px;
  color: var(--color-secondary-text);
  text-transform: uppercase;
  font-weight: 900;
}

ul {
  list-style: none;
}

a {
  display: block;
  height: 22px;
  color: #7e818b;
  text-decoration: none;
}

a:hover {
  color: #ffffff;
}

/** menu 1 */

.menu_1 {
  margin-right: 70px;
}

/** mobile */

@media screen and (max-width: 800px) {
  .menus_footer {
    display: flex;
    flex-direction: column;
    margin: 50px 0 50px 0;
  }
}
</style>
