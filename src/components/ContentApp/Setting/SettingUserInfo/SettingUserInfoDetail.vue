<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <div class="box_info_detail">
      <!-- info personnal -->
      <div class="info_detail">
        <p>{{ userName }}</p>
        <p>{{ upperFirstLetter(user.address.street) }}</p>
        <p>{{ userAddress }}</p>
        <p>{{ user.phoneNumber }}</p>
        <p>{{ user.email }}</p>
      </div>
      <!-- info work -->
      <div class="info_detail">
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">
            Mot de passe: <span :class="user.themeColor.colorTextImportant">**********</span>
          </p>
        </div>
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">
            Rôle: <span :class="user.themeColor.colorTextImportant">{{ user.role.libelle }}</span>
          </p>
        </div>
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">
            Statut: <span :class="user.themeColor.colorTextImportant">{{ user.state.libelle }}</span>
          </p>
        </div>
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">
            Nombre de clients: <span :class="user.themeColor.colorTextImportant">0</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingUserInfoDetail",
  data() {
    return {};
  },
  methods: {
    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  computed: {
    user() {
      return this.$store.getters["UserConnect/currentUser"];
    },
    userName() {
      return `
      ${this.user.civility} 
      ${this.upperFirstLetter(this.user.name.firstName)} 
      ${this.upperFirstLetter(this.user.name.lastName)}
      `;
    },
    userAddress() {
      return `
      ${this.user.address.postCode}  
      ${this.upperFirstLetter(this.user.address.city)}
      `;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 7px 0;
}
.box_info_detail {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;
  padding-bottom: 40px;
}
.box_info_detail .info_detail {
  margin-right: 100px;
}
.info_detail p {
  margin-bottom: 10px;
}
.info_detail div p {
  margin-bottom: 20px;
}
</style>
