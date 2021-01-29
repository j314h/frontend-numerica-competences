<template>
  <div class="stxm-r" :class="currentUser.themeColor.colorTextTab">
    <div class="box_info_company">
      <!-- info personel -->
      <div class="info_company">
        <p>{{ companyName }}</p>
        <p>{{ companyStreet }}</p>
        <p>{{ companyCodePostCity }}</p>
        <p>{{ currentUserCompany.phoneNumber }}</p>
      </div>

      <!-- info detail -->
      <div class="info_company">
        <!-- siret -->
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Numéro de siret:
          <span :class="currentUser.themeColor.colorTextImportant">{{ currentUserCompany.siret }}</span>
        </p>

        <!-- NAF -->
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Code NAF: <span :class="currentUser.themeColor.colorTextImportant">{{ currentUserCompany.naf }}</span>
        </p>

        <!-- filliale -->
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Site de production - Filliale :
          <span :class="currentUser.themeColor.colorTextImportant">{{ companyFilliale }}</span>
        </p>

        <!-- sectors -->
        <ul>
          <span class="stxm-m" :class="currentUser.themeColor.colorText">Secteurs:</span>
          <div v-if="sectorsCompanyCurrentUser.length > 0">
            <li v-for="(sector, i) in sectorsCompanyCurrentUser" :key="i" :class="currentUser.themeColor.colorTextTab">
              {{ upper(sector.libelle) }}
            </li>
          </div>
          <div v-else>
            <li :class="currentUser.themeColor.colorTextTab">Aucun Secteur</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "../../../../lib/services";

export default {
  name: "SettingUserInfoCompany",
  props: {
    currentUserCompany: Object,
    currentUser: Object,
    sectorsCompanyCurrentUser: Array,
  },
  methods: {
    //uppercase
    upper(str) {
      return Services.upperFirstLetter(str);
    },
  },
  computed: {
    //return name company
    companyName() {
      return Services.manyWordFirstLetterUpper(this.currentUserCompany.name);
    },

    //return company street with new format
    companyStreet() {
      return Services.streetOneLine(this.currentUserCompany.address.street);
    },

    //return new format address company
    companyCodePostCity() {
      return Services.codePostCityOneLine(
        this.currentUserCompany.address.postCode,
        this.currentUserCompany.address.city
      );
    },

    //return new formation for filliale company
    companyFilliale() {
      return Services.manyWordFirstLetterUpper(this.currentUserCompany.filliale);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  padding: 10px 10px;
  list-style: none;
}
p {
  margin: 7px 0;
}
.subscrite_title {
  padding-bottom: 30px;
}
.box_info_company {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.box_info_company .info_company:first-child {
  margin-right: 100px;
}
.box_info_company p {
  margin-bottom: 10px;
}
</style>
