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
        <!-- update user -->
        <setting-user-info-update
          v-if="isUpdateUser"
          :currentUser="currentUser"
          :errors="errors"
          :roles="roles"
        ></setting-user-info-update>

        <!-- see info user -->
        <setting-user-info-detail
          v-else
          :currentUser="currentUser"
          :companiesAdmin="companiesAdmin"
        ></setting-user-info-detail>
      </transition>

      <!-- sous title -->
      <div class="box_title_company">
        <h6 class="stxm-m subscrite_title" :class="currentUser.themeColor.colorText">Votre entreprise</h6>
        <div>
          <img
            v-if="authorization.includes(currentUser.role.libelle)"
            @click="updateCompany"
            :src="imageUpdateCompany"
          />
        </div>
      </div>

      <!-- company info if isUpdate is true on see -->
      <transition name="fade" mode="out-in">
        <!-- update company user -->
        <setting-user-info-company-update
          :currentUserCompany="currentUserCompany"
          :sectorsCompanyCurrentUser="sectorsCompanyCurrentUser"
          :currentUser="currentUser"
          :whatCompanyUpdate="whatCompanyUpdate"
          :errors="errors"
          v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        ></setting-user-info-company-update>

        <!-- see info company user -->
        <setting-user-info-company
          v-else
          :currentUserCompany="currentUserCompany"
          :sectorsCompanyCurrentUser="sectorsCompanyCurrentUser"
          :currentUser="currentUser"
        ></setting-user-info-company>
      </transition>
    </div>
  </div>
</template>

<script>
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
  props: {
    currentUser: Object,
    urlApiImg: String,
    authorization: Array,
    companiesAdmin: Array,
    currentUserCompany: Object,
    errors: Array,
    roles: Array,
    sectorsCompanyCurrentUser: Array,
  },
  data() {
    return {
      nameImageUser: "logoUpdateElement",
      nameImageUserCompany: "logoUpdateElement",
      isUpdateUser: false,
      isUpdateCompany: false,
      whatCompanyUpdate: "current",
    };
  },
  computed: {
    //this variable for change image pencil and X for update user and company
    imageUpdateUser() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageUser);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
    imageUpdateCompany() {
      if (this.$store.getters["Files/imgs"]) {
        const { fieldName } = this.$store.getters["Files/imgs"].find((el) => el.name === this.nameImageUserCompany);
        return `${this.urlApiImg}${fieldName}`;
      }
    },
  },
  methods: {
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateUser() {
      if (this.nameImageUser === "logoUpdateElement") {
        this.nameImageUser = "logoCloseUpdateElement";
        this.isUpdateUser = true;
      } else {
        this.nameImageUser = "logoUpdateElement";
        this.isUpdateUser = false;
      }
    },
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateCompany() {
      if (this.nameImageUserCompany === "logoUpdateElement") {
        this.nameImageUserCompany = "logoCloseUpdateElement";
        this.isUpdateCompany = true;
      } else {
        this.nameImageUserCompany = "logoUpdateElement";
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
