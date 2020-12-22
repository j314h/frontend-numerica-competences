<template>
  <div class="c-t-secondary">
    <!-- slogan -->
    <div class="t-slogan slogan">
      <p>Pôle numérique</p>
      <p>de Bourgogne Franche-Comté</p>
    </div>
    <!-- title -->
    <h1 class="ti-1 title">Numerica compétences</h1>
    <!-- intro -->
    <div class="box_intro_home">
      <p class="t-intro">
        Numerica a conçu un module spécifique pour accompagner votre entreprise dans l’évaluation de ses collaborateurs
        et dans sa stratégie d’évolution des carrières.
      </p>
      <p class="t-intro">
        Ainsi, vous pouvez identifier instantanément les besoins en formation de vos employés.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeText",
};
</script>

<style lang="scss" scoped>
.slogan {
  max-width: 300px;
}
.title {
  margin: 50px 0;
}

.box_intro_home {
  max-width: 704px;
}

.box_intro_home p:nth-child(2) {
  margin-top: 25px;
}
</style>
