<template>
  <div>
    <div class="box_form">
      <!-- form -->
      <form @submit.prevent="connexionUser">
        <!-- img form -->
        <div v-for="(img, i) in imgs" :key="i" class="box_img">
          <img v-if="img.name === 'logoNumerica'" :src="`${urlApiImg}${img.fieldName}`" />
        </div>
        <!-- input -->
        <div class="box_input">
          <!-- input mail -->
          <input-sample-img
            v-model="dataConnectUser.data.email"
            :email="true"
            :place="'E-mail'"
            :typeInput="'email'"
          ></input-sample-img>
          <!-- input password -->
          <input-sample-img
            v-model="dataConnectUser.data.password"
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
        <error-content class="error_box" :error="errors[0]"></error-content>
        <!-- btn connexion -->
        <!-- <div style="font-size:2rem;">sign in : {{ isSignIn }}, jwt: {{ jwt }}</div> -->
        <button-app class="btn_connexion" :textBtn="'Connexion'"></button-app>
      </form>
    </div>
  </div>
</template>

<script>
import ButtonApp from "../Elements/ButtonApp.vue";
import ErrorContent from "../Elements/ErrorContent.vue";
import InputSampleImg from "../Elements/InputSampleImg.vue";
import { mapGetters } from "vuex";

export default {
  components: { InputSampleImg, ErrorContent, ButtonApp },
  name: "HomeForm",
  data() {
    return {
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      dataConnectUser: {
        data: {
          email: "",
          password: "",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    };
  },
  computed: {
    ...mapGetters("UserConnect", ["errors"]),
    ...mapGetters("ParamApp", ["imgs"]),
  },
  methods: {
    //connexion user
    connexionUser() {
      this.$store.dispatch("UserConnect/signIn", this.dataConnectUser);
      this.dataConnectUser.data.email = "";
      this.dataConnectUser.data.password = "";
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
