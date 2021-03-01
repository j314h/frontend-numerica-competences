<template>
  <div class="the_menu_head_box">
    <div class="the_menu_head_name_user">{{ nameUser }}</div>
    <div class="the_menu_head_img_setting">
      <!-- setting -->
      <router-link active-class="the_menu_router_active" :to="{ name: 'Setting' }" tag="button">
        <ImgSetting />
      </router-link>

      <!-- disconnect -->
      <div @click="logOut">
        <ImgDisconnect />
      </div>
    </div>
  </div>
</template>

<script>
//components
import ImgSetting from "../../components-globals/Imgs/ImgSetting";
import ImgDisconnect from "../../components-globals/Imgs/ImgDisconnect";

export default {
  name: "TheMenuHead",
  components: {
    ImgSetting,
    ImgDisconnect,
  },
  computed: {
    //name user format
    nameUser() {
      return `
      ${this.upperFirstLetter(this.$store.getters["CurrentUser/currentUser"].name.firstName)}
      ${this.upperFirstLetter(this.$store.getters["CurrentUser/currentUser"].name.lastName)}
      `;
    },
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //disconnect user connected
    logOut() {
      this.$store.dispatch("CurrentUser/logOut");
      this.$store.commit("Companies/deleteCompaniesSelected");
    },
  },
};
</script>

<style></style>
