<template>
  <div>
    <form>
      <!-- text is switch compare of value -->
      <p v-if="value" class="stxm-m" :class="currentUser.themeColor.colorTextTab">Désactiver le mode sombre</p>
      <p v-else class="stxm-m" :class="currentUser.themeColor.colorTextTab">Activer le mode sombre</p>
      <!-- input design with label in css -->
      <input @change="modeDark" class="switch" type="checkbox" id="switch" v-model="value" />
      <label class="switchlabel" for="switch"></label>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  components: {},
  name: "SettingThemeColor",
  data() {
    return {
      //data for api for update theme color
      data: {
        name: String,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      value: null,
    };
  },
  created() {
    this.value = this.$store.getters["UserConnect/currentUser"].themeColor.darkMode;
  },
  methods: {
    //switch mode dark or not
    //call api for save setting
    async modeDark() {
      try {
        this.value ? (this.data.name = "dark") : (this.data.name = "normal");
        await this.$store.dispatch("UserConnect/modeDark", this.data);
        //if success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Le theme des couleurs à bien été modifié",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (e) {
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["UserConnect/errors"][0],
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          this.$store.commit("UserConnect/resetErrors");
        }, 1000);
      }
    },
  },
  computed: {
    ...mapGetters("UserConnect", ["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
form {
  height: 100%;
  display: flex;
  align-items: center;
}
p {
  margin-right: 40px;
}
</style>
