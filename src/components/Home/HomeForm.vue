<template>
  <div>
    <div class="box_form">
      <!-- form -->
      <form @submit.prevent="connexionUser">
        <!-- img form -->
        <div class="box_img">
          <img src="../../assets/img/logo-numerica-petit.svg" />
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
          <a href="#" class="c-t-primary-app">Mot de passe oublé</a>
        </p>
        <!-- error message -->
        <error-content class="error_box" :error="errors[0]"></error-content>
        <!-- btn connexion -->
        <!-- <div style="font-size:2rem;">sign in : {{ isSignIn }}, jwt: {{ jwt }}</div> -->
        <button-app class="btn_connexion" :orange="true" :textBtn="'Connexion'"></button-app>
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
  },
  methods: {
    //
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
  padding: 30px 30px 50px 30px;
  border-radius: 20px;
}

.box_img {
  text-align: center;
  margin-bottom: 20px;
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

.c-t-primary-app:hover {
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
