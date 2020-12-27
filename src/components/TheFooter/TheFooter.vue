<template>
  <div class="box_footer">
    <!-- footer -->
    <footer class="footer">
      <!-- up footer -->
      <div class="box_footer_up">
        <!-- left -->
        <div class="content_footer_left">
          <div v-for="(img, i) in imgNumerica" :key="i">
            <img v-if="img.name === 'logoMenu'" :src="`${urlApiImg}${img.fieldName}`" />
          </div>
          <div>
            <p>
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
        <p>Copyright © 2020 Numerica. Tous droits réservés.</p>
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
  data() {
    return {
      imgNumerica: null,
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
    };
  },
  created() {
    this.imgNumerica = this.$store.getters["ParamApp/imgs"];
  },
};
</script>

<style lang="scss" scoped>
/** global */
.box_footer {
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #1b2032;
  line-height: 1.5;
}

p {
  width: 400px;
  color: #ffffff;
  font-size: 1.4rem;
}

.footer {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 35px 65px 10px 65px;
}

/** left */
.box_footer_up {
  display: flex;
  justify-content: space-between;
  flex: 3;
}

.content_footer_left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content_footer_left div {
  width: 100%;
  padding-top: 17px;
  flex: 3;
}

.content_footer_left div p {
  max-width: 400px;
}

.content_footer_left img {
  flex: 1;
}

/** down */
.box_footer_down {
  display: flex;
  align-items: center;
  border-top: 1px solid #2d3551;
  flex: 1;
}

/** mobile */
@media screen and (max-width: 800px) {
  .box_footer_up {
    flex-direction: column;
    justify-content: center;
  }

  .content_footer_left div p {
    width: 100%;
  }

  .footer {
    padding: 35px 30px 10px 30px;
  }

  .box_footer_down {
    padding: 10px 0;
  }
}
</style>
