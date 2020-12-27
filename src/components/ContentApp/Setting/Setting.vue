<template>
  <div class="stxm-l">
    <!-- title of page -->
    <div class="box_title">
      <h3 class="stl-m">Paramètres de l'application</h3>
    </div>
    <div v-show="currentUser.role.libelle === 'root'">
      <!-- subtitle for image app -->
      <div class="box_subtitle">
        <h4 class="stl-m" :class="currentUser.themeColor.colorTextTab">Images</h4>
      </div>
      <!-- form change logo numerica access for role 'root'-->
      <div class="box_global_input_file">
        <!-- logo numerica -->
        <div class="box box_input_file">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoNumerica'"
            :commandeDispatch="'ParamApp/changeLogoNumerica'"
            :text="'Upload'"
            :title="'Modifier le logo Numerica'"
          ></setting-img>
        </div>
        <!-- logo personne -->
        <div class="box box_input_file">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoIdentifiant'"
            :commandeDispatch="'ParamApp/changeLogoIdentifiant'"
            :text="'Upload'"
            :title="'Modifier icon personnes, salariés, etc...'"
          ></setting-img>
        </div>
        <!-- logo menu -->
        <div class="box box_input_file">
          <setting-img
            :bg="true"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoMenu'"
            :commandeDispatch="'ParamApp/changeLogoMenu'"
            :text="'Upload'"
            :title="'Modifier logo Numerica menu'"
          ></setting-img>
        </div>
      </div>
    </div>
    <!-- content theme colors -->
    <div>
      <!-- subtitle for theme colors -->
      <div class="box_subtitle">
        <h4 class="stl-m" :class="currentUser.themeColor.colorTextTab">Couleurs</h4>
      </div>
      <div class="box dark_mode">
        <setting-theme-color></setting-theme-color>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SettingImg from "./SettingImg.vue";
import SettingThemeColor from "./SettingThemeColor.vue";

export default {
  components: { SettingImg, SettingThemeColor },
  name: "Setting",
  data() {
    return {};
  },
  computed: {
    //get info user connected
    ...mapGetters("UserConnect", ["currentUser"]),
  },
  created() {
    //call api for get all files image
    this.$store.dispatch("ParamApp/getFilesImg");
  },
};
</script>

<style lang="scss" scoped>
.box_global_input_file {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.box_title {
  display: flex;
  justify-content: center;
}
.box_subtitle {
  padding: 50px 0 30px 0;
}
.box_input_file {
  margin: 20px;
  width: 300px;
}
.dark_mode {
  margin: 20px 0 0 20px;
}
</style>
