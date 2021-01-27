<template>
  <div class="box_info_company_selected">
    <div class="box_left">
      <div v-if="companySelected" class="box_info_company_primary">
        <p>{{ upperFirstLetter(companySelected.name) }}</p>
        <p>{{ companySelected.address.street }}</p>
        <p>
          <span>{{ companySelected.address.codePost }}</span
          ><span>{{ upperFirstLetter(companySelected.address.city) }}</span>
        </p>
        <p>
          Tél: <span :class="currentUser.themeColor.colorTextTab">{{ companySelected.phoneNumber }}</span>
        </p>
      </div>
      <div v-if="companySelected" class="box_info_company_secondary">
        <p>
          Site de production - Filliale:
          <span :class="currentUser.themeColor.colorTextTab">{{ upperFirstLetter(companySelected.filliale) }}</span>
        </p>
        <p>
          Numéro de siret: <span :class="currentUser.themeColor.colorTextTab">{{ companySelected.siret }}</span>
        </p>
        <p>
          Code NAF: <span :class="currentUser.themeColor.colorTextTab">{{ companySelected.naf }}</span>
        </p>
      </div>
    </div>
    <div class="box_right">
      <div class="box_info_company_secondary">
        <p>Nombre de salariés:</p>
        <p>Nombre de fiches métier:</p>
        <p>Nombre des entretients:</p>
      </div>
      <ul>
        Secteurs:
        <div v-if="sectorsCompanySelected.length > 0">
          <li v-for="(sector, i) in sectorsCompanySelected" :key="i" :class="currentUser.themeColor.colorTextTab">
            {{ upperFirstLetter(sector.libelle) }}
          </li>
        </div>
        <div v-else>
          <li :class="currentUser.themeColor.colorTextTab">Aucun Secteur</li>
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
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  padding: 10px 10px;
  list-style: none;
}
.box_info_company_selected {
  display: flex;
}
.box_left {
  flex: 1;
}
.box_right {
  flex: 1;
}
.box_info_company_primary {
  margin-bottom: 20px;
}
.box_info_company_primary p {
  margin-bottom: 5px;
}
.box_info_company_secondary p {
  margin-bottom: 10px;
}
</style>
