<template>
  <div>
    <!-- input sample required -->
    <input
      v-if="required"
      class="input"
      :placeholder="placeholder"
      :type="type"
      required
      @input="$emit('input', $event.target.value)"
      :value="value"
    />

    <!-- input sample not required -->
    <input
      v-else
      class="input"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "InputSample",
  props: {
    placeholder: String,
    type: String,
    required: Boolean,
    value: String,
  },
};
</script>

<style></style>
