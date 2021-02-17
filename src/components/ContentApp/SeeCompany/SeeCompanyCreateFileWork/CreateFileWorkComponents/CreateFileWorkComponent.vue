<template>
  <div>
    <!-- search and list appellation -->
    <!-- field search -->
    <div class="cfwc_box_search_trade">
      <input-label-sample
        :placeholder="'Rechercher un métier'"
        :textLabel="'Saisissez un metier et selectionnez dans la liste déroulante'"
        :type="'text'"
        :themeColor="thColor"
        :value="valueSearch"
        v-model="valueSearch"
        v-on:keyup="captureLetter"
      >
      </input-label-sample>
      <!-- btn reset -->
      <button-close v-if="valueSearch !== ''" class="cfwc_btn_reset_search" v-on:close="btnReset"></button-close>
    </div>

    <!-- volet search -->
    <div v-if="search === true" class="cfwc_box_list_appellation">
      <div>
        <option
          class="cfwc_box_option_list_appellation"
          @click="takeCompetence"
          v-for="(items, i) in newTab"
          :key="i"
          :value="items.code"
        >
          {{ items.libelle }}
        </option>
      </div>
    </div>
  </div>
</template>

<script>
//import FileWorkComponent from "./FileWorkComponent";
import { mapGetters, mapState } from "vuex";
import ButtonClose from "../../../../Elements/Buttons/ButtonClose.vue";
import ButtonSample from "../../../../Elements/Buttons/ButtonSample";
import InputLabelSample from "../../../../Elements/Inputs/InputLabelSample.vue";

export default {
  name: "CreateFileWorkComponent",
  components: {
    //FileWorkComponent,
    ButtonSample,
    InputLabelSample,
    ButtonClose,
  },
  props: {
    //see champs search
    isTradeSelected: Boolean,
  },
  data() {
    return {
      valueSearch: "",
      newTab: null,
      search: false,
    };
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),
    ...mapState("ApiRom", {
      listAppellation: "appellations",
      listCompetences: "competenceOfAppellationSelected",
    }),

    //filter of limit number this appellation
    filterItems() {
      return this.newTab.slice(0, 25);
    },
  },
  methods: {
    //request for recover competence of appellation selected
    async takeCompetence(event) {
      await this.$store.dispatch("ApiRom/getCompetencesOfAppellations", event.target.value);
      this.$emit("update:isTradeSelected", true);
      this.btnReset();
    },

    //search with letter of input, search in appellation
    captureLetter() {
      this.valueSearch != "" ? (this.search = true) : (this.search = false);
      this.newTab = this.listAppellation.filter((el) => {
        return el.libelle.toLowerCase().startsWith(this.valueSearch.toLowerCase());
      });
      this.newTab.length > 11090 || this.newTab[0] === undefined ? (this.search = false) : (this.search = true);
      return this.newTab;
    },

    //reset this data
    btnReset() {
      this.newTab = null;
      this.valueSearch = "";
      this.search = false;
    },
  },
  beforeupdated() {
    //reset before update
    this.btnReset();
  },
};
</script>

<style></style>
