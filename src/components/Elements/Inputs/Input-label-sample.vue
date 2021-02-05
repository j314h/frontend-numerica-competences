<template>
  <div>
    <!-- label avec input -->
    <label class="label-sample stxm-m" :class="themeColor.label">{{ textLabel }}</label>
    <!-- input required -->
    <input
      v-if="required"
      class="input"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :placeholder="placeholder"
      required
    />

    <!-- input not required -->
    <input
      v-else
      class="input"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "InputLabelSample",
  props: {
    placeholder: String,
    themeColor: Object,
    textLabel: String,
    type: String,
    required: Boolean,
    value: String,
  },
};
</script>

<style></style>
