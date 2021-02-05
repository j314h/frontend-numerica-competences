<template>
  <div class="box" :class="themeColor.cbgCard">
    <title-cards :title="'Vos clients'" :themeColor="themeColor"></title-cards>

    <!-- head array search -->
    <head-sample-array
      :themeColor="themeColor"
      :textLines="textLines"
      :valueSearch.sync="valueSearch"
      :fieldSearch.sync="fieldSearch"
    ></head-sample-array>

    <!-- ligne -->
    <div v-for="(item, i) in companiesReferents" :key="i" class="line">
      <!-- name -->
      <div class="link">
        <router-link class="link_router" :to="{ name: 'SeeCompany' }">
          <div class="name_company" @click="selectedCompany(item.company)">
            <span>{{ upperFirstLetter(item.company.name) }}</span>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                fill="#4c39e9"
              />
            </svg>
          </div>
        </router-link>
      </div>

      <!-- filliale -->
      <div v-if="item.company.filliale">
        {{ upperFirstLetter(item.company.filliale) }}
      </div>
      <div v-else>
        -
      </div>

      <!-- referent exist -->
      <div v-if="item.employee.name.lastName !== 'référent'" class="link name_company">
        <router-link class="link_router name_company" :to="{ name: 'SeeUserReferentCompany' }">
          <span class="first_name_referent">{{ upperFirstLetter(item.employee.name.firstName) }}</span>
          <span class="name_referent upper">{{ item.employee.name.lastName }}</span>
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
              fill="#4c39e9"
            />
          </svg>
        </router-link>
      </div>

      <!-- referent not exist -->
      <div @click="selectedCompany(item.company)" v-else class="link name_company">
        <router-link
          class="link_router link_add_referent"
          :to="{ name: 'SeeCompanyCreateUser', query: { referent: true } }"
        >
          <span>
            {{ upperFirstLetter(item.employee.name.firstName) }}
            {{ item.employee.name.lastName }}
          </span>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#f84210" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeadSampleArray from "../../../Elements/Arrays/HeadSample/HeadSampleArray.vue";
import TitleCards from "../../../Elements/TitleCards.vue";

export default {
  components: { TitleCards, HeadSampleArray },
  name: "DashHomeArrayCompanies",
  props: {
    themeColor: Object,
    companiesReferents: Array,
  },
  data() {
    return {
      textLines: ["Dénomination", "Site/Filliale", "Référent"],
      valueSearch: "",
      fieldSearch: "",
      //
      isSearchDenomination: false,
      isSearchFilliale: false,
      isSearchReferent: false,
      captureDenomination: "",
      captureFilliale: "",
      captureReferent: "",
    };
  },
  computed: {},
  methods: {
    //active input search
    searchDenomination() {
      this.isSearchFilliale = false;
      this.isSearchReferent = false;
      this.isSearchDenomination = !this.isSearchDenomination;
    },
    searchFilliale() {
      this.isSearchReferent = false;
      this.isSearchDenomination = false;
      this.isSearchFilliale = !this.isSearchFilliale;
    },
    searchReferent() {
      this.isSearchFilliale = false;
      this.isSearchDenomination = false;
      this.isSearchReferent = !this.isSearchReferent;
    },

    //first letter of text uppercase
    upperFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },

    //selected company
    selectedCompany(company) {
      //add id in store currentcompany in companiesSelected
      this.$store.commit("Companies/addIdCompanySelected", company._id);
      this.$store.commit("ParamApp/changeTitleHeadBand", company.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 50px;
}
.line {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #4c39e9;
}
.linehead {
  font-size: 1.8rem;
  font-weight: 500;
  height: 60px;
  padding: 0px 20px;
}
.item_head {
  display: flex;
  align-items: center;
}
.item_head:hover {
  cursor: pointer;
}
.item_head span {
  margin-left: 10px;
}
.item_head:hover svg path {
  stroke: #f84210;
}
.item_head_search {
  display: flex;
  align-items: center;
}
.item_head_search:hover {
  cursor: pointer;
}
.item_head_search svg {
  margin-right: 10px;
}
.item_head_search svg:hover path {
  fill: #f84210;
  cursor: pointer;
}
.input {
  height: 25px;
}
.line div:nth-child(1) {
  flex: 2;
}
.line div:nth-child(2) {
  flex: 2;
  padding: 0 20px;
}
.line div:nth-child(3) {
  flex: 2;
}
.link_router {
  color: #000;
}
.link_router:hover {
  color: #f84210;
  cursor: pointer;
}
.link_add_referent {
  color: #f84210;
}
.name_company {
  display: flex;
  justify-content: start;
  align-items: center;
}
.name_company span {
  margin-right: 10px;
}
.name_company .first_name_referent {
  margin-right: 6px;
}
.first_name_referent {
  margin-right: 0px;
}
.name_referent {
  display: inline;
  margin-right: 12px;
  padding: 0 0;
}
</style>
