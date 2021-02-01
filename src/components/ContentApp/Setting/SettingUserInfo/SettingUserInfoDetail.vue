<template>
  <div class="stxm-r" :class="currentUser.themeColor.colorTextTab">
    <div class="box_info_detail">
      <!-- info personnal -->
      <div class="info_detail">
        <p>
          {{ civ }} {{ firstName }} <span class="upper">{{ lastName }}</span>
        </p>
        <p>{{ street }}</p>
        <p>{{ codePostCity }}</p>
        <p>{{ currentUser.phoneNumber }}</p>
        <p>{{ currentUser.email }}</p>
      </div>

      <!-- info work -->
      <div class="info_detail">
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
      return Services.codePostCityOneLine(this.currentUser.address.codePost, this.currentUser.address.city);
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 7px 0;
}
.box_info_detail {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;
  padding-bottom: 40px;
}
.box_info_detail .info_detail {
  margin-right: 100px;
}
.info_detail p {
  margin-bottom: 10px;
}
.info_detail div p {
  margin-bottom: 20px;
}
</style>
