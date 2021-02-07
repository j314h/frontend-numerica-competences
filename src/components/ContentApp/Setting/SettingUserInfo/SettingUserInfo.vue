<template>
  <div class="setting_user_info">
    <!-- info user -->
    <div class="box box_info_user_setting" :class="themeColor.cbgCard">
      <!-- title user information -->
      <title-cards
        :themeColor="themeColor"
        :title="'Informations personnelle'"
        :isImage="true"
        :imageCloseUpdateCompany="imageCloseUpdateCompany"
        :imageUpdateCompany="imageUpdateCompany"
        :authorization="authorization"
        :currentUser="currentUser"
        :isUpdateCompany.sync="isUpdateUser"
      ></title-cards>

      <!-- user info detail if isUpdate is true on see-->
      <div>
        <transition name="fade" mode="out-in">
          <!-- update user -->
          <setting-user-info-update
            v-if="isUpdateUser"
            :currentUser="currentUser"
            :errors="errors"
            :roles="roles"
            :isUpdateUser.sync="isUpdateUser"
          ></setting-user-info-update>

          <!-- see info user -->
          <setting-user-info-detail
            v-else
            :currentUser="currentUser"
            :companiesAdmin="companiesAdmin"
          ></setting-user-info-detail>
        </transition>
      </div>
    </div>

    <!-- info company current user -->
    <div class="box box_info_user_setting" :class="themeColor.cbgCard">
      <!-- title user information -->
      <title-cards
        :themeColor="themeColor"
        :title="'Votre entreprise'"
        :isImage="true"
        :imageCloseUpdateCompany="imageCloseUpdateCompany"
        :imageUpdateCompany="imageUpdateCompany"
        :authorization="authorization"
        :currentUser="currentUser"
        :isUpdateCompany.sync="isUpdateCompany"
      ></title-cards>

      <!-- company info if isUpdate is true on see -->
      <div>
        <transition name="fade" mode="out-in">
          <!-- update company user -->
          <setting-user-info-company-update
            :currentUserCompany="currentUserCompany"
            :sectorsCompanyCurrentUser="sectorsCompanyCurrentUser"
            :currentUser="currentUser"
            :whatCompanyUpdate="whatCompanyUpdate"
            :isUpdateCompany.sync="isUpdateCompany"
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
  </div>
</template>

<script>
import TitleCards from "../../../Elements/TitleCards.vue";
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
    TitleCards,
  },
  name: "SettingUserInfo",
  props: {
    currentUser: Object,
    urlApiImg: String,
    authorization: Array,
    companiesAdmin: Array,
    currentUserCompany: Object,
    errors: Array,
    themeColor: Object,
    roles: Array,
    sectorsCompanyCurrentUser: Array,
    imageUpdateCompany: String,
    imageCloseUpdateCompany: String,
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
  computed: {},
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

<style></style>
