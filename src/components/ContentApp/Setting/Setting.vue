<template>
  <div class="t-body">
    <!-- form change logo numerica access for role 'root'-->
    <div v-show="currentUser.role.libelle === 'root'">
      <!-- logo numerica -->
      <setting-img
        class="box_input_img"
        :bg="false"
        :tailleW="'70px'"
        :tailleH="'70px'"
        :nameImgTarget="'logoNumerica'"
        :commandeDispatch="'ParamApp/changeLogoNumerica'"
        :text="'Changer le logo Numerica, Taille: 70x70, localisation: Accueil-Connection'"
      ></setting-img>
      <!-- logo personne -->
      <setting-img
        class="box_input_img"
        :bg="false"
        :tailleW="'70px'"
        :tailleH="'70px'"
        :nameImgTarget="'logoIdentifiant'"
        :commandeDispatch="'ParamApp/changeLogoIdentifiant'"
        :text="
          'Changer le logo identifiant (personne), Taille: plusieurs tailles, localisation: informations utilisateurs, tableaux salariés '
        "
      ></setting-img>
      <!-- logo menu -->
      <setting-img
        class="box_input_img"
        :bg="true"
        :tailleW="'70px'"
        :tailleH="'70px'"
        :nameImgTarget="'logoMenu'"
        :commandeDispatch="'ParamApp/changeLogoMenu'"
        :text="'Changer le logo du menu principal, Taille: 30x30, localisation: Menu'"
      ></setting-img>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SettingImg from "./SettingImg.vue";

export default {
  components: { SettingImg },
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
.box_input_img {
  margin-bottom: 20px;
}
</style>
