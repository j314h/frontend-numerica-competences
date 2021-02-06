<template>
  <div class="box_info_company_selected">
    <div v-if="companySelected" class="info_company">
      <div class="box_info_company_primary" :class="themeColor.textBasic">
        <p>{{ upperFirstLetter(companySelected.name) }}</p>
        <p>{{ companySelected.address.street }}</p>
        <p>
          <span>{{ companySelected.address.codePost }}</span
          ><span>{{ upperFirstLetter(companySelected.address.city) }}</span>
        </p>
        <p>
          Tél: <span :class="themeColor.textImportant">{{ companySelected.phoneNumber }}</span>
        </p>
      </div>
      <div>
        <p>
          Site de production - Filliale :
          <span v-if="companySelected.filliale" :class="themeColor.textImportant">{{
            upperFirstLetter(companySelected.filliale)
          }}</span>
          <span v-else :class="themeColor.textImportant">-</span>
        </p>
        <p>
          Numéro de siret : <span :class="themeColor.textImportant">{{ companySelected.siret }}</span>
        </p>
        <p>
          Code NAF : <span :class="themeColor.textImportant">{{ companySelected.naf }}</span>
        </p>
      </div>
    </div>
    <div class="info_company">
      <div>
        <p>
          Nombre de salariés : <span :class="themeColor.textImportant">{{ nbrOfEmployees }}</span>
        </p>
        <p>Nombre de fiches métier :</p>
        <p>Nombre des entretients :</p>
      </div>
      <div>
        <label>
          Etat : <span :class="themeColor.textImportant">{{ companySelected.state.libelle }}</span>
        </label>
      </div>
      <ul>
        Secteurs :
        <div v-if="sectorsCompanySelected.length > 0">
          <li v-for="(sector, i) in sectorsCompanySelected" :key="i" :class="themeColor.textImportant">
            {{ upperFirstLetter(sector.libelle) }}
          </li>
        </div>
        <div v-else>
          <li :class="themeColor.textImportant">Aucun Secteur</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanySelectedInfo",
  props: {
    companySelected: Object,
    currentUser: Object,
    sectorsCompanySelected: Array,
    employeesCompanySelected: Array,
    themeColor: Object,
  },
  computed: {
    //return number of employee of company selected
    nbrOfEmployees() {
      return this.employeesCompanySelected.length;
    },
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style></style>
