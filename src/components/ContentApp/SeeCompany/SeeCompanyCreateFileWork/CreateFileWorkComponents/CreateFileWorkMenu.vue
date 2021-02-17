<template>
  <div class="cfwm_box">
    <nav class="cfwm_box_nav">
      <ul class="cfwm_box_ul">
        <li ref="li1" @click="test($event)" :class="active + ' ' + thColor.textBasic">Type savoir</li>
        <li ref="li2" @click="test($event)" :class="disable + ' ' + thColor.textBasic">Type savoir faire</li>
        <li ref="li3" @click="test($event)" :class="disable + ' ' + thColor.textBasic">Type transverse</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CreateFileWorkMenu",
  props: {
    //see competence savoir
    isSavoir: Boolean,
    //see competence savoir faire
    isSavoirFaire: Boolean,
    //see transversal
    isTransversal: Boolean,
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),

    active() {
      return this.thColor.bgContent;
    },
    disable() {
      return this.thColor.cbgCard;
    },
  },
  methods: {
    test(e) {
      console.log(this.thColor.bgContent);
      this.$refs.li1.classList.remove(this.thColor.bgContent);
      this.$refs.li2.classList.remove(this.thColor.bgContent);
      this.$refs.li3.classList.remove(this.thColor.bgContent);
      this.$refs.li1.classList.add(this.thColor.cbgCard);
      this.$refs.li2.classList.add(this.thColor.cbgCard);
      this.$refs.li3.classList.add(this.thColor.cbgCard);

      e.target.classList.remove(this.thColor.cbgCard);
      e.target.classList.add(this.thColor.bgContent);

      switch (e.target.textContent) {
        case "Type savoir":
          this.$emit("update:isSavoir", true);
          this.$emit("update:isSavoirFaire", false);
          this.$emit("update:isTransversal", false);
          break;
        case "Type savoir faire":
          this.$emit("update:isSavoir", false);
          this.$emit("update:isSavoirFaire", true);
          this.$emit("update:isTransversal", false);
          break;
        case "Type transverse":
          this.$emit("update:isSavoir", false);
          this.$emit("update:isSavoirFaire", false);
          this.$emit("update:isTransversal", true);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style></style>
