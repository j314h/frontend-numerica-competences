<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <form @submit.prevent="updateUser">
      <div class="box_info_detail">
        <!-- info box 1 -->
        <div class="info_detail">
          <div>
            <label>Prénom</label>
            <input type="text" v-model="dataForm.firstName" class="input space_input" required />
          </div>
          <div>
            <label class="space_input">Nom</label>
            <input type="text" v-model="dataForm.lastName" class="input space_input" required />
          </div>
          <div>
            <label class="space_input">Adresse</label>
            <input type="text" v-model="dataForm.street" class="input space_input" />
          </div>
          <div>
            <label class="space_input">Code postale</label>
            <input type="text" v-model="dataForm.postCode" class="input space_input" />
          </div>
          <div>
            <label class="space_input">Ville</label>
            <input type="text" v-model="dataForm.city" class="input space_input" />
          </div>
          <div>
            <label class="space_input">Téléphone</label>
            <input type="tel" v-model="dataForm.phoneNumber" class="input space_input" />
          </div>
          <div>
            <label class="space_input">Adresse mail</label>
            <input type="email" v-model="dataForm.email" class="input space_input" autocomplete="off" required />
          </div>
        </div>

        <!-- info password -->
        <div class="info_detail">
          <div>
            <label>Mot de passe</label>
            <input
              type="password"
              v-model="passwordOld"
              class="input space_input"
              placeholder="Ancien mot de passe"
              autocomplete="new-password"
            />
            <input
              type="password"
              v-model="password"
              class="input space_input"
              placeholder="Nouveau mot de passe"
              autocomplete="new-password"
            />
            <input
              type="password"
              v-model="confirmPasswordNew"
              class="input space_input"
              placeholder="Confirmer mot de passe"
              autocomplete="new-password"
            />
            <error-content class="error_password" :error="errors[errors.length - 1]"></error-content>
            <div v-if="user.role.libelle === 'root' || user.role.libelle === 'admin'">
              <label>Rôle</label>
              <v-select
                class="select"
                :options="['root', 'administrateur', 'référent', 'manager', 'collaborateur']"
                v-model="dataForm.role"
              ></v-select>
            </div>
            <div v-else>
              <p class="stxm-m" :class="user.themeColor.colorText">Rôle</p>
              <p>{{ user.role.libelle }}</p>
            </div>
            <div>
              <p class="stxm-m" :class="user.themeColor.colorText">Statu</p>
              <p>{{ user.state.libelle }}</p>
            </div>
            <div>
              <p class="stxm-m" :class="user.themeColor.colorText">Nombre de clients</p>
              <p>0</p>
            </div>
            <div class="box_btn">
              <button-app :mini="true" :textBtn="'Enregristrer'"></button-app>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonApp from "../../../Elements/ButtonApp";
import ErrorContent from "../../../Elements/ErrorContent.vue";
import VSelect from "@alfsnd/vue-bootstrap-select/src/vue-bootstrap-select";

export default {
  components: { ButtonApp, ErrorContent, VSelect },
  name: "SettingUserInfoUpdate",
  data() {
    return {
      //data for update user, send for api
      dataForm: {
        firstName: this.$store.getters["UserConnect/currentUser"].name.firstName,
        lastName: this.$store.getters["UserConnect/currentUser"].name.lastName,
        street: this.$store.getters["UserConnect/currentUser"].address.street,
        postCode: this.$store.getters["UserConnect/currentUser"].address.postCode,
        city: this.$store.getters["UserConnect/currentUser"].address.city,
        phoneNumber: this.$store.getters["UserConnect/currentUser"].phoneNumber,
        email: this.$store.getters["UserConnect/currentUser"].email,
        role: this.$store.getters["UserConnect/currentUser"].role.libelle,
        passwordOld: "",
        password: "",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      //for wait the controle in function updateUser
      passwordOld: "",
      password: "",
      confirmPasswordNew: "",
      messageAlert: "",
    };
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //update user
    async updateUser() {
      try {
        //if the password is entered, and the new password does not match, we find an error
        if (this.passwordOld) {
          if (this.password === this.confirmPasswordNew && this.password && this.confirmPasswordNew) {
            this.dataForm.passwordOld = this.passwordOld;
            this.dataForm.password = this.password;
            this.messageAlert = "Updating user is completed with password";
          } else {
            throw new Error("An error occurred while updating the password");
          }
        } else {
          this.messageAlert = "Updating user is successful without password";
        }
        //call api for update user
        await this.$store.dispatch("UserConnect/updateUserRefMin", this.dataForm);
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: this.messageAlert,
          showConfirmButton: false,
          timer: 2000,
        });
        //reset tab errors in UserConnect
        this.$store.commit("UserConnect/resetErrors");
        //close window update with function in component parent
        this.$parent.update();
      } catch (e) {
        //clear input password
        this.dataForm.passwordOld = "";
        this.dataForm.password = "";
        this.passwordOld = "";
        this.password = "";
        this.confirmPasswordNew = "";
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

    //function to format information for display
    user() {
      return this.$store.getters["UserConnect/currentUser"];
    },
    userName() {
      return `
      ${this.user.civility}
      ${this.upperFirstLetter(this.user.name.firstName)}
      ${this.upperFirstLetter(this.user.name.lastName)}
      `;
    },
    userAddress() {
      return `
      ${this.user.address.postCode}
      ${this.upperFirstLetter(this.user.address.city)}
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 7px 0;
}
label {
  display: block;
}
.space_input {
  margin: 10px 0 0 0;
}
.box_info_detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 40px;
}
.info_detail {
  padding: 30px;
}
.box_info_detail .info_detail:nth-child(1) {
  min-width: 250px;
  flex: 2;
}
.box_info_detail .info_detail:nth-child(2) {
  min-width: 250px;
  flex: 2;
}
.select {
  margin: 10px 0 30px 0;
  width: 80%;
}
.box_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  width: 80%;
}
.error_password {
  margin: 20px 0;
}
@media screen and (max-width: 884px) {
  .box_info_detail .info_detail:nth-child(2) {
    margin: 0px 0 10px 0px;
  }
}
</style>
