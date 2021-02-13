<template>
  <div>
    <!-- component fiche metier -->
    <!-- <div v-if="seeFicheMetier === true">
      <file-work-component
        :see-fiche-metier="seeFicheMetier"
        @update:see-fiche-metier="seeFicheMetier = $event"
        :competence="competence"
      ></file-work-component>
    </div> -->

    <!-- search and list appellation -->
    <div v-if="seeFicheMetier === false">
      <!-- field search -->
      <div class="cfwc_box_search_trade">
        <input-label-sample
          :placeholder="'Rechercher un métier'"
          :textLabel="'Saisissez un metier et selectionnez dans la liste déroulante'"
          :type="'text'"
          :themeColor="thColor"
          :value="valueSearch"
          v-model="valueSearch"
          v-on:keyup="captureLetter"
        ></input-label-sample>
        <button-sample
          class="cfwc_btn_reset_search_trade"
          @click="btnReset"
          :smallBtn="true"
          :textBtn="'Effacer'"
          :themeColor="thColor"
        ></button-sample>
      </div>
      <div v-if="search === true" class="cfwc_box_list_appellation">
        <div>
          <option
            class="cfwc_box_option_list_appellation"
            @click="takeCompetence"
            v-for="(items, i) in newTab"
            :key="i"
            :value="items.code"
          >
            {{ items.libelle }}
          </option>
        </div>
      </div>

      <!-- post result of competence for appellation selected -->
      <div class="box_list_competence" v-if="competenceOk === true">
        <div>
          <h2><span>Métier selectionné : </span>{{ listCompetences.libelle }}</h2>
        </div>

        <!-- global competence -->
        <div>
          <!-- list savoir -->
          <form id="savoirSubmit" @submit.prevent="competenceSavoirValidate">
            <div v-if="savoir === true" class="box_competence_savoir">
              <div>
                <h3>Validez les compétences de type : Savoir</h3>
              </div>
              <div v-for="(items, i) in listCompetences.competencesDeBase" :key="i">
                <div v-if="items.typeCompetence === 'Savoir'">
                  <input
                    type="checkbox"
                    :name="items.libelle"
                    :id="items.libelle"
                    :value="items.libelle"
                    v-model="competenceValidate.competenceSavoir"
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
                  ><span @click.prevent="seeInputCompetenceSavoir" class="span_add_competence"
                    >Ajouter une compétence</span
                  >
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

          <!-- list savoir faire -->
          <form id="savoirFaireSubmit" @submit.prevent="competenceSavoirFaireValidate">
            <div v-if="savoirfaire === true" class="box_competence_savoirfaire">
              <div>
                <h3>Validez les compétences de type : Savoir faire</h3>
              </div>
              <div v-for="(items, i) in listCompetences.competencesDeBase" :key="i">
                <div v-if="items.typeCompetence === 'SavoirFaire'">
                  <input
                    type="checkbox"
                    :name="items.libelle"
                    :id="items.libelle"
                    :value="items.libelle"
                    v-model="competenceValidate.competenceSavoirFaire"
                  />
                  <label :for="items.libelle">{{ items.libelle }}</label>
                </div>
              </div>
              <!-- add manual competence -->
              <div>
                <div class="box_input_add_competence" v-if="addSavoirFaire === true">
                  <div>
                    <input
                      placeholder="Renseignez votre compétence"
                      id="input_add"
                      type="text"
                      v-model="newCompetenceSavoirFaire.libelle"
                    />
                  </div>
                  <div>
                    <button class="btn_add_competence" @click.prevent="addCompetenceSavoirFaire">Ajouter</button>
                  </div>
                </div>
                <div class="box_svg_add_competence">
                  <svg
                    class="svg_add"
                    @click.prevent="seeInputCompetenceSavoirFaire"
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
                  ><span @click.prevent="seeInputCompetenceSavoirFaire" class="span_add_competence"
                    >Ajouter une compétence</span
                  >
                </div>
              </div>
              <div class="box_btn_validate_competence">
                <button @click="returnSavoir" class="btn_checked_competence">RETOUR</button>
                <button form="savoirFaireSubmit" type="submit" class="btn_checked_competence">VALIDER</button>
              </div>
            </div>
          </form>

          <!-- list transverse -->
          <form id="transverseSubmit" @submit.prevent="competenceTransverseValidate">
            <div v-if="transverse === true" class="box_competence_transverse">
              <div>
                <h3>Validez les compétences de type : Transverse</h3>
              </div>
              <div v-for="(specifique, i) in listCompetences.groupesCompetencesSpecifiques" :key="i">
                <div v-for="(items, i) in specifique.competences" :key="i">
                  <input
                    type="checkbox"
                    :name="items.libelle"
                    :id="items.libelle"
                    :value="items.libelle"
                    v-model="competenceValidate.competenceTransverse"
                  />
                  <label :for="items.libelle">{{ items.libelle }}</label>
                </div>
              </div>
              <!-- add manual competence -->
              <div>
                <div class="box_input_add_competence" v-if="addTransverse === true">
                  <div>
                    <input
                      placeholder="Renseignez votre compétence"
                      id="input_add"
                      type="text"
                      v-model="newCompetenceTransverse.libelle"
                    />
                  </div>
                  <div>
                    <button class="btn_add_competence" @click.prevent="addCompetenceTransverse">Ajouter</button>
                  </div>
                </div>
                <div class="box_svg_add_competence">
                  <svg
                    class="svg_add"
                    @click.prevent="seeInputCompetenceTransverse"
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
                  ><span @click.prevent="seeInputCompetenceTransverse" class="span_add_competence"
                    >Ajouter une compétence</span
                  >
                </div>
              </div>
              <div class="box_btn_validate_competence">
                <button @click="returnSavoirFaire" class="btn_checked_competence">RETOUR</button>
                <button form="transverseSubmit" type="submit" class="btn_checked_competence">VALIDER</button>
              </div>
            </div>
          </form>
        </div>
        <!-- end global competence -->
      </div>
      <!-- end post result -->
    </div>
    <!-- end component -->
  </div>
