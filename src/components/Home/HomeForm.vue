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
        <error-content class="error_box" :error="errors"></error-content>

        <!-- btn connexion -->
        <button-app class="btn_connexion" :textBtn="'Connexion'"></button-app>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../Elements/Buttons/ButtonApp.vue";
import ErrorContent from "../Elements/ErrorContent.vue";
import InputSampleImg from "../Elements/InputSampleImg.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomeForm",
  components: { InputSampleImg, ErrorContent, ButtonApp },
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
.box_form {
  max-width: 300px;
  margin: auto;
  background-color: #ffffff;
  padding: 30px 30px 30px 30px;
  border-radius: 10px;
}

.box_img {
  text-align: center;
  margin-bottom: 40px;
}

img {
  width: 70px;
  height: 70px;
}

.box_input {
  text-align: center;
}

.box_input :nth-child(1) {
  width: 100%;
}

.box_input :nth-child(2) {
  width: 100%;
  margin-top: 20px;
}

.password_forget {
  text-align: right;
  padding: 10px 0;
}

.ctblue:hover {
  cursor: pointer;
  text-decoration: underline;
}

.error_box {
  text-align: center;
  margin: 5px 0 20px 0;
}

.btn_connexion {
  display: flex;
  justify-content: center;
}

/** mobile */
@media screen and (max-width: 700px) {
  .box_form {
    max-width: 280px;
    padding: 20px 30px 30px 30px;
  }
}
</style>
