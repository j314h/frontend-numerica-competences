<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
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
          <error-content class="box_error" :error="errors[errors.length - 1]"></error-content>
          <div class="box_btn">
            <button-app :mini="true" :textBtn="'Modifier'"></button-app>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonApp from "../../../Elements/ButtonApp.vue";
import ErrorContent from "../../../Elements/ErrorContent.vue";

export default {
  components: { ButtonApp, ErrorContent },
  name: "SettingUserInfoCompanyUpdate",
  data() {
    return {};
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //call in fucntion for request api
    updateCompany() {
      this.$parent.updateCompany();
    },
  },
  computed: {
    //recover errors in store UserConnect
    ...mapGetters("UserConnect", ["errors"]),

    //recover current user
    user() {
      return this.$store.getters["UserConnect/currentUser"];
    },
    //format text company for see
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
.box_btn {
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-top: 30px;
}
.box_error {
  margin: 10px 0;
}
</style>
