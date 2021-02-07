<template>
  <div class="box_info_detail_user" :class="currentUser.themeColor.textBasic">
    <!-- info personnal -->
    <div class="info_detail_user">
      <p>
        {{ civ }} {{ firstName }} <span class="upper">{{ lastName }}</span>
      </p>
      <p>{{ street }}</p>
      <p>{{ codePostCity }}</p>
      <p>
        Tél : <span :class="currentUser.themeColor.textImportant">{{ currentUser.phoneNumber }}</span>
      </p>
      <p>
        Email : <span :class="currentUser.themeColor.textImportant">{{ currentUser.email }}</span>
      </p>
    </div>

    <!-- info work -->
    <div class="info_detail_user">
      <!-- mot de passe -->
      <div>
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Mot de passe : <span :class="currentUser.themeColor.colorTextImportant">**********</span>
        </p>
      </div>

      <!-- role -->
      <div>
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Rôle : <span :class="currentUser.themeColor.colorTextImportant">{{ currentUser.role.libelle }}</span>
        </p>
      </div>

      <!-- statut -->
      <div>
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Statut : <span :class="currentUser.themeColor.colorTextImportant">{{ currentUser.state.libelle }}</span>
        </p>
      </div>

      <!-- etat du compte -->
      <div>
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Etat du compte :
          <span v-if="currentUser.activated === true" :class="currentUser.themeColor.colorTextImportant">Vérifé</span>
          <span v-else :class="currentUser.themeColor.colorTextImportant">Non vérifié</span>
        </p>
      </div>

      <!-- nombre de clients -->
      <div v-if="currentUser.role.libelle === 'root' || currentUser.role.libelle === 'administrateur'">
        <p class="stxm-m" :class="currentUser.themeColor.colorText">
          Nombre de clients :
          <span :class="currentUser.themeColor.colorTextImportant">{{ companiesAdmin.length }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "../../../../lib/services";

export default {
  name: "SettingUserInfoDetail",
  props: {
    currentUser: Object,
    companiesAdmin: Array,
  },
  computed: {
    //return civility
    civ() {
      return this.currentUser.civility;
    },
    //return first name and last name
    firstName() {
      return Services.upperFirstLetter(this.currentUser.name.firstName);
    },
    lastName() {
      return this.currentUser.name.lastName;
    },

    //create format street of address
    street() {
      return Services.streetOneLine(this.currentUser.address.street);
    },

    //return new format address user
    codePostCity() {
      return Services.codePostCityOneLine(this.currentUser.address.postCode, this.currentUser.address.city);
    },
  },
};
</script>

<style></style>
