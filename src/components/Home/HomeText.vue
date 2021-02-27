<template>
  <div class="home_text">
    <!-- slogan -->
    <div class="home_text_slogan upper">
      <p>Pôle numérique</p>
      <p>de Bourgogne Franche-Comté</p>
    </div>

    <!-- title -->
    <div class="home_text_title">
      <H1Component :text="'Numerica compétences'" />
    </div>

    <!-- intro -->
    <div class="home_text_intro stl-r">
      <p>
        Numerica a conçu un module spécifique pour accompagner votre entreprise dans l’évaluation de ses collaborateurs
        et dans sa stratégie d’évolution des carrières.
      </p>
      <p>
        Ainsi, vous pouvez identifier instantanément les besoins en formation de vos employés.
      </p>
    </div>
  </div>
</template>

<script>
//components
import H1Component from "../../components-globals/Titles/H1Component";

export default {
  name: "HomeText",
  components: {
    H1Component,
  },
};
</script>