</template>

<script>
//import FileWorkComponent from "./FileWorkComponent";
import { mapGetters, mapState } from "vuex";
import ButtonSample from "../../../../Elements/Buttons/ButtonSample";
import InputLabelSample from "../../../../Elements/Inputs/InputLabelSample.vue";

export default {
  name: "CreateFileWorkComponent",
  components: {
    //FileWorkComponent,
    ButtonSample,
    InputLabelSample,
  },
  props: {
    isTradeSelected: Boolean,
  },
  data() {
    return {
      valueSearch: "",
      newTab: null,
      search: false,
      competenceOk: false,
      savoir: false,
      savoirfaire: false,
      transverse: false,
      newCompetenceSavoir: {
        typeCompetence: "Savoir",
        libelle: null,
      },
      newCompetenceSavoirFaire: {
        typeCompetence: "SavoirFaire",
        libelle: null,
      },
      newCompetenceTransverse: {
        typeCompetence: "Transverse",
        libelle: null,
      },
      addSavoir: false,
      addSavoirFaire: false,
      addTransverse: false,
      competenceValidate: {
        competenceSavoir: [],
        competenceSavoirFaire: [],
        competenceTransverse: [],
      },
      seeFicheMetier: false,
      competence: {
        savoir: [],
        savoirFaire: [],
        transverse: [],
        titleJob: null,
        resultPonderation: 0,
      },
    };
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),
    ...mapState("ApiRom", {
      listAppellation: "appellations",
      listCompetences: "competenceOfAppellationSelected",
    }),

    //filter of limit number this appellation
    filterItems() {
      return this.newTab.slice(0, 25);
    },
  },
  methods: {
    seeInputCompetenceSavoir() {
      this.addSavoir = true;
    },

    seeInputCompetenceSavoirFaire() {
      this.addSavoirFaire = true;
    },

    seeInputCompetenceTransverse() {
      this.addTransverse = true;
    },

    addCompetenceSavoir() {
      if (this.newCompetenceSavoir.libelle != null) {
        this.listCompetences.competencesDeBase.push(this.newCompetenceSavoir);
        this.newCompetenceSavoir = {
          typeCompetence: "Savoir",
          libelle: null,
        };
        this.addSavoir = false;
        console.log(this.listCompetences.competencesDeBase);
      } else {
        this.addSavoir = false;
      }
    },

    addCompetenceSavoirFaire() {
      if (this.newCompetenceSavoirFaire.libelle != null) {
        this.listCompetences.competencesDeBase.push(this.newCompetenceSavoirFaire);
        this.newCompetenceSavoirFaire = {
          typeCompetence: "SavoirFaire",
          libelle: null,
        };
        this.addSavoirFaire = false;
        console.log(this.listCompetences.competencesDeBase);
      } else {
        this.addSavoirFaire = false;
      }
    },

    addCompetenceTransverse() {
      if (this.newCompetenceTransverse.libelle != null) {
        this.listCompetences.groupesCompetencesSpecifiques.push({ competences: [this.newCompetenceTransverse] });
        this.newCompetenceTransverse = {
          typeCompetence: "Transverse",
          libelle: null,
        };
        this.addTransverse = false;
        console.log(this.listCompetences.groupesCompetencesSpecifiques);
      } else {
        this.addTransverse = false;
      }
    },

    //request for recover competence of appellation selected
    async takeCompetence(event) {
      await this.$store.dispatch("ApiRom/getCompetencesOfAppellations", event.target.value);
      this.$emit("update:isTradeSelected", true);
      this.btnReset();
      // try {
      //   const competences = await axios.get(`${this.baseUrlApiRome}/appellation/${event.target.value}`, {
      //     headers: this.headers,
      //   });
      //   console.log(competences.data);
      //   this.listCompetences = competences.data;
      //   this.valueSearch = "";
      //   this.search = false;
      //   this.competenceOk = true;
      //   this.savoir = true;
      // } catch (error) {
      //   console.log(error);
      // }
    },

    //search with letter of input, search in appellation
    captureLetter() {
      this.valueSearch != "" ? (this.search = true) : (this.search = false);
      this.newTab = this.listAppellation.filter((el) => {
        return el.libelle.toLowerCase().startsWith(this.valueSearch.toLowerCase());
      });
      this.newTab.length > 11090 || this.newTab[0] === undefined ? (this.search = false) : (this.search = true);
      return this.newTab;
    },

    //return in first competence (savoir)
    returnSavoir() {
      this.savoir = true;
      this.savoirfaire = false;
      this.competence.savoir = [];
    },

    //return in second competence (savoirfaire)
    returnSavoirFaire() {
      this.savoirfaire = true;
      this.transverse = false;
      this.competence.savoirFaire = [];
    },

    //reset this data
    btnReset() {
      this.newTab = null;
      this.valueSearch = "";
      this.search = false;

      this.competenceOk = false;
      this.savoir = false;
      this.savoirfaire = false;
      this.transverse = false;
      this.competenceValidate.competenceSavoir = [];
      this.competenceValidate.competenceSavoirFaire = [];
      this.competenceValidate.competenceTransverse = [];
      this.competence.titleJob = null;
      this.competence.savoir = [];
      this.competence.savoirFaire = [];
      this.competence.transverse = [];
    },

    //submit form competence savoir
    competenceSavoirValidate() {
      console.log(this.competenceValidate.competenceSavoir);
      this.competenceValidate.competenceSavoir.forEach((element) => {
        const object = {
          ponderation: 0,
          libelle: element,
        };
        this.competence.savoir.push(object);
      });
      console.log(this.competence.savoir);
      this.savoir = false;
      this.savoirfaire = true;
    },

    //submit form competence savoirfaire
    competenceSavoirFaireValidate() {
      console.log(this.competenceValidate.competenceSavoirFaire);
      this.competenceValidate.competenceSavoirFaire.forEach((element) => {
        const object = {
          ponderation: 0,
          libelle: element,
        };
        this.competence.savoirFaire.push(object);
      });
      console.log(this.competence.savoirFaire);
      this.savoirfaire = false;
      this.transverse = true;
    },

    //submit form competence transverse
    competenceTransverseValidate() {
      console.log(this.competenceValidate.competenceTransverse);
      this.competenceValidate.competenceTransverse.forEach((element) => {
        const object = {
          ponderation: 0,
          libelle: element,
        };
        this.competence.transverse.push(object);
      });
      console.log(this.competence.transverse);
      this.competenceOk = false;
      this.savoir = false;
      this.savoirfaire = false;
      this.transverse = false;
      this.seeFicheMetier = true;
      this.competence.titleJob = this.listCompetences.libelle;
    },
  },
  beforeupdated() {
    //reset before update
    this.btnReset();
  },
};
</script>

