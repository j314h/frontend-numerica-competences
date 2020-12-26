<template>
  <div>
    <form @submit.prevent="updateThemeColor">
      <!-- color of background this Menu -->
      <div class="box_global_input">
        <p>Choisissez la couleur de fond du menu</p>
        <div class="box_global">
          <div class="box_input">
            <input id="bgMenuBlue" type="radio" v-model="data.bgMenuHeadband" value="bgm-blue" />
            <label for="bgMenuBlue">
              <div class="bgm-blue box_color"></div>
            </label>
          </div>
          <div class="box_input">
            <input id="bgMenuGray" type="radio" v-model="data.bgMenuHeadband" value="bgm-gray" />
            <label for="bgMenuGray">
              <div class="bgm-gray box_color"></div>
            </label>
          </div>
        </div>
      </div>
      <!-- background color of head array -->
      <div class="box_global_input">
        <p>Choisissez la couleur de fond des en-tête de tableau</p>
        <div class="box_global">
          <div class="box_input">
            <input id="bgHeadArrayBlue" type="radio" v-model="data.bgHeadArray" value="bgharray-blue" />
            <label for="bgHeadArrayBlue">
              <div class="bgharray-blue box_color"></div>
            </label>
          </div>
          <div class="box_input">
            <input id="bgHeadArrayGray" type="radio" v-model="data.bgHeadArray" value="bgharray-gray" />
            <label for="bgHeadArrayGray">
              <div class="bgharray-gray box_color"></div>
            </label>
          </div>
          <div class="box_input">
            <input id="bgHeadArrayLightBlue" type="radio" v-model="data.bgHeadArray" value="bgharray-lightblue" />
            <label for="bgHeadArrayLightBlue">
              <div class="bgharray-lightblue box_color"></div>
            </label>
          </div>
          <div class="box_input">
            <input id="bgHeadArrayLightGray" type="radio" v-model="data.bgHeadArray" value="bgharray-lightgray" />
            <label for="bgHeadArrayLightGray">
              <div class="bgharray-lightgray box_color"></div>
            </label>
          </div>
        </div>
      </div>
      <!-- color text of header of array-->
      <div class="box_global_input">
        <p>Choisissez la couleur de texte des en-tête de tableau</p>
        <div class="box_global">
          <div class="box_input">
            <input id="tHeadArrayBlue" type="radio" v-model="data.colorTextHeadArray" value="ctextharray-blue" />
            <label class="box_text" for="tHeadArrayBlue">
              <div class="ctextharray-blue t-medium box_color box_text">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="tHeadArrayGray" type="radio" v-model="data.colorTextHeadArray" value="ctextharray-orange" />
            <label class="box_text" for="tHeadArrayGray">
              <div class="ctextharray-orange t-medium box_color box_text">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="tHeadArrayLightBlue" type="radio" v-model="data.colorTextHeadArray" value="ctextharray-white" />
            <label class="box_text" for="tHeadArrayLightBlue">
              <div class="ctextharray-white t-medium box_color bg_test box_text">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="tHeadArrayLightGray" type="radio" v-model="data.colorTextHeadArray" value="ctextharray-gray" />
            <label class="box_text" for="tHeadArrayLightGray">
              <div class="ctextharray-gray t-medium box_color box_text">text</div>
            </label>
          </div>
        </div>
      </div>
      <!-- color text inactive in menu -->
      <div class="box_global_input">
        <p>Choisissez la couleur de texte du menu</p>
        <div class="box_global">
          <div class="box_input">
            <input id="ctmBlue" type="radio" v-model="data.colorTextInactive" value="ctm-blue" />
            <label class="box_text" for="ctmBlue">
              <div class="ctm-blue t-medium box_color box_text bgm-gray">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmorange" type="radio" v-model="data.colorTextInactive" value="ctm-orange" />
            <label class="box_text" for="ctmorange">
              <div class="ctm-orange t-medium box_color box_text bgm-blue">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmwhite" type="radio" v-model="data.colorTextInactive" value="ctm-white" />
            <label class="box_text" for="ctmwhite">
              <div class="ctm-white t-medium box_color bg_test box_text">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmgray" type="radio" v-model="data.colorTextInactive" value="ctm-gray" />
            <label class="box_text" for="ctmgray">
              <div class="ctm-gray t-medium box_color box_text bgm-blue">text</div>
            </label>
          </div>
        </div>
      </div>
      <!-- color text active for tab in menu -->
      <div class="box_global_input">
        <p>Choisissez la couleur de texte de l'onglet ou menu actif</p>
        <div class="box_global">
          <div class="box_input">
            <input id="ctmablue" type="radio" v-model="data.colorTextActive" value="ctma-blue" />
            <label class="box_text" for="ctmablue">
              <div class="ctma-blue box_color box_text bgm-gray">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmaorange" type="radio" v-model="data.colorTextActive" value="ctma-orange" />
            <label class="box_text" for="ctmaorange">
              <div class="ctma-orange box_color box_text bgm-blue">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmawhite" type="radio" v-model="data.colorTextActive" value="ctma-white" />
            <label class="box_text" for="ctmawhite">
              <div class="ctma-white box_color bg_test box_text">text</div>
            </label>
          </div>
          <div class="box_input">
            <input id="ctmagray" type="radio" v-model="data.colorTextActive" value="ctma-gray" />
            <label class="box_text" for="ctmagray">
              <div class="ctma-gray box_color box_text bgm-blue">text</div>
            </label>
          </div>
        </div>
      </div>
      <!-- color btn primary -->
      <div class="box_global_input">
        <p>Choisissez la couleur des boutons primaire</p>
        <div class="box_global">
          <div class="box_input">
            <input id="cbtnblue" type="radio" v-model="data.colorBtnPrimary" value="cbtn-blue" />
            <label class="box_text" for="cbtnblue">
              <div class="cbtn-blue t-btn-primary">Boutton</div>
            </label>
          </div>
          <div class="box_input">
            <input id="cbtnorange" type="radio" v-model="data.colorBtnPrimary" value="cbtn-orange" />
            <label class="box_text" for="cbtnorange">
              <div class="cbtn-orange t-btn-primary">Boutton</div>
            </label>
          </div>
        </div>
      </div>
      <!-- color btn secondary -->
      <div class="box_global_input">
        <p>Choisissez la couleur des boutons secondaire</p>
        <div class="box_global">
          <div class="box_input">
            <input id="cbtnmblue" type="radio" v-model="data.colorBtnSecondary" value="cbtnm-blue" />
            <label class="box_text" for="cbtnmblue">
              <div class="cbtnm-blue t-btn-secondary">Boutton</div>
            </label>
          </div>
          <div class="box_input">
            <input id="cbtnmorange" type="radio" v-model="data.colorBtnSecondary" value="cbtnm-orange" />
            <label class="box_text" for="cbtnmorange">
              <div class="cbtnm-orange t-btn-secondary">Boutton</div>
            </label>
          </div>
        </div>
      </div>
      <!-- color of ligne on array -->
      <div class="box_global_input">
        <p>Choisissez la couleur des lignes des tableaux</p>
        <div class="box_global">
          <div class="box_input">
            <input id="lignearrayblue" type="radio" v-model="data.colorLignArray" value="clignearray-blue" />
            <label for="lignearrayblue">
              <div class="clignearray-blue box_color"></div>
            </label>
          </div>
          <div class="box_input">
            <input id="lignearrayorange" type="radio" v-model="data.colorLignArray" value="clignearray-orange" />
            <label for="lignearrayorange">
              <div class="clignearray-orange box_color"></div>
            </label>
          </div>
        </div>
      </div>
      <button-app-mini :textBtn="'Enregistrer'"></button-app-mini>
    </form>
  </div>
