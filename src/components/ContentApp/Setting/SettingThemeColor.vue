<template>
  <div class="box">
    <form>
      <!-- text is switch compare of value -->
      <p v-if="valueTheme" class="stxm-m" :class="currentUser.themeColor.colorTextTab">Désactiver le mode sombre</p>
      <p v-else class="stxm-m" :class="currentUser.themeColor.colorTextTab">Activer le mode sombre</p>

      <!-- input switch -->
      <button-switch-theme-color
        v-on:switch="modeDark"
        v-model="valueTheme"
        :valueTheme="valueTheme"
      ></button-switch-theme-color>
    </form>
  </div>
</template>

<script>
import ButtonSwitchThemeColor from "../../Elements/Buttons/ButtonSwitchThemeColor.vue";

export default {
  components: { ButtonSwitchThemeColor },
  name: "SettingThemeColor",
  props: {
    currentUser: Object,
  },
  data() {
    return {
      //data for api for update theme color
      data: {
        name: String,
      },
      valueTheme: this.currentUser.themeColor.darkMode,
    };
  },
  methods: {
    //switch mode dark or not
    //call api for save setting
    async modeDark() {
      try {
        //depending on the value we change the name of the color theme in the user database
        this.valueTheme ? (this.data.name = "dark") : (this.data.name = "normal");
        await this.$store.dispatch("CurrentUser/modeDark", this.data);

        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Le theme des couleurs à bien été modifié",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (e) {
        this.$store.commit("Error/addError");

        //if error pop up for see error
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["Error/errors"][0],
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          this.$store.commit("Error/resetError");
        }, 1000);
      }
    },
  },
  computed: {},
};
</script>

<style></style>
