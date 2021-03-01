<template>
  <div>
    <!--  company box -->
    <div v-if="companySelected.name !== undefined">
      <router-link
        class="the_menu_content_link_company"
        active-class="the_menu_router_active"
        :class="colorMenuActive"
        :to="{ name: 'SeeCompany' }"
      >
        <!-- name company -->
        <ImgCompany />
        <span>{{ upperFirstLetter(companySelected.name) }}</span>

        <!-- close company -->
        <router-link active-class="the_menu_router_active" :class="colorMenuActive" :to="{ name: 'HomeDashbord' }">
          <ButtonClose v-on:close="outCompanySelected" />
        </router-link>
      </router-link>
    </div>

    <!-- create file work of company selected -->
    <div
      class="the_menu_content_sub_company"
      v-if="currentComponent === 'ListFileWork' || currentComponent === 'CreateFileWork'"
    >
      <!-- link for list work -->
      <router-link active-class="the_menu_router_active" :class="colorMenuActive" :to="{ name: 'ListFileWork' }">
        <ImgListWork />
        <span>Liste des métiers</span>
      </router-link>

      <!-- create work -->
      <router-link active-class="the_menu_router_active" :class="colorMenuActive" :to="{ name: 'CreateFileWork' }">
        <ImgCreateWork />
        <span>Créer un métier</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import ButtonClose from "../Elements/Buttons/ButtonClose.vue";
import ImgCompany from "../../components-globals/Imgs/ImgCompany";
import ImgListWork from "../../components-globals/Imgs/ImgListWork";
import ImgCreateWork from "../../components-globals/Imgs/ImgCreateWork";

export default {
  name: "TheMenuContent",
  components: {
    ImgCompany,
    ImgListWork,
    ButtonClose,
    ImgCreateWork,
  },
  props: {
    currentRoad: String,
    currentComponent: String,
  },
  computed: {
    //load info company selected
    ...mapGetters("Companies", ["companySelected"]),
    //load theme color for currentUser
    ...mapGetters("CurrentUser", ["colorMenuActive"]),
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //change value bool of out company select for indicate to click on btn outCompanySelected
    outCompanySelected() {
      this.$store.commit("ParamApp/getOutCompanySelected", true);
      if (this.$store.getters["ParamApp/titleHeadBand"] === "Tableau de bord") {
        //test if user close company selected or not
        if (this.$store.getters["ParamApp/outCompanySelected"]) {
          this.$store.commit("Companies/deleteCompaniesSelected");
        }
      }
    },
  },
};
</script>

<style></style>
