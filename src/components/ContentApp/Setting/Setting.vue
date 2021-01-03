<template>
  <div class="stxm-l">
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
            :title="'Modifier le logo Numerica'"
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
            :title="'Modifier icon personnes, salariés, etc...'"
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
            :title="'Modifier logo Numerica menu'"
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
            :title="'Modifier logo Numerica dans le footer'"
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
            :title="'Modifier logo modifier un élément'"
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
            :title="'Modifier logo fermer les modifications'"
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
import SettingImg from "./SettingImg.vue";
import SettingThemeColor from "./SettingThemeColor.vue";
import SettingUserInfo from "./SettingUserInfo/SettingUserInfo.vue";

export default {
  components: { SettingImg, SettingThemeColor, SettingUserInfo },
  name: "Setting",
  data() {
    return {};
  },
  computed: {
    //get info user connected
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.box_global_input_file {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: start;
  justify-content: space-between;
}
.box_title {
  display: flex;
  justify-content: center;
}
.box_subtitle {
  padding: 30px 0 0px 0;
}
.box_input_file {
  margin-top: 20px;
  width: 290px;
}
.dark_mode {
  margin: 20px 0 0 0px;
}
</style>
