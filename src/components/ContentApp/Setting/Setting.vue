<template>
  <div class="t-body">
    <!-- title of page -->
    <div class="box_title">
      <h3 class="ti-3">Paramètres de l'application</h3>
    </div>
    <div v-show="currentUser.role.libelle === 'root'">
      <!-- subtitle for image app -->
      <div class="box_subtitle">
        <h4 class="ti-4">Modifier les images de l'application</h4>
      </div>
      <!-- form change logo numerica access for role 'root'-->
      <div>
        <!-- logo numerica -->
        <div class="box">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoNumerica'"
            :commandeDispatch="'ParamApp/changeLogoNumerica'"
            :text="'Changer le logo Numerica, Taille: 70x70, localisation: Accueil-Connection'"
          ></setting-img>
        </div>
        <!-- logo personne -->
        <div class="box">
          <setting-img
            :bg="false"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoIdentifiant'"
            :commandeDispatch="'ParamApp/changeLogoIdentifiant'"
            :text="
              'Changer le logo identifiant (personne), Taille: plusieurs tailles, localisation: informations utilisateurs, tableaux salariés '
            "
          ></setting-img>
        </div>
        <!-- logo menu -->
        <div class="box">
          <setting-img
            :bg="true"
            :tailleW="'70px'"
            :tailleH="'70px'"
            :nameImgTarget="'logoMenu'"
            :commandeDispatch="'ParamApp/changeLogoMenu'"
            :text="'Changer le logo du menu principal, Taille: 30x30, localisation: Menu'"
          ></setting-img>
        </div>
      </div>
    </div>
    <!-- content theme colors -->
    <div>
      <!-- subtitle for theme colors -->
      <div class="box_subtitle">
        <h4 class="ti-4">Modifier les couleurs de l'application</h4>
      </div>
      <div class="box">
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
.box_title {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}
.box_subtitle {
  padding: 50px 0 30px 20px;
}
</style>