<style>
.box_btn_home {
  padding: 0 40px;
}

.component_create_file_jobs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2 {
  padding: 0 0 30px 0;
  font-weight: 700;
  color: #4c39e9;
  text-align: center;
}

.btn_reset {
  font-size: 1.3rem;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 5px;
  color: #4c39e9;
  border: 2px solid #4c39e9;
  transition: all 0.6s;
  margin-top: 10px;
  margin-left: 30px;
}

.btn_reset:hover {
  cursor: pointer;
  background: #4c39e9;
  color: #ffffff;
}

.btn_reset:focus {
  outline: none;
}

/*************** section search job */

.component_search {
  padding: 0 50px;
  flex: 0;
}

.input_search {
  border: transparent;
  background-color: #f2f0ff;
  font-size: 1.8rem;
  padding: 10px 20px;
  border-radius: 7px;
  width: 400px;
}

.input_search:hover {
  cursor: pointer;
}

.input_search:focus {
  outline: none;
}

/*********************************** */

/*************** section competence job */

/********** section savoir*/

.box_list_competence {
  flex: 2;
  margin: 50px auto;
  padding: 0 20px 50px 20px;
}

.box_competence_savoir {
  border: 1px solid #4c39e9;
  border-radius: 20px;
  padding: 50px;
}

