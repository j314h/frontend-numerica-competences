<template>
  <div class="box_footer">
    <!-- footer -->
    <footer class="footer">
      <!-- up footer -->
      <div class="box_footer_up">
        <!-- left -->
        <div class="content_footer_left">
          <div>
            <img :src="`${urlApiImg}${logoNumericaFooter}`" class="img_footer" />
          </div>
          <div>
            <p class="text_footer">
              NUMERICA est le pôle technologique régional dédié au développement des Technologies de l'Information et de
              la Communication (TIC) en Franche-Comté.
            </p>
          </div>
        </div>

        <!-- rigth -->
        <div>
          <the-footer-menu></the-footer-menu>
        </div>
      </div>

      <!-- down footer -->
      <div class="box_footer_down">
        <p class="text_footer">Copyright © 2020 Numerica. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import TheFooterMenu from "./TheFooterMenu";

export default {
  name: "TheFooter",
  components: {
    TheFooterMenu,
  },
  props: {
    //for image logo numerica footer
    urlApiImg: String,
    logoNumericaFooter: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/app-components/footer/footer.scss";
</style>
