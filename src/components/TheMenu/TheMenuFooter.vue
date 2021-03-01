<template>
  <div class="the_menu_footer">
    <ImgSample :src="logoNumericaFooter" />
    <span>© {{ new Date().getFullYear() }} Numerica-compétences</span>
  </div>
</template>

<script>
//components
import ImgSample from "../../components-globals/Imgs/ImgSample";

export default {
  name: "TheMenuFooter",
  components: {
    ImgSample,
  },
  computed: {
    //recover logo in menu
    logoNumericaFooter() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === "logoMenu");
        return `${fieldName}`;
      }
    },
  },
};
</script>
