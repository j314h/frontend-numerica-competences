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

        <!-- trade exist in company-->
        <div v-if="trades.length > 0">
          <div v-if="employee.trade && employee.trade.libelle" class="link">
            <div>
              {{ trade(employee.trade.libelle) }}
            </div>
          </div>
          <div v-else class="box_add_metier">
            <v-select
              @input="updateTradeOfEmployee($event, employee._id)"
              class="select_trades stm-r"
              :options="listTrades"
              v-model="employee.trade"
            ></v-select>
          </div>
        </div>
        <!-- if not trade exist in campany -->
        <div v-else>
          <div class="link">
            <router-link class="link_router box_create_metier" :to="{ name: 'SeeCompanyCreateFileWork' }">
              <div>
                Creer un métier
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#f84210" />
                </svg>
              </div>
            </router-link>
          </div>
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
          <div>
            Aucun secteur
          </div>
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
      return (firstName, lastName) => `${Services.upperFirstLetter(firstName)} ${Services.upperFirstLetter(lastName)}`;
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
.box_add_metier {
  display: flex;
  align-items: center;
  color: #f84210;
}
.box_add_metier svg {
  margin-left: 20px;
  cursor: pointer;
}
.box_create_metier {
  display: flex;
  align-items: center;
  color: #f84210;
}
.box_create_metier div svg {
  margin-left: 10px;
}
.select_trades {
  height: fit-content;
}
.add_trade:hover {
  cursor: pointer;
}
</style>
