<template>
  <div>
    <!-- head -->
    <div class="header">
      <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Informations</h3>
      <img @click="updateUser" :src="`${urlApiImg}${imageUpdateUser[0].fieldName}`" />
    </div>
    <div>
      <!-- user info detail if isUpdate is true on see-->
      <setting-user-info-update v-if="isUpdateUser"></setting-user-info-update>
      <setting-user-info-detail v-else></setting-user-info-detail>
      <!-- company info if isUpdate is true on see -->
      <div class="box_title_company">
        <h6 class="stxm-m subscrite_title" :class="currentUser.themeColor.colorText">Votre entreprise</h6>
        <div>
          <img @click="updateCompany" :src="`${urlApiImg}${imageUpdateCompany[0].fieldName}`" />
        </div>
      </div>
      <setting-user-info-company-update
        v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
      ></setting-user-info-company-update>
      <setting-user-info-company v-else></setting-user-info-company>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SettingUserInfoCompany from "./SettingUserInfoCompany.vue";
import SettingUserInfoCompanyUpdate from "./SettingUserInfoCompanyUpdate.vue";
import SettingUserInfoDetail from "./SettingUserInfoDetail.vue";
import SettingUserInfoUpdate from "./SettingUserInfoUpdate.vue";

export default {
  components: {
    SettingUserInfoDetail,
    SettingUserInfoCompany,
    SettingUserInfoUpdate,
    SettingUserInfoCompanyUpdate,
  },
  name: "SettingUserInfo",
  data() {
    return {
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      imageUser: "logoUpdateElement",
      imageUserCompany: "logoUpdateElement",
      isUpdateUser: false,
      isUpdateCompany: false,
      authorization: ["root", "administrateur", "référent"],
    };
  },
  computed: {
    ...mapGetters("UserConnect", ["currentUser"]),

    imageUpdateUser() {
      return this.$store.getters["ParamApp/imgs"].filter((el) => el.name === this.imageUser);
    },
    imageUpdateCompany() {
      return this.$store.getters["ParamApp/imgs"].filter((el) => el.name === this.imageUserCompany);
    },
  },
  methods: {
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateUser() {
      if (this.imageUser === "logoUpdateElement") {
        this.imageUser = "logoCloseUpdateElement";
        this.isUpdateUser = true;
      } else {
        this.imageUser = "logoUpdateElement";
        this.isUpdateUser = false;
      }
    },
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateCompany() {
      if (this.imageUserCompany === "logoUpdateElement") {
        this.imageUserCompany = "logoCloseUpdateElement";
        this.isUpdateCompany = true;
      } else {
        this.imageUserCompany = "logoUpdateElement";
        this.isUpdateCompany = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 20px;
  height: 20px;
}
img:hover {
  cursor: pointer;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.box_title_company {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
</style>