</template>

<script>
import ButtonAppMini from "../../Elements/ButtonAppMini.vue";
export default {
  components: { ButtonAppMini },
  name: "SettingThemeColor",
  data() {
    return {
      //url for api numerica
      urlApi: process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE,
      //data for api for update theme color
      data: {
        bgMenuHeadband: "bgm-blue",
        bgDarkContent: "bgdark-gray", //no change
        bgHeadArray: "bgharray-blue",
        colorTextPrimary: "primary", // no change
        colorTextHeadArray: "ctextharray-blue",
        colorTextInactive: "ctm-gray",
        colorTextActive: "ctma-white",
        colorBtnPrimary: "cbtn-orange",
        colorBtnSecondary: "cbtnm-orange",
        colorLignArray: "clignearray-blue",
      },
    };
  },
  methods: {
    //update color theme in database with api
    async updateThemeColor() {
      try {
        this.$store.commit("UserConnect/isloading");
        //send color  in api
        const themeColor = await this.$http.post(`${this.urlApi}cu-theme-color`, this.data);
        //update currentUser in store
        this.$store.dispatch("UserConnect/userConnectVerification");
        this.$store.commit("UserConnect/disableLoading");
        //success show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updating your successful colors",
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (e) {
        this.$store.commit("ParamApp/addErrors", e);
        //error show alert custom
        this.$swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$store.getters["ParamApp/errors"][0],
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          this.$store.commit("ParamApp/resetErrors");
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: block;
  flex: 1;
  text-align: center;
}
input {
  flex: 2;
}
.box_global_input {
}
.box_global {
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 40px;
  margin-top: 20px;
}
.box_input {
  display: flex;
  height: 50px;
  margin-right: 20px;
  align-items: center;
  width: 150px;
}
.box_color {
  height: 20px;
}
.bg_test {
  background-color: #333333;
}
.box_text {
  width: 100%;
}

@media screen and (max-width: 800px) {
  .box_global {
    flex-direction: column;
    align-items: start;
  }
  .box_input {
    margin: 10px 0;
  }
}
</style>
