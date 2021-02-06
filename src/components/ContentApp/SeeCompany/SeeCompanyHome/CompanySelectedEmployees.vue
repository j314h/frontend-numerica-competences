<template>
  <div>
    <!-- ligne -->
    <div v-if="employeesCompanySelected.length > 0">
      <div v-for="(employee, i) in employeesCompanySelected" :key="i" class="line">
        <!-- full name -->
        <div class="item_line box_name_company">
          <router-link class="link_router name_company" :to="{ name: 'SeeCompany' }">
            <div class="name_company">
              <span>
                {{ fullName(employee.name.firstName, employee.name.lastName) }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f84210"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-link-2"
              >
                <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </router-link>
        </div>

        <!-- trade exist in company-->
        <div v-if="trades.length > 0" class="item_line">
          <div v-if="employee.trade && employee.trade.libelle">
            <div>
              {{ trade(employee.trade.libelle) }}
            </div>
          </div>
          <div v-else>
            Pas de métier attribué
          </div>
        </div>
        <!-- if not trade exist in campany -->
        <div v-else class="item_line">
          <div class="link">
            <router-link class="link_router box_create_metier" :to="{ name: 'SeeCompanyCreateFileWork' }">
              <div>
                Creer un métier
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#f84210" />
                </svg>
              </div>
            </router-link>
          </div>
        </div>

        <!-- role -->
        <div class="item_line">
          <div>
            {{ role(employee.role.libelle) }}
          </div>
        </div>

        <!-- sector -->
        <div v-if="employee.sector" class="item_line">
          <div>
            {{ sector(employee.sector.libelle) }}
          </div>
        </div>
        <div v-else class="item_line">
          <div>
            Aucun secteur
          </div>
        </div>
      </div>
    </div>
    <div v-else class="item_line">
      <div>
        <p>Aucun salarié</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Services } from "../../../../lib/services";
import ButtonApp from "../../../Elements/Buttons/ButtonApp.vue";
import VSelect from "../../../Elements/vue-bootstrap-select";

export default {
  name: "CompanySelectedEmployees",
  components: { VSelect, ButtonApp },
  props: {
    employeesCompanySelected: Array,
    currentUser: Object,
    trades: Array,
  },
  data() {
    return {
      data: {
        tradeInput: "Selectionner..",
      },
      assignTrade: false,
    };
  },
  computed: {
    //full name with new format
    fullName() {
      return (firstName, lastName) => `${Services.upperFirstLetter(firstName)} ${Services.upperAll(lastName)}`;
    },

    //trade with first letter uppercase
    trade() {
      return (trade) => `${Services.upperFirstLetter(trade)}`;
    },

    //list libelle of trade
    listTrades() {
      const tab = this.trades.map((el) => el.libelle);
      return ["Selectionner..", ...tab];
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
  methods: {
    //attribute trade for employee
    updateTradeOfEmployee(e, idEmployee) {
      //recover id corresponding to trade selected and create object for send api
      const { _id } = this.trades.find((el) => el.libelle === e);
      const datas = {
        data: {
          trade: { _id },
        },
        _id: idEmployee,
      };
      this.$store.dispatch("Employees/updateEmployeeCompanySelected", datas);
    },
  },
};
</script>

<style></style>
