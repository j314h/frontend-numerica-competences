<template>
  <div>
    <div class="box_form">
      <!-- form -->
      <form @submit.prevent="connexionUser">
        <!-- img form -->
        <div class="box_img">
          <img :src="`${urlApiImg}${logoNumerica}`" />
        </div>

        <!-- input -->
        <div class="box_input">
          <!-- input mail -->
          <input-sample-img
            v-model="data.email"
            :email="true"
            :place="'E-mail'"
            :typeInput="'email'"
          ></input-sample-img>

          <!-- input password -->
          <input-sample-img
            v-model="data.password"
            :password="true"
            :place="'Mot de passe'"
            :typeInput="'password'"
          ></input-sample-img>
        </div>

        <!-- text password forget -->
        <p class="t-extrasmall password_forget">
          <a href="#" class="ctblue stxs-r">Mot de passe oublé</a>
        </p>

        <!-- error message -->
        <error-basic class="error_box" :error="errors"></error-basic>

        <!-- btn connexion -->
        <button-app class="btn_connexion" :textBtn="'Connexion'"></button-app>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../Elements/Buttons/ButtonApp.vue";
import ErrorBasic from "../Elements/ErrorBasic.vue";
import InputSampleImg from "../Elements/Inputs/InputSampleImg.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeForm",
  components: { InputSampleImg, ErrorBasic, ButtonApp },
  props: {
    //for img logo numerica
    urlApiImg: String,
    logoNumerica: String,
  },
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
  },
  methods: {
    //connexion user
    connexionUser() {
      this.$store.dispatch("CurrentUser/signIn", this.data);
      this.data.email = "";
      this.data.password = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/app-components/home/homeForm.scss";
</style>
