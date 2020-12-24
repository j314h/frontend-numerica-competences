<template>
  <div>
    <form @submit.prevent="changeLogoNumerica">
      <div class="content_form">
        <!-- content form -->
        <div class="box_input">
          <label>{{ text }}</label>
          <!-- input load file -->
          <div class="input_file">
            <input type="file" ref="file" @change="submitImage" enctype="multipart/form-data" required />
          </div>
        </div>
        <!-- img an relation with label -->
        <div class="box_img">
          <div v-for="(img, i) in imgs" :key="i">
            <img
              :class="{ input_file_background: bg }"
              :width="tailleW"
              :height="tailleH"
              v-if="img.name === nameImgTarget"
              :src="`${urlApiImg}${img.fieldName}`"
            />
          </div>
        </div>
        <!-- error content -->
      </div>
      <error-content class="error_logo_numerica" :error="errors[0]"></error-content>
      <!-- submit -->
      <div>
        <button-app :miniorange="true" :textBtn="'Envoyer'"></button-app>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonApp from "../../Elements/ButtonApp.vue";
import ErrorContent from "../../Elements/ErrorContent.vue";
import { mapGetters } from "vuex";

export default {
  name: "SettingImg",
  components: {
    ButtonApp,
    ErrorContent,
  },
  props: {
    //custome box add or change image
    tailleW: String,
    tailleH: String,
    nameImgTarget: String,
    commandeDispatch: String,
    text: String,
    bg: Boolean,
  },
  data() {
    return {
      //url for api, for recover image
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
    };
  },
  computed: {
    //recover error relation with ParamApp
    ...mapGetters("ParamApp", ["errors", "imgs"]),
  },
  methods: {
    //recover img load for user click in input
    submitImage(e) {
      this.file = e.target.files[0];
    },
    //request api for load img user save
    changeLogoNumerica() {
      const data = new FormData();
      data.append(this.nameImgTarget, this.file);
      this.$store.dispatch(this.commandeDispatch, data);
      this.file = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 0 0 20px 0;
  border-bottom: 1px solid #b1b3b7;
}
.input_file {
  margin: 10px 0 0 0;
  padding: 10px 20px;
  border: 1px solid #b1b3b7;
  border-radius: 4px;
}
.input_file_background {
  background-color: #7e818b;
}

.box_input {
  flex: 1;
}
.box_img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_form {
  display: flex;
}
</style>
