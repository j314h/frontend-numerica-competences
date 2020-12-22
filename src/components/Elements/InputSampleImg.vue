<template>
  <div>
    <input
      class="t-body c-gray-1 img_input"
      v-bind:class="classObject"
      :placeholder="place"
      :type="typeInput"
      :value="value"
      @input="$emit('input', $event.target.value)"
      required
    />
  </div>
</template>

<script>
export default {
  name: "InputSampleImg",
  props: {
    value: String,
    email: Boolean,
    password: Boolean,
    place: String,
    typeInput: String,
  },
  computed: {
    //choice of the class of the input compared to the given props
    classObject() {
      return {
        "input-email": this.email && !this.password,
        "input-password": this.password && !this.email,
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
