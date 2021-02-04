<template>
  <div>
    <input
      @change="$emit('switch')"
      class="switch"
      type="checkbox"
      id="switch"
      :checked="valueTheme"
      @input="$emit('input', $event.target.checked)"
    />
    <label class="switchlabel" for="switch"></label>
  </div>
</template>

<script>
export default {
  name: "ButtonSwitchThemeColor",
  props: {
    valueTheme: Boolean,
  },
};
</script>

<style></style>
