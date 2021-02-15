<template>
  <div>
    <div class="box list_file_work" :class="thColor.cbgCard">
      <!-- title -->
      <title-cards :title="'Liste des métiers'" :themeColor="thColor"></title-cards>

      <!-- head array of work -->
      <head-sample-array
        :themeColor="thColor"
        :textLines="textLines"
        :valueSearch.sync="valueSearch"
        :fieldSearch.sync="fieldSearch"
      ></head-sample-array>

      <!-- line of trade of company selected -->
      <div v-if="tradesCompanySelected.length > 0">
        <div v-for="(item, i) in tradesCompanySelected" :key="i" class="line">
          <!-- name trade not selected -->
          <div class="item_line box_name_company">
            <div class="name_company">
              <span>{{ item.libelle }}</span>
              <!-- if trade is selected icon change -->
              <svg
                v-if="selectedTrade.includes(item._id)"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f84210"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-down"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
              <!-- if trade is selected icon change -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f84210"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>

          <!-- famille -->
          <div class="item_line">
            {{ item.famille }}
          </div>

          <!-- action -->
          <div class="item_line array_file_work_action">
            <!-- icon update -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f84210"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <!-- icon trash -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff4b4b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </div>
        </div>
      </div>
      <!-- not trades -->
      <div v-else class="line">
        <p class="item_line" :class="thColor.textBasic">Aucun métier</p>
      </div>
    </div>

    <!-- display frame of the trade selected -->
    <div class="box list_file_work list_file_work_display" :class="thColor.cbgCard">
      <!-- trade exist -->
      <div v-if="selectedTrade.length > 0">
        <!-- title trade exist -->
        <title-cards :title="''" :themeColor="thColor"></title-cards>
      </div>

      <!-- trade not exist -->
      <div v-else>
        <!-- title trade not exist -->
        <title-cards :title="'Aucun métier selectionné'" :themeColor="thColor"></title-cards>
        <p class="stm-r" :class="thColor.textBasic">Sélectionnez un metier dans la liste ci-dessus</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeadSampleArray from "../../../Elements/Arrays/HeadSample/HeadSampleArray.vue";
import TitleCards from "../../../Elements/TitleCards.vue";

export default {
  components: { TitleCards, HeadSampleArray },
  name: "ListFileWork",
  data() {
    return {
      //for head array
      textLines: ["Dénomination", "Famille", "Action"],
      valueSearch: "",
      fieldSearch: "",
      //trade selected 6019583af46d935cde733355
      selectedTrade: [],
    };
  },
  computed: {
    ...mapGetters("CurrentUser", ["thColor"]),
    ...mapGetters("Trades", ["tradesCompanySelected"]),
  },
};
</script>

<style></style>
