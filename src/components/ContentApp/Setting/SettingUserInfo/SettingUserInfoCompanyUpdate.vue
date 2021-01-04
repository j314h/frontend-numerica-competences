<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <h6 class="stxm-m subscrite_title" :class="user.themeColor.colorText">Votre entreprise</h6>
    <form @submit.prevent="updateCompany">
      <div class="box_info_company">
        <!-- info personel company-->
        <div class="info_company">
          <div>
            <label>Dénomination sociale</label>
            <input class="input" type="text" v-model="userCompanyName" required />
          </div>
          <div>
            <label>Adresse, numéro et rue</label>
            <input class="input" type="text" v-model="user.company.address.street" />
          </div>
          <div>
            <label>Code postal</label>
            <input class="input" type="text" v-model="user.company.address.postCode" />
          </div>
          <div>
            <label>Ville</label>
            <input class="input" type="text" v-model="user.company.address.city" required />
          </div>
        </div>
        <!-- info detail -->
        <div class="info_company">
          <div>
            <label>Site de production</label>
            <input class="input" type="text" v-model="user.company.filliale" />
          </div>
          <div>
            <label>Numéro de Siret</label>
            <input class="input" type="text" v-model="user.company.siret" required />
          </div>
          <div>
            <label>Code NAF</label>
            <input class="input" type="text" v-model="user.company.naf" required />
          </div>
          <div class="box_btn">
            <button-app :mini="true" :textBtn="'Modifier'"></button-app>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/ButtonApp.vue";

export default {
  components: { ButtonApp },
  name: "SettingUserInfoCompanyUpdate",
  data() {
    return {};
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    updateCompany() {},
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
label {
  display: block;
}
p {
  margin: 7px 0;
}
.box_btn {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-top: 30px;
}
.subscrite_title {
  padding-bottom: 30px;
}
.box_info_company {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box_info_company input {
  margin: 10px 0;
}
.box_info_company .info_company:nth-child(1) {
  min-width: 300px;
  flex: 1;
  padding: 0 30px;
}
.box_info_company .info_company:nth-child(2) {
  min-width: 300px;
  flex: 1;
  padding: 0 30px;
}
</style>
