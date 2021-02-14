<template>
  <div>
    <label class="input_check_sample_wrapper" :for="titleLabel">
      {{ titleLabel }}
      <input
        class="input_check_sample_checkbox"
        type="checkbox"
        :name="name"
        :id="id"
        :checked="isChecked"
        :value="value"
        @change="updateInput"
      />
      <span class="input_check_sample_checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "InputCheckSample",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    titleLabel: String,
    name: String,
    id: String,
    //
    modelValue: { default: "" },
    trueValue: { default: true },
    falseValue: { default: false },
    value: String,
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style></style>
