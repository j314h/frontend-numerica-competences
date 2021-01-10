<template>
  <div class="stxm-r">
    <!-- form for create company -->
    <create-company-form></create-company-form>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CreateCompanyForm from "./CreateCompanyForm.vue";

export default {
  name: "CreateCompany",
  components: { CreateCompanyForm },
};
</script>

<style lang="scss" scoped></style>
