<template>
  <div class="the_menu_dashbord_box">
    <!-- dashbord -->
    <router-link active-class="the_menu_router_active" :class="colorMenuActive" :to="{ name: 'HomeDashbord' }">
      <ImgDashbord />
      <span>{{ text }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

//components
import ImgDashbord from "../../components-globals/Imgs/ImgDashbord";

export default {
  name: "TheMenuDashbord",
  components: {
    ImgDashbord,
  },
  props: {
    text: { type: String, default: "Title menu dashbord" },
  },
  computed: {
    //load theme color for currentUser
    ...mapGetters("CurrentUser", ["colorMenuActive"]),
  },
};
</script>

<style></style>
