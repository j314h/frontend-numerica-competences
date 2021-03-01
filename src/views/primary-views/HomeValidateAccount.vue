<template>
  <div class="globals_verification stxm-r">
    <!-- title -->
    <h3 class="ctwhite stxl-r">Bienvenue sur Numerica Compétence</h3>
    <p class="ctwhite stxm-r text_info">Dernière étape pour valider votre compte</p>
    <div>
      <!-- form -->
      <form @submit.prevent="finishCreateUser">
        <label>
          Configurer votre mot de passe
        </label>

        <!-- input password -->
        <div class="box_input">
          <input
            v-model="data.password"
            class="input"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>

        <!-- input confirmation password -->
        <div class="box_input">
          <input
            v-model="confirmePassword"
            class="input"
            type="password"
            placeholder="Confirmation du mot de passe"
            required
          />
        </div>

        <!-- error -->
        <error-basic :error="errors"></error-basic>

        <!-- button submit -->
        <button class="btn-orange">Enregistrer</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import ErrorBasic from "../../components/Elements/ErrorBasic.vue";

export default {
  components: { ErrorBasic },
  name: "HomeValidateAccount",
  data() {
    return {
      //for api
      data: {
        password: "",
        dataCryptedFormatUrl: this.$route.query.data,
      },
      confirmePassword: "",
    };
  },
  methods: {
    //finish create account
    finishCreateUser() {
      //if confimed password call api or not confirmed get error
      this.data.password !== this.confirmePassword
        ? this.store.commit("Error/addError", "Confirmation du mot de passe incorrecte !")
        : this.$store.dispatch("ValidateAccount/verificationCreateNewUser", this.data);
    },
  },
  computed: {
    //get error
    ...mapGetters("Error", ["errors"]),
  },
};
</script>

<style lang="scss" scoped>
.text_info {
  margin-top: 30px;
  margin-bottom: 70px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  padding: 20px;
}
label {
  margin-bottom: 20px;
}
.globals_verification {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #310072;
}
.box_input {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
}
button {
  margin-top: 30px;
}
</style>
