<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
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
        <p class="stxm-m" :class="user.themeColor.colorText">
          Numéro de siret: <span :class="user.themeColor.colorTextImportant">{{ user.company.siret }}</span>
        </p>
        <p></p>
        <p class="stxm-m" :class="user.themeColor.colorText">
          Code NAF: <span :class="user.themeColor.colorTextImportant">{{ user.company.naf }}</span>
        </p>
        <p></p>
        <p class="stxm-m" :class="user.themeColor.colorText">
          Site de production - Filliale :
          <span :class="user.themeColor.colorTextImportant">{{ userCompanyFilliale }}</span>
        </p>
        <p></p>
      </div>
      <!-- info detail 2 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingUserInfoCompany",
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
  justify-content: flex-start;
}
.box_info_company .info_company:first-child {
  margin-right: 100px;
}
.box_info_company p {
  margin-bottom: 15px;
}
</style>
