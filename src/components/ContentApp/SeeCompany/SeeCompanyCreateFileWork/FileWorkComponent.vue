<template>
  <div>
    <!-- fiche metier -->
    <div class="box_fiche_metier">
      <div>
        <button @click="$emit('update:see-fiche-metier', false)" class="btn_return">ANNULER</button>
      </div>
      <div class="box_sous_title_page">
        <p>Indiquez la pondération des différentes compétences</p>
      </div>
      <div>
        <!-- line 1 -->
        <div class="line2">
          <div class="title_job">Metier : {{ competenceData.titleJob }}</div>
        </div>
        <!-- line 2 -->
        <div class="header_tab line">
          <div>Dénomination compétences</div>
          <div>Pondération</div>
          <div class="box_niveau">
            <div class="title_niveau">Niveaux de compétence</div>
            <div class="niveau">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
          <div>
            <div>Total</div>
          </div>
        </div>
        <!-- line 3 -->
        <div class="title_categories_competence line">
          <div>Compétences savoir</div>
        </div>
        <!-- lines of savoir -->
        <div>
          <div class="container line" v-for="(items, i) in competenceData.savoir" :key="i">
            <div class="items">{{ items.libelle }}</div>
            <div>
              <input type="text" v-model="items.ponderation" :name="items.libelle" @keyup="ponderationSavoir" />
            </div>
            <div class="container2">
              <div v-if="items.ponderation === '0'" class="n red"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '1'" class="n orange"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '2'" class="n green"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '3'" class="n blue"></div>
              <div v-else class="n"></div>
            </div>
            <div>{{ items.ponderation }}</div>
          </div>
        </div>
        <!-- line 4 -->
        <div class="title_categories_competence line">
          <div>Compétences savoir faire</div>
        </div>
        <!-- lines of savoir faire -->
        <div>
          <div class="container line" v-for="(items, i) in competenceData.savoirFaire" :key="i">
            <div class="items">{{ items.libelle }}</div>
            <div>
              <input type="text" v-model="items.ponderation" :name="items.libelle" @keyup="ponderationSavoirFaire" />
            </div>
            <div class="container2">
              <div v-if="items.ponderation === '0'" class="n red"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '1'" class="n orange"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '2'" class="n green"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '3'" class="n blue"></div>
              <div v-else class="n"></div>
            </div>
            <div>{{ items.ponderation }}</div>
          </div>
        </div>
        <!-- line 5 -->
        <div class="title_categories_competence line">
          <div>Compétences transverse</div>
        </div>
        <!-- lines of competence transverse -->
        <div>
          <div class="container line" v-for="(items, i) in competenceData.transverse" :key="i">
            <div class="items">{{ items.libelle }}</div>
            <div>
              <input type="text" v-model="items.ponderation" :name="items.libelle" @keyup="ponderationTransverse" />
            </div>
            <div class="container2">
              <div v-if="items.ponderation === '0'" class="n red"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '1'" class="n orange"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '2'" class="n green"></div>
              <div v-else class="n"></div>
              <div v-if="items.ponderation === '3'" class="n blue"></div>
              <div v-else class="n"></div>
            </div>
            <div>{{ items.ponderation }}</div>
          </div>
        </div>
        <!-- line 6 -->
        <div class="container line result">
          <div></div>
          <div></div>
          <div></div>
          <div>{{ competenceData.resultPonderation }}</div>
        </div>
      </div>
      <div class="div_btn_enregistrer">
        <button class="btn_return">ENREGISTRER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileWorkComponent",
  props: {
    competence: Object,
  },
  data() {
    return {
      competenceData: this.competence,
    };
  },

  methods: {
    //affect ponderation for competence savoir
    ponderationSavoir(event) {
      this.competenceData.savoir.forEach((element) => {
        if (element.libelle === event.target.name) {
          element.ponderation = event.target.value;
        }
      });
      this.addedPonderation();
      console.log(this.competenceData.savoir);
    },

    //affect ponderation for competence savoir faire
    ponderationSavoirFaire(event) {
      this.competenceData.savoirFaire.forEach((element) => {
        if (element.libelle === event.target.name) {
          element.ponderation = event.target.value;
        }
      });
      this.addedPonderation();
      console.log(this.competenceData.savoirFaire);
    },

    //affect ponderation for competence transverse
    ponderationTransverse(event) {
      this.competenceData.transverse.forEach((element) => {
        if (element.libelle === event.target.name) {
          element.ponderation = event.target.value;
        }
      });
      this.addedPonderation();
      console.log(this.competenceData.transverse);
    },

    addedPonderation() {
      this.competenceData.resultPonderation = 0;
      this.competenceData.savoir.forEach((ele) => {
        this.competenceData.resultPonderation += Number(ele.ponderation);
      });
      this.competenceData.savoirFaire.forEach((ele) => {
        this.competenceData.resultPonderation += Number(ele.ponderation);
      });
      this.competenceData.transverse.forEach((ele) => {
        this.competenceData.resultPonderation += Number(ele.ponderation);
      });
    },
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.box_sous_title_page {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #4c39e9;
  padding: 50px;
}

/* input {
  width: 30px;
  height: 30px;
  font-size: 1.6rem;
  text-align: center;
  background-color: #f2f0ff;
  outline: transparent;
  border: transparent;
}

input:focus {
  outline: #4c39e9 solid 2px;
} */

.title_job {
  font-weight: 900;
}

.in {
  width: 100%;
}

.line {
  padding: 7px 0;
  border-bottom: 1px solid #000000;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
}

.line2 {
  border-bottom: 1px solid #000000;
  padding: 10px 10px;
}

.n {
  background-color: #ffffff;
  border: 2px solid #f2f0ff;
  width: 100%;
  height: 30px;
}

.red {
  background-color: #ff3c3c;
}
.orange {
  background-color: #ffba4a;
}
.green {
  background-color: #85ff66;
}
.blue {
  background-color: #626dff;
}

.items {
  padding-left: 30px;
  width: 100%;
  text-align: left;
}

.title_categories_competence {
  background-color: #f2f0ff;
  color: #4c39e9;
  font-weight: 900;
  padding-left: 30px;
}

.box_fiche_metier {
  padding: 50px 100px;
}

.box_niveau {
  width: 100%;
}

.title_niveau {
  text-align: center;
  padding: 5px 0;
}

.niveau {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.niveau span {
  flex: 1;
  text-align: center;
  border: 1px solid #000000;
  border-bottom: transparent;
}

.header_tab {
  display: grid;
  grid-template-columns: 4fr 1fr 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
}

.container {
  display: grid;
  grid-template-columns: 4fr 1fr 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
}

.container2 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  align-items: center;
}

.btn_return {
  font-size: 1.2rem;
  align-items: center;
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 5px;
  color: #4c39e9;
  border: 2px solid #4c39e9;
  transition: all 0.6s;
  margin-bottom: 10px;
}

.btn_return:hover {
  cursor: pointer;
  background: #4c39e9;
  color: #ffffff;
}

.btn_return:focus {
  outline: none;
}

.div_btn_enregistrer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
}

.result {
  color: #4c39e9;
  font-size: 1.8rem;
  font-weight: 900;
}
</style>
