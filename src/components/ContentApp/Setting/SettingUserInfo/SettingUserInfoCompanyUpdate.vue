<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <h6 class="stxm-m subscrite_title" :class="user.themeColor.colorText">Votre entreprise</h6>
    <div class="box_info_company">
      <!-- info personel -->
      <div class="info_company">
        <p>{{ userCompanyName }}</p>
        <p>{{ user.company.address.street }}</p>
        <p>{{ userCompanyAddress }}</p>
        <p>{{ user.company.phoneNumber }}</p>
      </div>
      <!-- info detail -->
      <div class="info_company">
        <p class="stxm-m" :class="user.themeColor.colorText">Numéro de siret</p>
        <p>{{ user.company.siret }}</p>
        <p class="stxm-m" :class="user.themeColor.colorText">Code NAF</p>
        <p>{{ user.company.naf }}</p>
      </div>
      <!-- info detail 2 -->
      <div class="info_company">
        <p class="stxm-m" :class="user.themeColor.colorText">Site de production - Filliale</p>
        <p>{{ userCompanyFilliale }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingUserInfoCompanyUpdate",
  data() {
    return {};
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  computed: {
    user() {
      return this.$store.getters["UserConnect/currentUser"];
    },
    userCompanyName() {
      return this.user.company.name;
    },
    userCompanyAddress() {
      return `
      ${this.user.company.address.postCode} 
      ${this.upperFirstLetter(this.user.company.address.city)} 
      `;
    },
    userCompanyFilliale() {
      return this.upperFirstLetter(this.user.company.filliale);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 7px 0;
}
.subscrite_title {
  padding-bottom: 30px;
}
.box_info_company {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box_info_company .info_company:nth-child(1) {
  min-width: 300px;
  flex: 3;
}
.box_info_company .info_company:nth-child(2) {
  min-width: 200px;
  flex: 2;
  margin: 0 0 0 60px;
}
.box_info_company .info_company:nth-child(3) {
  min-width: 200px;
  flex: 2;
}
</style>
