<template>
  <div>
    <!-- list savoir -->
    <form id="savoirSubmit" @submit.prevent="competenceSavoirValidate">
      <div v-if="isTradeSelected" class="box_competence_savoir">
        <div>
          <h3>Validez les compétences de type : Savoir</h3>
        </div>
        <div v-for="(items, i) in competenceOfAppellationSelected.competencesDeBase" :key="i">
          <div v-if="items.typeCompetence === 'Savoir'">
            <input
              type="checkbox"
              :name="items.libelle"
              :id="items.libelle"
              :value="items.libelle"
              v-model="competenceSavoir"
            />
            <label :for="items.libelle">{{ items.libelle }}</label>
          </div>
        </div>
        <!-- add manual competence -->
        <div>
          <div class="box_input_add_competence" v-if="addSavoir === true">
            <div>
              <input
                placeholder="Renseignez votre compétence"
                id="input_add"
                type="text"
                v-model="newCompetenceSavoir.libelle"
              />
            </div>
            <div>
              <button class="btn_add_competence" @click.prevent="addCompetenceSavoir">Ajouter</button>
            </div>
          </div>
          <div class="box_svg_add_competence">
            <svg
              class="svg_add"
              @click.prevent="seeInputCompetenceSavoir"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40C31.0457 40 40 31.0457 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM20 37.4999C10.335 37.4999 2.5 29.6649 2.5 19.9999C2.5 10.335 10.335 2.49994 20 2.49994C29.665 2.49994 37.5 10.335 37.5 19.9999C37.5 24.6412 35.6563 29.0924 32.3744 32.3743C29.0925 35.6562 24.6413 37.4999 20 37.4999ZM21.2501 18.75H30.2126C30.903 18.75 31.4626 19.3096 31.4626 20C31.4626 20.6903 30.903 21.25 30.2126 21.25H21.2501V30.2125C21.2501 30.9028 20.6905 31.4625 20.0001 31.4625C19.3097 31.4625 18.7501 30.9028 18.7501 30.2125V21.25H9.7876C9.09724 21.25 8.5376 20.6903 8.5376 20C8.5376 19.3096 9.09724 18.75 9.7876 18.75H18.7501V9.78748C18.7501 9.09712 19.3097 8.53748 20.0001 8.53748C20.6905 8.53748 21.2501 9.09712 21.2501 9.78748V18.75Z"
                fill="#4C39E9"
              /></svg
            ><span @click.prevent="seeInputCompetenceSavoir" class="span_add_competence">Ajouter une compétence</span>
          </div>
          <!-- <button @click.prevent="seeInputCompetenceSavoir">ADD</button> -->
        </div>
        <div class="box_btn_validate_competence_savoir">
          <button form="savoirSubmit" type="submit" class="btn_checked_competence">
            VALIDER
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CreateWork",
  props: {
    isTradeSelected: Boolean,
  },
  data() {
    return {
      competenceSavoir: [],
    };
  },
  computed: {
    ...mapState("ApiRom", ["competenceOfAppellationSelected"]),
  },
};
</script>

<style></style>
