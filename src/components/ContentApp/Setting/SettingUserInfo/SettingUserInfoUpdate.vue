<template>
  <div class="stxm-r" :class="currentUser.themeColor.colorTextTab">
    <form @submit.prevent="updateUser">
      <div class="box_info_detail">
        <!-- info box 1 -->
        <div class="info_detail">
          <!-- first name -->
          <div>
            <label>Prénom</label>
            <input type="text" v-model="dataForm.data.name.firstName" class="input space_input" required />
          </div>

          <!-- last name -->
          <div>
            <label class="space_input">Nom</label>
            <input type="text" v-model="dataForm.data.name.lastName" class="input space_input" required />
          </div>

          <!-- street and number of street -->
          <div>
            <label class="space_input">Adresse, numéro et rue</label>
            <input type="text" v-model="dataForm.data.address.street" class="input space_input" />
          </div>

          <!-- code post -->
          <div>
            <label class="space_input">Code postal</label>
            <input type="text" v-model="dataForm.data.address.postCode" class="input space_input" />
          </div>

          <!-- city -->
          <div>
            <label class="space_input">Ville</label>
            <input type="text" v-model="dataForm.data.address.city" class="input space_input" />
          </div>

          <!-- phone number -->
          <div>
            <label class="space_input">Téléphone</label>
            <input type="tel" v-model="dataForm.data.phoneNumber" class="input space_input" />
          </div>

          <!-- email -->
          <div>
            <label class="space_input">Adresse mail</label>
            <input type="email" v-model="dataForm.data.email" class="input space_input" autocomplete="off" required />
          </div>
        </div>

        <!-- info password -->
        <div class="info_detail">
          <div>
            <label>Mot de passe</label>

            <!-- old password -->
            <input
              type="password"
              v-model="passwordOld"
              class="input space_input"
              placeholder="Ancien mot de passe"
              autocomplete="new-password"
            />

            <!-- new password -->
            <input
              type="password"
              v-model="password"
              class="input space_input"
              placeholder="Nouveau mot de passe"
              autocomplete="new-password"
            />

            <!-- confirme new password -->
            <input
              type="password"
              v-model="confirmPasswordNew"
              class="input space_input"
              placeholder="Confirmer mot de passe"
              autocomplete="new-password"
            />

            <!-- errors -->
            <error-content class="error_password" :error="errors"></error-content>

            <!-- role -->
            <div v-if="currentUser.role.libelle === 'root' || currentUser.role.libelle === 'admin'">
              <label>Rôle</label>
              <v-select class="select" :options="libellesRoles" v-model="dataForm.data.role"></v-select>
            </div>

            <!-- submit -->
            <div class="box_btn">
              <button-app :mini="true" :textBtn="'Modifier'"></button-app>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/ButtonApp";
import ErrorContent from "../../../Elements/ErrorContent.vue";
import VSelect from "../../../Elements/vue-bootstrap-select";

export default {
  components: { ButtonApp, ErrorContent, VSelect },
  name: "SettingUserInfoUpdate",
  props: {
    currentUser: Object,
    roles: Array,
    errors: Array,
  },
  data() {
    return {
      //data for update user, send for api
      dataForm: {
        data: {
          name: {
            firstName: this.currentUser.name.firstName,
            lastName: this.currentUser.name.lastName,
          },
          address: {
            street: this.currentUser.address.street,
            postCode: this.currentUser.address.postCode,
            city: this.currentUser.address.city,
          },
          phoneNumber: this.currentUser.phoneNumber,
          email: this.currentUser.email,
          role: this.currentUser.role.libelle,
        },
        _id: this.currentUser._id,
        oldPassword: "",
        password: "",
      },
      //for wait the controle in function updateUser
      passwordOld: "",
      password: "",
      confirmPasswordNew: "",
      messageAlert: "",
    };
  },
  methods: {
    //update user
    async updateUser() {
      try {
        //reset tab errors in UserConnect
        this.$store.commit("Error/resetError");

        //if the password is entered, and the new password does not match, we find an error
        if (this.passwordOld) {
          if (this.password === this.confirmPasswordNew && this.password && this.confirmPasswordNew) {
            this.dataForm.oldPassword = this.passwordOld;
            this.dataForm.password = this.password;
            this.messageAlert = "Updating user is completed with password";
          } else {
            throw new Error("An error occurred while updating the password");
          }
        } else {
          this.messageAlert = "Updating user is successful without password";
        }

        //recover id for role selected
        const { _id } = this.roles.find((el) => el.libelle === this.dataForm.data.role);
        this.dataForm.data.role = _id;

        //call api for update user
        await this.$store.dispatch("CurrentUser/updateCurrentUser", this.dataForm);

        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: this.messageAlert,
          showConfirmButton: false,
          timer: 1500,
        });

        //close window update with function in component parent
        this.$parent.updateUser();
      } catch (error) {
        //clear input password
        this.clearInput();

        //if error show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: e.response ? e.response.data.message : e.message, //if throw error see your error in throw
          showConfirmButton: false,
          timer: 2000,
        });

        //add error in tab in store UserConnect
        this.$store.commit("Error/addError", error);
      }
    },

    //clear input with value out of data base
    clearInput() {
      this.dataForm.oldPassword = "";
      this.dataForm.password = "";
      this.passwordOld = "";
      this.password = "";
      this.confirmPasswordNew = "";
    },
  },
  computed: {
    libellesRoles() {
      return this.roles.map((el) => el.libelle);
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
