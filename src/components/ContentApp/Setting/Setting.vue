<template>
  <div class="box_setting stxm-l">
    <!-- content for user info and user entreprise info -->
    <div class="global_user_info">
      <setting-user-info
        :currentUser="currentUser"
        :urlApiImg="urlApiImg"
        :authorization="authorization"
        :companiesAdmin="companiesAdmin"
        :currentUserCompany="currentUserCompany"
        :sectorsCompanyCurrentUser="sectorsCompanyCurrentUser"
        :errors="errors"
        :roles="roles"
        class="box"
        :class="currentUser.themeColor.cbgBox"
      ></setting-user-info>
    </div>

    <!-- content upload img for juste root user -->
    <div v-show="currentUser.role.libelle === 'root'">
      <!-- form change logo numerica access for role 'root'-->
      <div class="box_global_input_file">
        <!-- logo numerica -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
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
    </div>

    <!-- content theme colors -->
    <div>
      <div class="box dark_mode" :class="currentUser.themeColor.cbgBox">
        <setting-theme-color :currentUser="currentUser"></setting-theme-color>
      </div>
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
      roles: Array,
    };
  },
  created() {
    this.loadData();
  },
  updated() {
    this.loadData();
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
  },
  methods: {
    //load divers data static
    loadData() {
      this.roles = this.$store.getters["Roles/roles"];
      this.$store.commit("ParamApp/seeSubMenu", false);
      this.$store.commit("ParamApp/changeTitleHeadBand", "Paramètres");
    },
  },
};
</script>

<style lang="scss" scoped>
.box_setting {
  max-width: 1000px;
  margin: 0 auto;
}
.box_global_input_file {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box_title {
  display: flex;
  justify-content: center;
}
.box_subtitle {
  padding: 30px 0 0px 0;
}
.box_input_file {
  margin: 20px 0px 0 0;
  width: 290px;
}
.dark_mode {
  margin: 20px 0 0 0px;
}
@media (max-width: 600px) {
  .box_input_file {
    margin: 20px 0 0 0;
    width: 290px;
  }
}
</style>
