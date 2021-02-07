<template>
  <div class="stxm-r">
    <!-- content for user info and user entreprise info -->
    <setting-user-info
      :currentUser="currentUser"
      :urlApiImg="urlApiImg"
      :authorization="authorization"
      :companiesAdmin="companiesAdmin"
      :currentUserCompany="currentUserCompany"
      :sectorsCompanyCurrentUser="sectorsCompanyCurrentUser"
      :imageUpdateCompany="imageUpdateCompany"
      :imageCloseUpdateCompany="imageCloseUpdateCompany"
      :errors="errors"
      :themeColor="themeColor"
      :roles="roles"
      :class="currentUser.themeColor.cbgBox"
    ></setting-user-info>

    <!-- content upload img for juste root user -->
    <div class="box_setting_upload_image" v-show="currentUser.role.libelle === 'root'">
      <!-- form change logo numerica access for role 'root'-->
      <!-- logo numerica -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="false"
          :tailleW="'70px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoNumerica'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-numerica'"
          :title="'Modifier le logo Numerica principal'"
        ></setting-img>
      </div>

      <!-- logo personne -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="false"
          :tailleW="'70px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoIdentifiant'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-identifiant'"
          :title="'Modifier l\'icon personnes, salariés, etc...'"
        ></setting-img>
      </div>

      <!-- logo menu -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="true"
          :tailleW="'70px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoMenu'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-menu'"
          :title="'Modifier le logo Numerica du menu'"
        ></setting-img>
      </div>

      <!-- logo numerica footer -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="true"
          :tailleW="'200px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoFooterNumerica'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-numerica-footer'"
          :title="'Modifier le logo Numerica dans le bas de page'"
        ></setting-img>
      </div>

      <!-- logo update -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="false"
          :tailleW="'70px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoUpdateElement'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-update-element'"
          :title="'Modifier l\'icon de modification des élément'"
        ></setting-img>
      </div>

      <!-- logo close update -->
      <div class="item_upload_image" :class="currentUser.themeColor.cbgCard">
        <setting-img
          :bg="false"
          :tailleW="'70px'"
          :tailleH="'70px'"
          :currentUser="currentUser"
          :imgs="imgs"
          :nameImgTarget="'logoCloseUpdateElement'"
          :commandeDispatch="'Files/updateImg'"
          :targetUrl="'logo-close-update-element'"
          :title="'Modifier l\'icon de fermeture'"
        ></setting-img>
      </div>
    </div>

    <!-- content theme colors -->
    <div class="dark_mode" :class="currentUser.themeColor.cbgCard">
      <setting-theme-color :currentUser="currentUser"></setting-theme-color>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheFooter from "../../TheFooter/TheFooter.vue";
import SettingImg from "./SettingImg.vue";
import SettingThemeColor from "./SettingThemeColor.vue";
import SettingUserInfo from "./SettingUserInfo/SettingUserInfo.vue";

export default {
  components: { SettingImg, SettingThemeColor, SettingUserInfo, TheFooter },
  name: "Setting",
  data() {
    return {
      authorization: ["root", "administrateur", "référent"],
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      nameImageUpdate: "logoUpdateElement",
      nameImageCloseUpdate: "logoCloseUpdateElement",
    };
  },
  computed: {
    //load data dynamic
    currentUser() {
      return this.$store.getters["CurrentUser/currentUser"];
    },
    currentUserCompany() {
      return this.$store.getters["CurrentUser/currentUserCompany"];
    },
    companiesAdmin() {
      return this.$store.getters["Companies/companiesAdmin"];
    },
    sectorsCompanyCurrentUser() {
      return this.$store.getters["CurrentUser/sectorsCompanyCurrentUser"];
    },
    imgs() {
      return this.$store.getters["Files/imgs"];
    },
    errors() {
      return this.$store.getters["Error/errors"];
    },
    roles() {
      return this.$store.getters["Roles/roles"];
    },
    themeColor() {
      return this.$store.getters["CurrentUser/thColor"];
    },
    //this variable for change image pencil and X for update user and company
    imageUpdateCompany() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageUpdate);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
    //this variable for change image pencil and X for update user and company
    imageCloseUpdateCompany() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageCloseUpdate);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
  },
  methods: {},
};
</script>

<style></style>
