<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <form @submit.prevent="updateCompany">
      <div class="box_info_company">
        <!-- info personel company-->
        <div class="info_company">
          <div>
            <label>Dénomination sociale</label>
            <input class="input" type="text" v-model="dataForm.name" required />
          </div>
          <div>
            <label>Adresse, numéro et rue</label>
            <input class="input" type="text" v-model="dataForm.street" />
          </div>
          <div>
            <label>Code postal</label>
            <input class="input" type="text" v-model="dataForm.postCode" />
          </div>
          <div>
            <label>Ville</label>
            <input class="input" type="text" v-model="dataForm.city" required />
          </div>
          <div>
            <label>Numero de téléphone</label>
            <input class="input" type="text" v-model="dataForm.phoneNumber" required />
          </div>
        </div>
        <!-- info detail -->
        <div class="info_company">
          <div>
            <label>Numéro de Siret</label>
            <input class="input" type="text" v-model="dataForm.siret" required />
          </div>
          <div>
            <label>Code NAF</label>
            <input class="input" type="text" v-model="dataForm.naf" required />
          </div>
          <div>
            <label>Site de production</label>
            <input class="input" type="text" v-model="dataForm.filliale" />
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
    return {
      //data for request update company's user
      dataForm: {
        email: this.$store.getters["UserConnect/currentUser"].email,
        name: this.$store.getters["UserConnect/currentUser"].company.name,
        street: this.$store.getters["UserConnect/currentUser"].company.address.street,
        postCode: this.$store.getters["UserConnect/currentUser"].company.address.postCode,
        city: this.$store.getters["UserConnect/currentUser"].company.address.city,
        filliale: this.$store.getters["UserConnect/currentUser"].company.filliale,
        siret: this.$store.getters["UserConnect/currentUser"].company.siret,
        naf: this.$store.getters["UserConnect/currentUser"].company.naf,
        phoneNumber: this.$store.getters["UserConnect/currentUser"].company.phoneNumber,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    };
  },
  methods: {
    //call api for update company's user
    async updateCompany() {
      try {
        await this.$store.dispatch("UserConnect/updateCompanyRefMin", this.dataForm);
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Company is updating",
          showConfirmButton: false,
          timer: 1500,
        });
        //reset tab errors in UserConnect
        this.$store.commit("UserConnect/resetErrors");
        this.$parent.updateCompany();
      } catch (e) {
        //if error show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: e.response ? e.response.data.message : e.message, //if throw error see your error in throw
          showConfirmButton: false,
          timer: 2000,
        });
        //add error in tab in store UserConnect
        if (e.response) {
          this.$store.commit("UserConnect/addError", e.response.data.message);
        } else {
          this.$store.commit("UserConnect/addError", e.message);
        }
      }
    },
  },
  computed: {
    //recover errors in store UserConnect
    ...mapGetters("UserConnect", ["errors"]),

    //recover current user
    user() {
      return this.$store.getters["UserConnect/currentUser"];
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
