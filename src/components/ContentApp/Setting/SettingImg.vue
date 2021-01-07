<template>
  <div>
    <form @submit.prevent="changeLogoNumerica">
      <h3 class="title_box stxm-m" :class="currentUser.themeColor.colorTextTab">{{ title }}</h3>
      <div class="content_form">
        <!-- content form -->
        <div class="box_input">
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
        <button-app v-show="fileLoad" :mini="true" :textBtn="'Envoyer'"></button-app>
      </div>
    </form>
  </div>
</template>

<script>
import ErrorContent from "../../Elements/ErrorContent.vue";
import { mapGetters } from "vuex";
import ButtonApp from "../../Elements/ButtonApp.vue";

export default {
  name: "SettingImg",
  components: {
    ErrorContent,
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
  computed: {
    //recover info current user
    ...mapGetters("UserConnect", ["currentUser"]),
    //recover image app
    ...mapGetters("ParamApp", ["imgs"]),
  },
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
      //send file
      await this.$store.dispatch(this.commandeDispatch, data);
      this.text = "Modifier";
      this.fileIsLoad = "";
      this.fileLoad = false;
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

<style lang="scss" scoped>
form {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.title_box {
  flex: 1;
}
.box_input {
  display: flex;
  justify-content: center;
  width: 100%;
}
/* content */
input[type="file"] {
  display: none;
}
.input_file {
  display: block;
  overflow: hidden;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.5s;
}
.input_file:hover {
  cursor: pointer;
  background-color: #f84210;
  color: #ffffff;
}

/**class for input add new file load this add in DOM with binding */
.is_load {
  background-color: #61ff84;
  border: transparent;
  color: #000;
}

.input_file_background {
  background-color: #7e818b;
}

.box_img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.content_form {
  margin: 10px 0;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
/******** */
.box_btn {
  display: flex;
  align-items: flex-end;
  flex: 1;
}

@media screen and (max-width: 800px) {
  .content_form {
    flex-direction: column;
  }
  .box_img {
    margin-top: 20px;
  }
}
</style>
