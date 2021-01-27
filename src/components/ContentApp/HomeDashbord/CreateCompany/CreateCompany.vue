<template>
  <div class="stxm-r">
    <!-- form for create company -->
    <create-company-form
      :cbgBox="thColor.cbgBox"
      :colorTextTab="thColor.colorTextTab"
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
    thColor: Object,
    errors: Array,
    idCurrentUser: String,
    btnm: String,
    stateActif: String,
  },
};
</script>

<style lang="scss" scoped></style>
