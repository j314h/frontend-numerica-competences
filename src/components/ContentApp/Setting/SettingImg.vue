<template>
  <div>
    <form @submit.prevent="changeLogoNumerica">
      <div class="content_form">
        <!-- content form -->
        <div class="box_input">
          <label>{{ text }}</label>
          <!-- input load file -->
          <div class="input_file">
            <input type="file" ref="file" enctype="multipart/form-data" required />
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
      </div>
      <!-- submit -->
      <div class="box_btn">
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
    //get image are stocked in store ParamApp
    imgs() {
      return this.$store.getters["ParamApp/imgs"];
    },
  },
  updated() {},
  methods: {
    //recover img load for user click in input
    //request api for load img user save
    async changeLogoNumerica() {
      //build formData for send api
      const data = new FormData();
      data.append(this.nameImgTarget, this.$refs.file.files[0]);
      //send file
      await this.$store.dispatch(this.commandeDispatch, data);
      //if errors show alert custom
      if (this.$store.getters["ParamApp/errors"][0]) {
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["ParamApp/errors"][0],
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this.$store.commit("ParamApp/resetErrors");
        }, 2000);
      } else {
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updating your successful image",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      //reset input file
      this.$refs.file.value = "";
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
.box_btn {
  margin-top: 20px;
}
</style>
