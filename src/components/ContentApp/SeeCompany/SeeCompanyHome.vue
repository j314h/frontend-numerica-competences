<template>
  <div>
    <div class="salarie box stxm-r" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Salariés</h3>
      </div>
    </div>
    <div class="box stxm-r" :class="currentUser.themeColor.cbgBox">
      <div class="header">
        <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Informations</h3>
        <img :src="imageUpdateCompany" />
      </div>
      <company-selected-info :company="currentCompany" :user="currentUser"></company-selected-info>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompanySelectedInfo from "./SeeCompanyComponent/CompanySelectedInfo.vue";

export default {
  components: { CompanySelectedInfo },
  name: "SeeCompanyHome",
  data() {
    return {
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      imageCompany: "logoUpdateElement",
    };
  },
  computed: {
    ...mapGetters("CurrentCompany", ["idCompaniesSelected", "currentCompany"]),
    ...mapGetters("UserConnect", ["currentUser"]),

    //this variable for change image pencil and X for update user and company
    imageUpdateCompany() {
      if (this.$store.getters["ParamApp/imgs"]) {
        const { fieldName } = this.$store.getters["ParamApp/imgs"].find((el) => el.name === this.imageCompany);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
img:hover {
  cursor: pointer;
}
.salarie {
  margin-bottom: 20px;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-bottom: 20px;
}
</style>
