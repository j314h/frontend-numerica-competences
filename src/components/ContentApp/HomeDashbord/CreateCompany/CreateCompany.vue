<template>
  <div class="stxm-r">
    <!-- form for create company -->
    <create-company-form
      :themeColor="themeColor"
      :errors="errors"
      :btnm="btnm"
      :idCurrentUser="idCurrentUser"
      :stateActif="stateActif"
    ></create-company-form>
  </div>
</template>

<script>
import CreateCompanyForm from "./CreateCompanyForm.vue";

export default {
  name: "CreateCompany",
  components: { CreateCompanyForm },
  props: {
    themeColor: Object,
    errors: Array,
    idCurrentUser: String,
    btnm: String,
    stateActif: String,
  },
};
</script>

<style></style>
