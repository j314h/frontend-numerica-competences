<template>
  <!-- page app -->
  <div class="dashbord_box">
    <!-- menu -->
    <TheMenu />

    <!-- content app with headband -->
    <div class="dashbord_box_content">
      <!-- headband -->
      <TheHeadband />
      <TheSubMenu v-show="isSubMenu" />

      <!-- content text assigns background and text color according to dark mode-->
      <div class="dashbord_content" :class="bgContent + ' ' + colorText">
        <transition v-if="!loading" appear name="fade" mode="out-in">
          <!-- view home for dashbord -->
          <router-view name="HomeDashbord"></router-view>

          <!-- view for setting app -->
          <router-view name="Setting"></router-view>

          <!-- views see company -->
          <router-view name="SeeCompany"></router-view>
        </transition>
        <RingLoader :loading="isLoading" :color="'#F84210'" :color2="'#4C39E9'" :size="'100px'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import TheHeadband from "../../components/TheHeadband/TheHeadband";
import TheMenu from "../../components/TheMenu/TheMenu";
import RingLoader from "../../components-globals/PreLoader/RingLoader";
import TheSubMenu from "../../components/TheSubMenu/TheSubMenu";

export default {
  components: { TheMenu, TheHeadband, TheSubMenu, RingLoader },
  name: "DashbordPage",
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    //recover current user
    ...mapGetters("CurrentUser", ["bgContent", "colorText"]),
    //check variable load of app
    ...mapGetters("Loading", ["isLoading"]),
    //check if see or not sub menu
    ...mapGetters("ParamApp", ["isSubMenu"]),
  },
  methods: {},
  async created() {
    //load img of app
    //load data for dashbord
    await this.$store.dispatch("Files/getFiles");
    await this.$store.dispatch("States/getAllState");
    await this.$store.dispatch("Companies/getAllCompaniesAdmin");
    //if company selected is define reload info company selected and users of company selected
    if (this.$store.getters["Companies/idCompaniesSelected"]) {
      await this.$store.dispatch("Companies/getCompanySelected", this.$store.getters["Companies/idCompaniesSelected"]);
      await this.$store.dispatch(
        "Sectors/getSectorsCompanySelected",
        this.$store.getters["Companies/idCompaniesSelected"]
      );
    }
    this.loading = false;
  },
};
</script>
