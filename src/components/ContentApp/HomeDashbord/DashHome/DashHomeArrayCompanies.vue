<template>
  <div class="box" :class="cbgBox">
    <h3 class="stxxm-m title" :class="colorTextTab">Vos clients</h3>
    <!-- ligne head -->
    <div class="line linehead cbginput" :class="colorTextTab">
      <!-- denomination -->
      <div v-if="!isSearchDenomination" @click="searchDenomination" class="item_head">
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1431 8.76049C16.1431 12.9421 12.7532 16.332 8.57153 16.332C4.38989 16.332 1 12.9421 1 8.76049C1 4.57885 4.38989 1.18896 8.57153 1.18896C12.7532 1.18896 16.1431 4.57885 16.1431 8.76049Z"
            stroke="#4C39E9"
            stroke-width="2"
          />
          <path d="M15.1318 16.062L19.9996 20.811" stroke="#4C39E9" stroke-width="2" />
        </svg>
        <span>Dénomination</span>
      </div>

      <div v-else class="item_head_search">
        <svg
          @click="searchDenomination"
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
        <input class="input cbgwhite" placeholder="Rechercher" />
      </div>

      <!-- site filliale -->
      <div v-if="!isSearchFilliale" @click="searchFilliale" class="item_head">
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1431 8.76049C16.1431 12.9421 12.7532 16.332 8.57153 16.332C4.38989 16.332 1 12.9421 1 8.76049C1 4.57885 4.38989 1.18896 8.57153 1.18896C12.7532 1.18896 16.1431 4.57885 16.1431 8.76049Z"
            stroke="#4C39E9"
            stroke-width="2"
          />
          <path d="M15.1318 16.062L19.9996 20.811" stroke="#4C39E9" stroke-width="2" />
        </svg>
        <span>Site/Filliale</span>
      </div>

      <div v-else class="item_head_search">
        <svg
          @click="searchFilliale"
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
        <input class="input cbgwhite" placeholder="Rechercher" />
      </div>

      <!-- referent -->
      <div v-if="!isSearchReferent" @click="searchReferent" class="item_head">
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1431 8.76049C16.1431 12.9421 12.7532 16.332 8.57153 16.332C4.38989 16.332 1 12.9421 1 8.76049C1 4.57885 4.38989 1.18896 8.57153 1.18896C12.7532 1.18896 16.1431 4.57885 16.1431 8.76049Z"
            stroke="#4C39E9"
            stroke-width="2"
          />
          <path d="M15.1318 16.062L19.9996 20.811" stroke="#4C39E9" stroke-width="2" />
        </svg>
        <span>Référent</span>
      </div>

      <div v-else class="item_head_search">
        <svg
          @click="searchReferent"
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
        <input class="input cbgwhite" placeholder="Rechercher" />
      </div>
    </div>

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
export default {
  name: "DashHomeArrayCompanies",
  props: {
    cbgBox: String,
    colorTextTab: String,
    companiesReferents: Array,
  },
  data() {
    return {
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
