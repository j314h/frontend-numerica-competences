<template>
  <div class="stxm-r">
    <form @submit.prevent="updateUser" class="box_info_detail_user_update">
      <!-- info box 1 -->
      <div class="item_user_update">
        <!-- last name -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`DUPONT`"
          :required="true"
          :textLabel="`Nom * : `"
          :type="'text'"
          :value="dataForm.data.name.lastName"
          v-model="dataForm.data.name.lastName"
        ></input-label-sample>

        <!-- first name -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Jean`"
          :required="true"
          :textLabel="`Pénom * : `"
          :type="'text'"
          :value="dataForm.data.name.firstName"
          v-model="dataForm.data.name.firstName"
        ></input-label-sample>

        <!-- street and number of street -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`15 Grande rue`"
          :required="false"
          :textLabel="`Adresse : `"
          :type="'text'"
          :value="dataForm.data.address.street"
          v-model="dataForm.data.address.street"
        ></input-label-sample>

        <!-- code post -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`75000`"
          :required="false"
          :textLabel="`Code postal : `"
          :type="'text'"
          :value="dataForm.data.address.postCode"
          v-model="dataForm.data.address.postCode"
        ></input-label-sample>

        <!-- city -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Paris`"
          :required="false"
          :textLabel="`Ville : `"
          :type="'text'"
          :value="dataForm.data.address.city"
          v-model="dataForm.data.address.city"
        ></input-label-sample>

        <!-- phone number -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`Téléphone mobile ou bureau`"
          :required="false"
          :textLabel="`Numéro de téléphone : `"
          :type="'text'"
          :value="dataForm.data.phoneNumber"
          v-model="dataForm.data.phoneNumber"
        ></input-label-sample>

        <!-- email -->
        <input-label-sample
          :themeColor="currentUser.themeColor"
          :placeholder="`jeandupond@mail.com`"
          :required="true"
          :textLabel="`Adresse mail * : `"
          :type="'text'"
          :value="dataForm.data.email"
          v-model="dataForm.data.email"
        ></input-label-sample>
      </div>

      <div class="item_user_update">
        <!-- info password -->
        <label class="label-sample stxm-m" :class="currentUser.themeColor.label">Mot de passe :</label>
        <div class="box_password_update_current_user">
          <input-sample
            :placeholder="'Ancien mot de passe'"
            :type="'password'"
            v-model="passwordOld"
            autocomplete="new-password"
          ></input-sample>
          <input-sample
            :placeholder="'Nouveau mot de passe'"
            :type="'password'"
            v-model="password"
            autocomplete="new-password"
          ></input-sample>
          <input-sample
            :placeholder="'Confirmation mot de passe'"
            :type="'password'"
            v-model="confirmPasswordNew"
            autocomplete="new-password"
          ></input-sample>
        </div>

        <!-- role for current user, juste root change role-->
        <div v-if="currentUser.role.libelle === 'root'">
          <v-select
            :textLabel="'Rôle * :'"
            :themeColor="currentUser.themeColor"
            :options="libellesRoles"
            v-model="dataForm.data.role"
          ></v-select>
        </div>

        <!-- errors -->
        <error-basic class="error_password" :error="errors"></error-basic>

        <!-- submit -->
        <div class="box_btn_user_update">
          <button-app :themeColor="currentUser.themeColor" :mini="true" :textBtn="'Modifier'"></button-app>
        </div>
      </div>
    </form>
    <text-info-form :text="'* Champs obligatoire'" :themeColor="currentUser.themeColor"></text-info-form>
  </div>
</template>

<script>
import ButtonApp from "../../../Elements/Buttons/ButtonApp";
import ErrorBasic from "../../../Elements/ErrorBasic.vue";
import VSelect from "../../../Elements/vue-bootstrap-select";
import InputLabelSample from "../../../Elements/Inputs/InputLabelSample";
import InputSample from "../../../Elements/Inputs/InputSample.vue";
import TextInfoForm from "../../../Elements/TextInfoForm";

export default {
  components: { ButtonApp, ErrorBasic, VSelect, InputLabelSample, InputSample, TextInfoForm },
  name: "SettingUserInfoUpdate",
  props: {
    currentUser: Object,
    roles: Array,
    errors: Array,
    isUpdateUser: Boolean,
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
            this.messageAlert = "Utilisateur et mot de passe modifier avec succès.";
          } else {
            throw new Error("Une erreur est survenue pendant la mise à jour du mot de passe.");
          }
        } else {
          this.messageAlert = "Utilisateur mise à jour réussis.";
        }

        //recover id for role selected
        const { _id } = this.roles.find((el) => el.libelle === this.dataForm.data.role);
        this.dataForm.data.role = _id;

        //call api for update user
        await this.$store.dispatch("CurrentUser/updateCurrentUser", this.dataForm);

        //if success show alert custom
        this.$swal.fire({
          position: "center",
          icon: "success",
          title: this.messageAlert,
          showConfirmButton: false,
          timer: 1500,
        });

        //close window update with function in component parent
        this.$emit("update:isUpdateUser", !this.isUpdateUser);
      } catch (error) {
        //clear input password
        this.clearInput();

        //if error show alert custom
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: error.response ? error.response.data.message : error.message, //if throw error see your error in throw
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

<style></style>
