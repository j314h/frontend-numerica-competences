<template>
  <div>
    <!-- ligne head -->
    <div class="line linehead cbginput" :class="currentUser.themeColor.colorTextTab">
      <div>
        Nom
      </div>
      <div>
        Métier
      </div>
      <div>
        Status
      </div>
      <div>
        Secteur
      </div>
    </div>
    <!-- ligne -->
    <div v-if="employeesCompanySelected.length > 0">
      <div v-for="(employee, i) in employeesCompanySelected" :key="i" class="line">
        <!-- full name -->
        <div class="link">
          <router-link class="link_router" :to="{ name: 'SeeCompany' }">
            <div>
              {{ fullName(employee.name.firstName, employee.name.lastName) }}
            </div>
          </router-link>
        </div>

        <!-- trade -->
        <div v-if="employee.trade" class="link">
          <router-link class="link_router" :to="{ name: 'SeeCompany' }">
            <div>
              {{ trade(employee.trade) }}
            </div>
          </router-link>
        </div>
        <div v-else class="link">
          <router-link class="link_router" :to="{ name: 'SeeCompany' }">
            <div>
              Ajouter un metier
            </div>
          </router-link>
        </div>

        <!-- role -->
        <div class="link">
          <div>
            {{ role(employee.role.libelle) }}
          </div>
        </div>

        <!-- sector -->
        <div v-if="employee.sector" class="link">
          <div>
            {{ sector(employee.sector.libelle) }}
          </div>
        </div>
        <div v-else class="link">
          <router-link class="link_router" :to="{ name: 'SeeCompany' }">
            <div>
              Ajouter un secteur
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="line">
      <div>
        <p>Aucun salarié</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "../../../../lib/services";

export default {
  name: "CompanySelectedEmployees",
  props: {
    employeesCompanySelected: Array,
    currentUser: Object,
  },
  computed: {
    //full name with new format
    fullName() {
      return (firstName, lastName) => `${Services.upperFirstLetter(firstName)} ${Services.upperFirstLetter(lastName)}`;
    },

    //trade with first letter uppercase
    trade() {
      return (trade) => `${Services.upperFirstLetter(trade)}`;
    },

    //role with first letter uppercase
    role() {
      return (role) => `${Services.upperFirstLetter(role)}`;
    },

    //sector with first letter uppercase
    sector() {
      return (sector) => `${Services.upperFirstLetter(sector)}`;
    },
  },
  methods: {},
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
.line div:nth-child(4) {
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
