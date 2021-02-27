<template>
  <div>
    <img :src="`${urlApiImg}${src}`" />
  </div>
</template>

<script>
export default {
  name: "ImgSample",
  props: {
    src: { type: String, default: "undefined" },
  },
  data() {
    return {
      //for img logo numerica
      urlApiImg: process.env.VUE_APP_URL_API_IMG,
    };
  },
};
</script>
