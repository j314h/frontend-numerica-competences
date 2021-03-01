<template>
  <div class="footer_box">
    <!-- footer -->
    <footer class="footer">
      <!-- up footer -->
      <div>
        <!-- left -->
        <div class="footer_box_content_left">
          <ImgSample :src="logoNumericaFooter" />

          <p class="footer_text">
            NUMERICA est le pôle technologique régional dédié au développement des Technologies de l'Information et de
            la Communication (TIC) en Franche-Comté.
          </p>
        </div>

        <!-- rigth -->
        <TheFooterMenu />
      </div>

      <!-- down footer -->
      <div>
        <p class="footer_text">Copyright © 2020 Numerica. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
//components
import TheFooterMenu from "./TheFooterMenu";
import ImgSample from "../../components-globals/Imgs/ImgSample.vue";

export default {
  name: "TheFooter",
  components: {
    TheFooterMenu,
    ImgSample,
  },
  computed: {
    //return file fieldName image logo numerica in footer
    logoNumericaFooter() {
      const img = this.$store.getters["Files/imgs"].find((el) => el.name === "logoFooterNumerica");
      return img.fieldName;
    },
  },
};
</script>
