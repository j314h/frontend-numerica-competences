<template>
  <div class="stxm-r ctwhite" :class="bgLayout + ' ' + openMenu">
    <!-- menu burger -->
    <div class="item_menu title_menu">
      <div @click="openCloseMenu" class="box_logo_menu">
        <div :class="stateMenu"></div>
        <div :class="stateMenu"></div>
        <div :class="stateMenu"></div>
      </div>
      <span class="stxxm-m upper">Menu</span>
    </div>

    <!-- content menu -->
    <div class="item_menu content_menu">
      <!-- setting and disconnect user -->
      <div class="user_menu">
        <div class="stxm-r">{{ nameUser }}</div>
        <div class="box_img_setting_disconnect">
          <!-- setting -->
          <router-link :to="{ name: 'Setting' }" tag="button" class="btn_img_menu box_svg">
            <svg
              class="icon_setting"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1401 12.9399C19.1801 12.6399 19.2001 12.3299 19.2001 11.9999C19.2001 11.6799 19.1801 11.3599 19.1301 11.0599L21.1601 9.4799C21.3401 9.3399 21.3901 9.0699 21.2801 8.8699L19.3601 5.5499C19.2401 5.3299 18.9901 5.2599 18.7701 5.3299L16.3801 6.2899C15.8801 5.9099 15.3501 5.5899 14.7601 5.3499L14.4001 2.8099C14.3601 2.5699 14.1601 2.3999 13.9201 2.3999H10.0801C9.84011 2.3999 9.65011 2.5699 9.61011 2.8099L9.25011 5.3499C8.66011 5.5899 8.12011 5.9199 7.63011 6.2899L5.24011 5.3299C5.02011 5.2499 4.77011 5.3299 4.65011 5.5499L2.74011 8.8699C2.62011 9.0799 2.66011 9.3399 2.86011 9.4799L4.89011 11.0599C4.84011 11.3599 4.80011 11.6899 4.80011 11.9999C4.80011 12.3099 4.82011 12.6399 4.87011 12.9399L2.84011 14.5199C2.66011 14.6599 2.61011 14.9299 2.72011 15.1299L4.64011 18.4499C4.76011 18.6699 5.01011 18.7399 5.23011 18.6699L7.62011 17.7099C8.12011 18.0899 8.65011 18.4099 9.24011 18.6499L9.60011 21.1899C9.65011 21.4299 9.84011 21.5999 10.0801 21.5999H13.9201C14.1601 21.5999 14.3601 21.4299 14.3901 21.1899L14.7501 18.6499C15.3401 18.4099 15.8801 18.0899 16.3701 17.7099L18.7601 18.6699C18.9801 18.7499 19.2301 18.6699 19.3501 18.4499L21.2701 15.1299C21.3901 14.9099 21.3401 14.6599 21.1501 14.5199L19.1401 12.9399ZM12.0001 15.5999C10.0201 15.5999 8.40011 13.9799 8.40011 11.9999C8.40011 10.0199 10.0201 8.3999 12.0001 8.3999C13.9801 8.3999 15.6001 10.0199 15.6001 11.9999C15.6001 13.9799 13.9801 15.5999 12.0001 15.5999Z"
                fill="#fff"
              />
            </svg>

            <!-- disconnect -->
          </router-link>
          <div class="box_svg" @click="logOut">
            <svg
              class="icon_disconnect"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 3H11V13H13V3ZM17.83 5.17L16.41 6.59C17.99 7.86 19 9.81 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 9.81 6.01 7.86 7.58 6.58L6.17 5.17C4.23 6.82 3 9.26 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 9.26 19.77 6.82 17.83 5.17Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- item dashbord -->
      <div>
        <div>
          <!-- dashbord -->
          <router-link class="link_menu stxm-r" :class="colorMenuActive" :to="{ name: 'HomeDashbord' }">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18H15V12H10V18ZM4 18H9V5H4V18ZM16 18H21V12H16V18ZM10 5V11H21V5H10Z" fill="#fff" />
            </svg>
            <span>Tableau de bord</span>
          </router-link>
        </div>
      </div>

      <!--  company box -->
      <div v-if="companySelected.name !== undefined">
        <router-link class="link_menu stxm-r" :class="colorMenuActive" :to="{ name: 'SeeCompany' }">
          <div class="link_menu onglet" :class="colorMenuActive">
            <span>{{ upperFirstLetter(companySelected.name) }}</span>
          </div>
          <router-link
            class="link_menu close_entreprise stxm-r"
            :class="colorMenuActive"
            :to="{ name: 'HomeDashbord' }"
          >
            <svg
              @click="outCompanySelected"
              width="12"
              height="12"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.72463 7.9587L14.7996 1.88371C15.0828 1.55308 15.0637 1.06022 14.7559 0.752414C14.4481 0.444607 13.9553 0.42557 13.6246 0.708716L7.54963 6.7837L1.47464 0.700383C1.14401 0.417236 0.65115 0.436273 0.343343 0.74408C0.0355359 1.05189 0.0164988 1.54475 0.299646 1.87538L6.37463 7.9587L0.291312 14.0337C0.0534993 14.2373 -0.0500887 14.5571 0.0231377 14.8615C0.096364 15.166 0.334046 15.4036 0.638462 15.4769C0.942879 15.5501 1.26265 15.4465 1.46631 15.2087L7.54963 9.1337L13.6246 15.2087C13.9553 15.4918 14.4481 15.4728 14.7559 15.165C15.0637 14.8572 15.0828 14.3643 14.7996 14.0337L8.72463 7.9587Z"
                fill="#F84210"
              />
            </svg>
          </router-link>
        </router-link>
      </div>
    </div>

    <!-- footer menu -->
    <div class="item_menu footer_menu">
      <img :src="logoNumericaFooter" />
      <span class="sts-r">© {{ new Date().getFullYear() }} - Numerica-compétences</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheMenu",
  data() {
    return {
      //toggle open close menu
      menuIsOpen: true,
      //url backend image
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
    };
  },
  computed: {
    //load theme color for currentUser
    ...mapGetters("CurrentUser", ["colorMenuActive", "bgLayout"]),

    //load info company selected
    ...mapGetters("Companies", ["companySelected"]),

    //add class for menu burger
    stateMenu() {
      return this.menuIsOpen ? "active" : "";
    },

    //recover logo in menu
    logoNumericaFooter() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === "logoMenu");
        return `${this.urlApiImg}${fieldName}`;
      }
    },

    //name user format
    nameUser() {
      return `
      ${this.upperFirstLetter(this.$store.getters["CurrentUser/currentUser"].name.firstName)}
      ${this.upperFirstLetter(this.$store.getters["CurrentUser/currentUser"].name.lastName)}
      `;
    },

    //add class close block of menu side
    openMenu() {
      return this.menuIsOpen ? "menu" : "menu_close";
    },
  },
  methods: {
    //change value bool of out company select for indicate to click on btn outCompanySelected
    outCompanySelected() {
      this.$store.commit("ParamApp/getOutCompanySelected", true);
    },

    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //disconnect user connected
    logOut() {
      this.$store.dispatch("CurrentUser/logOut");
      this.$store.commit("Companies/deleteCompaniesSelected");
    },

    //open or close menu with menu
    openCloseMenu() {
      if (this.menuIsOpen) {
        this.menuIsOpen = false;
      } else {
        this.menuIsOpen = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-active {
  background-color: rgba(0, 0, 0, 0.6);
}
.router-link-active svg path {
  fill: #f84210;
}
.icon_setting:hover path {
  cursor: pointer;
  fill: #f84210;
}
.icon_disconnect:hover path {
  cursor: pointer;
  fill: #f84210;
}
.box_svg:hover {
  cursor: pointer;
}
.icon_disconnect {
  margin-left: 10px;
}
.btn_img_menu {
  background-color: transparent;
  border: transparent;
}
.menu {
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title_menu {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 50px;
  padding: 0 10px 0 30px;
}
.title_menu span {
  display: block;
  margin-left: 10px;
}
.content_menu {
  flex: 4;
}
.close_entreprise {
  background-color: transparent;
}
.onglet {
  margin-right: 10px;
}
.footer_menu {
  height: 50px;
  padding: 10px 25px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box_menu_pricipal {
  border-top: 1px solid #b1b3b7;
  padding: 8px 0 8px 25px;
}
.box_option_app {
  padding: 8px 0 8px 25px;
}
.box_btn_deco {
  display: flex;
  justify-content: center;
  padding: 15px 0;
}
.user_menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
}
.box_img_setting_disconnect {
  display: flex;
  height: 18px;
}
</style>
