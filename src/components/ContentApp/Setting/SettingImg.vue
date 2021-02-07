<template>
  <div class="box">
    <form class="setting_img_form" @submit.prevent="changeLogoNumerica">
      <h3 class="setting_title_box stxm-m" :class="currentUser.themeColor.colorTextTab">{{ title }}</h3>
      <div class="setting_content_form">
        <!-- content form -->
        <div class="setting_box_input">
          <label :for="nameImgTarget" class="input_file stxm-m ctorange cbrorange" :class="fileIsLoad">
            {{ text }}
          </label>
          <span @click="deleteLoad" v-show="fileLoad" class="close"></span>
          <!-- input load file -->
          <div>
            <input
              :id="nameImgTarget"
              @change="loadPending"
              type="file"
              ref="file"
              enctype="multipart/form-data"
              required
            />
          </div>
        </div>
        <!-- img an relation with label -->
        <div class="setting_box_img">
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
      <div class="setting_box_btn">
        <button-app v-show="fileLoad" :mini="true" :textBtn="'Envoyer'"></button-app>
      </div>
    </form>
  </div>
</template>

<script>
import ErrorBasic from "../../Elements/ErrorBasic.vue";
import ButtonApp from "../../Elements/Buttons/ButtonApp.vue";

export default {
  name: "SettingImg",
  components: {
    ErrorBasic,
    ButtonApp,
  },
  props: {
    //custome box add or change image
    tailleW: String,
    tailleH: String,
    nameImgTarget: String,
    commandeDispatch: String,
    bg: Boolean,
    title: String,
    currentUser: Object,
    imgs: Array,
    targetUrl: String,
  },
  data() {
    return {
      //url for api, for recover image
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      fileIsLoad: "", // for add class binding
      fileLoad: false, // for see btn close in input (v-show)
      text: "Modifier", // text of btn input file
    };
  },
  computed: {},
  methods: {
    //change design if user delete file in input load file
    deleteLoad() {
      this.text = "Modifier";
      this.fileIsLoad = "";
      this.fileLoad = false;
    },
    //change class and value text of input load file
    //for change design if user load file
    loadPending(e) {
      if (e) {
        this.fileIsLoad = "is_load";
        this.fileLoad = true;
        return (this.text = e.target.value);
      }
    },
    //recover img load for user click in input
    //request api for load img user save
    async changeLogoNumerica() {
      //build formData for send api
      const data = new FormData();
      data.append(this.nameImgTarget, this.$refs.file.files[0]);
      const datas = {
        data,
        targetUrl: this.targetUrl,
      };

      //send file
      await this.$store.dispatch(this.commandeDispatch, datas);
      this.text = "Modifier";
      this.fileIsLoad = "";
      this.fileLoad = false;

      //if errors show alert custom
      if (this.$store.getters["Error/errors"][0]) {
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["Error/errors"][0],
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this.$store.commit("Error/resetError");
        }, 2000);
      } else {
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Enregistrement réussis",
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

<style lang="scss" scoped></style>