.box_list_competence h3 {
  padding: 0 0 20px 0;
}

.box_list_competence input {
  -ms-transform: scale(1.3); /* IE */
  -moz-transform: scale(1.3); /* FF */
  -webkit-transform: scale(1.3); /* Safari and Chrome */
  -o-transform: scale(1.3); /* Opera */
  transform: scale(1.3);
  padding: 10px;
}

.box_list_competence label {
  font-size: 1.8rem;
  display: inline-block;
  margin: 0 0 15px 0;
  padding: 0 0 0 15px;
}

.btn_checked_competence {
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 5px;
  color: #4c39e9;
  border: 2px solid #4c39e9;
  transition: all 0.6s;
  margin-top: 10px;
  margin-left: 10px;
}

.btn_checked_competence:hover {
  cursor: pointer;
  background: #4c39e9;
  color: #ffffff;
}

.btn_checked_competence:focus {
  outline: none;
}

.box_btn_validate_competence_savoir {
  display: flex;
  justify-content: flex-end;
}

/********************** */

/********** section savoir faire*/

.box_competence_savoirfaire {
  border: 1px solid #4c39e9;
  border-radius: 20px;
  padding: 50px;
}

.box_btn_validate_competence {
  display: flex;
  justify-content: flex-end;
}

/********************** */

/********** section transverse*/

.box_competence_transverse {
  border: 1px solid #4c39e9;
  border-radius: 20px;
  padding: 50px;
}

h2 span {
  color: #000000;
}

#input_add {
  border: transparent;
  background-color: #f2f0ff;
  font-size: 1.1rem;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0 50px 0 30px;
  width: 200px;
}

#input_add:hover {
  cursor: pointer;
}

#input_add:focus {
  outline: none;
}

.svg_add:hover {
  cursor: pointer;
}

.span_add_competence {
  font-size: 1.3rem;
  color: #4c39e9;
  display: block;
  padding: 0 0 0 15px;
}

.span_add_competence:hover {
  cursor: pointer;
  text-decoration: underline;
}

.box_input_add_competence {
  display: flex;
  align-items: center;
  margin: 10px 0 20px 0;
}

.box_svg_add_competence {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0 0 0;
}

.btn_add_competence {
  font-size: 1.1rem;
  padding: 5px 8px;
  background: #ffffff;
  border-radius: 5px;
  color: #4c39e9;
  border: 2px solid #4c39e9;
  transition: all 0.6s;
}

.btn_add_competence:hover {
  background: #4c39e9;
  color: #ffffff;
  cursor: pointer;
}

.btn_add_competence:focus {
  outline: none;
}
</style>
