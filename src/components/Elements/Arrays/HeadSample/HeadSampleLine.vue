<template>
  <div class="line champs_head linehead cbginput">
    <!-- text -->
    <div v-if="!target[i]" @click="search" class="item_head">
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.1431 8.76049C16.1431 12.9421 12.7532 16.332 8.57153 16.332C4.38989 16.332 1 12.9421 1 8.76049C1 4.57885 4.38989 1.18896 8.57153 1.18896C12.7532 1.18896 16.1431 4.57885 16.1431 8.76049Z"
          stroke="#4C39E9"
          stroke-width="2"
        />
        <path d="M15.1318 16.062L19.9996 20.811" stroke="#4C39E9" stroke-width="2" />
      </svg>
      <span>{{ textLine }}</span>
    </div>

    <!-- input recherche -->
    <div v-else class="item_head_search">
      <svg
        @click="closeSearch"
        width="15"
        height="15"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2657 19.8899L39.4656 3.6899C40.2207 2.80822 40.1699 1.49392 39.3491 0.673103C38.5283 -0.147715 37.214 -0.198481 36.3323 0.556577L20.1324 16.7565L3.93238 0.534355C3.05069 -0.220703 1.7364 -0.169938 0.915581 0.650881C0.0947623 1.4717 0.0439968 2.78599 0.799055 3.66768L16.999 19.8899L0.776833 36.0898C0.142665 36.6329 -0.13357 37.4857 0.0617004 38.2974C0.256971 39.1092 0.890789 39.743 1.70257 39.9383C2.51434 40.1336 3.36707 39.8573 3.91016 39.2232L20.1324 23.0232L36.3323 39.2232C37.214 39.9782 38.5283 39.9275 39.3491 39.1066C40.1699 38.2858 40.2207 36.9715 39.4656 36.0898L23.2657 19.8899Z"
          fill="#4C39E9"
        />
      </svg>
      <input class="input_search cbgwhite" placeholder="Rechercher" @input="$emit('input', $event.target.value)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadSampleLine",
  props: {
    textLine: String,
    target: Array,
    i: Number,
  },
  data() {
    return {};
  },
  methods: {
    //open input search
    search() {
      const tab = this.target.map((el, i) => (i === this.i ? true : false));
      this.$emit("update:target", tab);
    },

    //close input search
    closeSearch() {
      const tab = this.target.map((el, i) => (i === this.i ? false : false));
      this.$emit("update:target", tab);
    },
  },
};
</script>

<style></style>
