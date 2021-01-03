<template>
  <div>
    <!-- head -->
    <div class="header">
      <h3 class="stxxm-m" :class="currentUser.themeColor.colorTextTab">
        Informations
      </h3>
      <img @click="update" v-for="(item, i) in imageUpdate" :key="i" :src="`${urlApiImg}${item.fieldName}`" />
    </div>
    <div>
      <!-- user info detail if isUpdate is true on see-->
      <setting-user-info-update v-if="isUpdate"></setting-user-info-update>
      <setting-user-info-detail v-else></setting-user-info-detail>
      <!-- company info if isUpdate is true on see -->
      <setting-user-info-company-update v-if="isUpdate"></setting-user-info-company-update>
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
  components: { SettingUserInfoDetail, SettingUserInfoCompany, SettingUserInfoUpdate, SettingUserInfoCompanyUpdate },
  name: "SettingUserInfo",
  data() {
    return {
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
      image: "logoUpdateElement",
      isUpdate: false,
    };
  },
  computed: {
    ...mapGetters("UserConnect", ["currentUser"]),
    imageUpdate() {
      return this.$store.getters["ParamApp/imgs"].filter((el) => el.name === this.image);
    },
  },
  methods: {
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    update() {
      if (this.image === "logoUpdateElement") {
        this.image = "logoCloseUpdateElement";
        this.isUpdate = true;
      } else {
        this.isUpdate = false;
        this.image = "logoUpdateElement";
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
</style>
