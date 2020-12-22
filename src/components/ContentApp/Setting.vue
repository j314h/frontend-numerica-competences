<template>
  <div class="t-body">
    <!-- form change logo numerica -->
    <form @submit.prevent="changeLogoNumerica">
      <div>
        <label>Logo Numérica, vous pouvez telecharger une nouvelle image</label>
        <div>
          <input type="file" ref="file" @change="submitImage" enctype="multipart/form-data" required />
        </div>
        <error-content :error="errors[0]"></error-content>
        <div>
          <button-app class="btn_connexion" :blue="true" :textBtn="'Envoyer'"></button-app>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../Elements/ButtonApp.vue";
import ErrorContent from "../Elements/ErrorContent.vue";
import { mapGetters } from "vuex";

export default {
  components: { ButtonApp, ErrorContent },
  name: "Setting",
  data() {
    return {
      file: "",
    };
  },
  computed: {
    ...mapGetters("ParamApp", ["errors"]),
  },
  methods: {
    submitImage(e) {
      this.file = e.target.files[0];
    },

    changeLogoNumerica() {
      const data = new FormData();
      data.append("logoNumerica", this.file);
      this.$store.dispatch("ParamApp/changeLogoNumerica", data);
      this.file = "";
    },
  },
};
</script>

<style></style>
