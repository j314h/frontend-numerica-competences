<template>
  <div class="box" :class="cbgBox">
    <h3 class="stxxm-m title" :class="colorTextTab">Vos clients</h3>
    <!-- faire tableau -->
    <!-- ligne head -->
    <div class="line linehead cbginput" :class="colorTextTab">
      <div>
        Dénomination
      </div>
      <div>
        Site ou filliale
      </div>
      <div>
        Référent
      </div>
    </div>
    <!-- ligne -->
    <div v-for="(item, i) in tabHomeCompanies" :key="i" class="line">
      <div class="link">
        <router-link class="link_router" :to="{ name: 'SeeCompany' }">
          <div @click="test(item.company._id)">{{ item.company.name }}</div>
        </router-link>
      </div>
      <div>
        {{ item.company.filliale }}
      </div>
      <div class="link">
        <router-link class="link_router" :to="{ name: 'SeeUserReferentCompany' }">
          {{ item.referent.name.firstName }}
          {{ item.referent.name.lastName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashHomeArrayCompanies",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("UserConnect", ["cbgBox", "colorTextTab"]),
    ...mapGetters("Companies", ["tabHomeCompanies"]),
  },
  methods: {
    test(id) {
      //add id in store currentcompany in companiesSelected
      this.$store.commit("CurrentCompany/addCompaniesSelected", id);
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
  padding: 15px 20px;
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
  color: #000000;
}
.link_router:hover {
  color: #f84210;
  cursor: pointer;
}
</style>
