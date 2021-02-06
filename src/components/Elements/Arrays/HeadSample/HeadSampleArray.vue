<template>
  <div class="box_array_head_search" :class="themeColor.label">
    <head-sample-line
      v-for="(textLine, i) in textLines"
      :key="i"
      :textLine="textLine"
      :target.sync="target"
      :i="i"
      v-model="value"
      @input="search(textLine)"
    ></head-sample-line>
  </div>
</template>

<script>
import HeadSampleLine from "./HeadSampleLine.vue";

export default {
  components: { HeadSampleLine },
  name: "HeadSampleArray",
  props: {
    themeColor: Object,
    textLines: Array,
    valueSearch: String,
    fieldSearch: String,
  },
  data() {
    return {
      active: false,
      value: this.valueSearch,
      target: this.textLines.map((el) => false),
      i: Number,
    };
  },
  methods: {
    //update props
    search(field) {
      this.$emit("update:fieldSearch", field);
      this.$emit("update:valueSearch", this.value);
    },
  },
};
</script>

<style></style>
