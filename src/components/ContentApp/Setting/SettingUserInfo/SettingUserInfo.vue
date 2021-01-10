<template>
  <div>
    <!-- head -->
    <!-- title -->
    <div class="header">
      <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">Informations personnelles</h3>
      <img @click="updateUser" :src="imageUpdateUser" />
    </div>
    <div>
      <!-- user info detail if isUpdate is true on see-->
      <transition name="fade" mode="out-in">
        <setting-user-info-update v-if="isUpdateUser"></setting-user-info-update>
        <setting-user-info-detail v-else></setting-user-info-detail>
      </transition>
      <!-- sous title -->
      <div class="box_title_company">
        <h6 class="stxm-m subscrite_title" :class="currentUser.themeColor.colorText">Votre entreprise</h6>
        <div>
          <img @click="updateCompany" :src="imageUpdateCompany" />
        </div>
      </div>
      <!-- company info if isUpdate is true on see -->
      <transition name="fade" mode="out-in">
        <setting-user-info-company-update
          v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        ></setting-user-info-company-update>
        <setting-user-info-company v-else></setting-user-info-company>
      </transition>
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
    //recover current user
    ...mapGetters("UserConnect", ["currentUser"]),

    //this variable for change image pencil and X for update user and company
    imageUpdateUser() {
      if (this.$store.getters["ParamApp/imgs"]) {
        const { fieldName } = this.$store.getters["ParamApp/imgs"].find((el) => el.name === this.imageUser);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
    imageUpdateCompany() {
      if (this.$store.getters["ParamApp/imgs"]) {
        const { fieldName } = this.$store.getters["ParamApp/imgs"].find((el) => el.name === this.imageUserCompany);
        return `${this.urlApiImg}${fieldName}`;
      }
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
  margin-left: 20px;
}
img:hover {
  cursor: pointer;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-bottom: 20px;
}

.box_title_company {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-bottom: 30px;
}
</style>
