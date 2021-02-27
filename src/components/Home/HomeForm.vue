<template>
  <div class="home_form">
    <form class="home_form_box" @submit.prevent="connexionUser">
      <!-- img form -->
      <div class="home_form_img">
        <ImgSample :src="logoNumerica" />
      </div>

      <!-- input -->
      <div class="home_form_box_input">
        <!-- input mail -->
        <InputSampleImg v-model="data.email" :email="true" :place="'E-mail'" :typeInput="'email'" />

        <!-- input password -->
        <InputSampleImg v-model="data.password" :password="true" :place="'Mot de passe'" :typeInput="'password'" />
      </div>

      <!-- text password forget -->
      <p class="home_form_box_password_forget">
        <a href="#" class="home_form_link_password_forget">Mot de passe oublé</a>
      </p>

      <!-- error message -->
      <div class="home_form_box_error">
        <ErrorBasic :error="errors" />
      </div>

      <!-- btn connexion -->
      <div class="hom_form_btn_connexion">
        <ButtonApp :textBtn="'Connexion'" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import ButtonApp from "../Elements/Buttons/ButtonApp.vue";
import ErrorBasic from "../Elements/ErrorBasic.vue";
import InputSampleImg from "../Elements/Inputs/InputSampleImg.vue";
import ImgSample from "../../components-globals/Imgs/ImgSample.vue";

export default {
  name: "HomeForm",
  components: { InputSampleImg, ErrorBasic, ButtonApp, ImgSample },
  data() {
    return {
      //for call api
      data: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    //get errors
    ...mapGetters("Error", ["errors"]),

    //return file fieldName image logo numerica
    logoNumerica() {
      const img = this.$store.getters["Files/imgs"].find((el) => el.name === "logoNumerica");
      return img.fieldName;
    },
  },
  methods: {
    //connexion user
    connexionUser() {
      this.$store.dispatch("CurrentUser/signIn", this.data);
      resetInput();
    },

    //reset input
    resetInput() {
      this.data.email = "";
      this.data.password = "";
    },
  },
};
</script>
