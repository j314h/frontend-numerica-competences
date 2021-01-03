<template>
  <div class="stxm-r" :class="user.themeColor.colorTextTab">
    <div class="box_info_detail">
      <!-- info personnal -->
      <div class="info_detail">
        <p>{{ userName }}</p>
        <p>{{ user.address.street }}</p>
        <p>{{ userAddress }}</p>
        <p>{{ user.phoneNumber }}</p>
        <p>{{ user.email }}</p>
      </div>
      <!-- info work -->
      <div class="info_detail">
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">Rôle</p>
          <p>{{ user.role.libelle }}</p>
        </div>
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">Statu</p>
          <p>{{ user.state.libelle }}</p>
        </div>
        <div>
          <p class="stxm-m" :class="user.themeColor.colorText">Nombre de clients</p>
          <p>0</p>
        </div>
      </div>
      <!-- info password -->
      <div class="info_detail">
        <p class="stxm-m" :class="user.themeColor.colorText">Mot de passe</p>
        <p>********</p>
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
  justify-content: space-around;
  padding-bottom: 40px;
}
.box_info_detail .info_detail:nth-child(1) {
  min-width: 300px;
  flex: 3;
}
.box_info_detail .info_detail:nth-child(2) {
  min-width: 200px;
  flex: 2;
  margin: 0 0 0 60px;
}
.box_info_detail .info_detail:nth-child(3) {
  min-width: 200px;
  flex: 2;
}
</style>
