<template>
  <div class="box_info_detail_user" :class="currentUser.themeColor.textBasic">
    <!-- info personel -->
    <div class="info_detail_user">
      <p>{{ companyName }}</p>
      <p>{{ companyStreet }}</p>
      <p>{{ companyCodePostCity }}</p>
      <p>
        Tél : <span :class="currentUser.themeColor.textImportant">{{ currentUserCompany.phoneNumber }}</span>
      </p>
    </div>

    <!-- info detail -->
    <div class="info_detail_user">
      <!-- siret -->
      <div class="stxm-m">
        Numéro de siret :
        <span :class="currentUser.themeColor.textImportant">{{ currentUserCompany.siret }}</span>
      </div>

      <!-- NAF -->
      <div class="stxm-m">
        Code NAF : <span :class="currentUser.themeColor.textImportant">{{ currentUserCompany.naf }}</span>
      </div>

      <!-- filliale -->
      <div class="stxm-m">
        Site de production - Filliale :
        <span :class="currentUser.themeColor.textImportant">{{ companyFilliale }}</span>
      </div>

      <!-- sectors -->
      <ul>
        <span class="stxm-m">Secteurs :</span>
        <div v-if="sectorsCompanyCurrentUser.length > 0">
          <li v-for="(sector, i) in sectorsCompanyCurrentUser" :key="i" :class="currentUser.themeColor.textImportant">
            {{ upper(sector.libelle) }}
          </li>
        </div>
        <div v-else>
          <li :class="currentUser.themeColor.textImportant">Aucun Secteur</li>
        </div>
      </ul>
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

<style></style>
