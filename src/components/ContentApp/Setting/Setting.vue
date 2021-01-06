<template>
  <div class="box_setting stxm-l">
    <!-- content for user info and user entreprise info -->
    <div class="global_user_info">
      <setting-user-info class="box" :class="currentUser.themeColor.cbgBox"></setting-user-info>
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
            :nameImgTarget="'logoNumerica'"
            :commandeDispatch="'ParamApp/changeLogoNumerica'"
            :title="'Modifier le logo Numerica principal'"
          ></setting-img>
        </div>
        <!-- logo personne -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoIdentifiant'"
            :commandeDispatch="'ParamApp/changeLogoIdentifiant'"
            :title="'Modifier l\'icon personnes, salariés, etc...'"
          ></setting-img>
        </div>
        <!-- logo menu -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
          <setting-img
            :bg="true"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoMenu'"
            :commandeDispatch="'ParamApp/changeLogoMenu'"
            :title="'Modifier le logo Numerica du menu'"
          ></setting-img>
        </div>
        <!-- logo numerica footer -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
          <setting-img
            :bg="true"
            :tailleW="'200px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoFooterNumerica'"
            :commandeDispatch="'ParamApp/changeLogoFooterNumerica'"
            :title="'Modifier le logo Numerica dans le bas de page'"
          ></setting-img>
        </div>
        <!-- logo update -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoUpdateElement'"
            :commandeDispatch="'ParamApp/changeLogoUpdateElement'"
            :title="'Modifier l\'icon de modification des élément'"
          ></setting-img>
        </div>
        <!-- logo close update -->
        <div class="box box_input_file" :class="currentUser.themeColor.cbgBox">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoCloseUpdateElement'"
            :commandeDispatch="'ParamApp/changelogoCloseUpdateElement'"
            :title="'Modifier l\'icon de fermeture'"
          ></setting-img>
        </div>
      </div>
    </div>
    <!-- content theme colors -->
    <div>
      <div class="box dark_mode" :class="currentUser.themeColor.cbgBox">
        <setting-theme-color></setting-theme-color>
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
    return {};
  },
  mounted() {
    //when loading the component, modify the title in the title bar
    this.$store.commit("ParamApp/changeTitleHeadBand", "Paramètres");
  },
  computed: {
    //get info user connected
    ...mapGetters("UserConnect", ["currentUser"]),
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
