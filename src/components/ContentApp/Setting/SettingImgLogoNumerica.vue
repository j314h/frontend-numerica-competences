<template>
  <div>
    <form @submit.prevent="changeLogoNumerica">
      <div>
        <div>
          <label>Logo Numérica, vous pouvez telecharger une nouvelle image</label>
          <div>
            <input type="file" ref="file" @change="submitImage" enctype="multipart/form-data" required />
          </div>
        </div>
        <div>
          <img src="sss" />
        </div>
        <error-content class="error_logo_numerica" :error="errors[0]"></error-content>
        <div>
          <button-app :miniorange="true" :textBtn="'Envoyer'"></button-app>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../../Elements/ButtonApp.vue";
import ErrorContent from "../../Elements/ErrorContent.vue";
import { mapGetters } from "vuex";

export default {
  name: "SettingImgLogoNumeica",
  components: {
    ButtonApp,
    ErrorContent,
  },
  computed: {
    //recover error relation with ParamApp
    ...mapGetters("ParamApp", ["errors"]),
  },
  methods: {
    //recover img load for user click in input
    submitImage(e) {
      this.file = e.target.files[0];
    },
    //request api for load img user save
    changeLogoNumerica() {
      const data = new FormData();
      data.append("logoNumerica", this.file);
      this.$store.dispatch("ParamApp/changeLogoNumerica", data);
      this.file = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.error_logo_numerica {
  padding: 20px;
}
</style>
