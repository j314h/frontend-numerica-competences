<template>
  <div>
    <button @click="deleteEntity" class="btn-delete stxm-l">{{ textBtn }}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonDelete",
  props: {
    textBtn: String,
    idDelete: String,
    entityDelete: String,
  },
  methods: {
    //delete l'entity current
    deleteEntity() {
      this.$store.dispatch(`${this.entityDelete}/delete`, this.idDelete);
    },
  },
};
</script>

<style lang="scss" scoped></style>
