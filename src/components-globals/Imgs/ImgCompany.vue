<template>
  <svg
    class="img_company"
    xmlns="http://www.w3.org/2000/svg"
    :width="w"
    :height="h"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
</template>

<script>
export default {
  name: "ImgCompany",
  props: {
    w: { type: String, default: "20" },
    h: { type: String, default: "20" },
  },
};
</script>

<style></style>
