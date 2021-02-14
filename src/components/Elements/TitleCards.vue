<template>
  <div class="box_title_cards">
    <!-- title of cards in content primary -->
    <h3 v-if="!subTitle" class="stxxm-b title_cards" :class="themeColor.titleCard">{{ title }}</h3>
    <h3 v-if="subTitle" class="stl-r title_cards" :class="themeColor.titleCard">{{ title }}</h3>

    <!-- img for update entity -->
    <div v-if="isImage">
      <img
        class="img_title_card"
        @click="updateCompany"
        v-if="!isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        :src="imageUpdateCompany"
      />
      <img
        class="img_title_card"
        @click="closeUpdate"
        v-if="isUpdateCompany && authorization.includes(currentUser.role.libelle)"
        :src="imageCloseUpdateCompany"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleCards",
  props: {
    title: String,
    themeColor: Object,
    imageUpdateCompany: String,
    imageCloseUpdateCompany: String,
    isImage: {
      type: Boolean,
      default: false,
    },
    authorization: Array,
    currentUser: Object,
    isUpdateCompany: Boolean,
    subTitle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    //see form for update user and change img pencil
    //activate in children for close window update
    //is not good, change this in futur versionning
    updateCompany() {
      this.$emit("update:isUpdateCompany", !this.isUpdateCompany);
    },

    //close box update company and reset errors
    closeUpdate() {
      this.$emit("update:isUpdateCompany", !this.isUpdateCompany);
      this.$store.commit("Error/resetError");
    },
  },
};
</script>

<style></style>
