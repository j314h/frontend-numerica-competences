<template>
  <div class="box_info_company_selected">
    <div class="box_left">
      <p>{{ upperFirstLetter(company.name) }}</p>
      <p>{{ company.address.street }}</p>
      <p>
        <span>{{ company.address.codePost }}</span
        ><span>{{ upperFirstLetter(company.address.city) }}</span>
      </p>
      <p>
        Tél: <span :class="user.themeColor.colorTextTab">{{ company.phoneNumber }}</span>
      </p>
      <p>
        Site de production - Filliale:
        <span :class="user.themeColor.colorTextTab">{{ upperFirstLetter(company.filliale) }}</span>
      </p>
      <p>
        Numéro de siret: <span :class="user.themeColor.colorTextTab">{{ company.siret }}</span>
      </p>
      <p>
        Code NAF: <span :class="user.themeColor.colorTextTab">{{ company.naf }}</span>
      </p>
    </div>
    <div class="box_right">
      <p>Nombre de salariés:</p>
      <p>Nombre de fiches métier:</p>
      <p>Nombre des entretients:</p>
      <ul>
        Secteurs:
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanySelectedInfo",
  props: {
    company: Object,
    user: Object,
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
</style>
