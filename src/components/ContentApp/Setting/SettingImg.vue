<template>
  <div>
    <form @submit.prevent="changeLogoNumerica">
      <div class="title_box stxm-r">{{ title }}</div>
      <div class="content_form">
        <!-- content form -->
        <div class="box_input">
          <label for="fileImg" class="input_file stxm-m cbginput ctblack">{{ text }}</label>
          <!-- input load file -->
          <div>
            <input id="fileImg" type="file" ref="file" enctype="multipart/form-data" required />
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
        <button-app :mini="true" :textBtn="'Envoyer'"></button-app>
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
    text: String,
    bg: Boolean,
    title: String,
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
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.title_box {
  flex: 1;
}
/* content */
input[type="file"] {
  display: none;
}
.input_file {
  display: block;
  padding: 10px 20px;
  border-radius: 4px;
}
.input_file:hover {
  cursor: pointer;
  background-color: #707070;
  color: #ffffff;
}

.input_file_background {
  background-color: #7e818b;
}

.box_img {
  display: flex;
  justify-content: center;
  align-items: center;
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
