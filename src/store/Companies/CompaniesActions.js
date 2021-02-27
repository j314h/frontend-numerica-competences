import Vue from "vue";
import store from "../index";
import router from "../../router";
import { headers } from "../../lib/axios.config";

export default {
  //recover all companies of user connected
  async getAllCompaniesAdmin(context) {
    try {
      //reset error
      store.commit("Error/resetError");

      //call api for get comapnies of user connected
      const data = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}companies-admin`);

      //add companies of user connected
      context.commit("addAllCompaniesUserConnected", data.data.companies);
      store.commit("Employees/addEmployeesReferentCompaniesAdmin", data.data.tabReferent);
    } catch (error) {
      store.commit("Error/addError", error);
    }
  },

  //get company selected and users of company
  async getCompanySelected(context, idCompany) {
    try {
      //see page loading and reset error
      //store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for recover company selected and users of company selected
      const company = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${idCompany}`);
      const usersCompany = await Vue.axios.get(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}users/${idCompany}`);

      //add company in store and recover and add sectors of company selected
      context.commit("addCompanySelected", company.data);
      store.commit("Employees/addEmployeeCompanySelected", usersCompany.data);
      //store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      //store.commit("Loading/stateLoading", false);
    }
  },

  //update company selected
  async updateCompanySelected(context, companyData) {
    try {
      //see page loading and reset error
      store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for update user, juste user root admin referent
      const company = await Vue.prototype.$http.post(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company-update`,
        companyData,
        headers
      );

      //create and update sector of company
      if (companyData.newSectors.length > 0) {
        await store.dispatch("Sectors/createSectorsCompanySelected", companyData);
      }
      if (companyData.sectors.length > 0) {
        await store.dispatch("Sectors/updateSectorsCompanySelected", companyData);
      }

      //add update company in store and disable page loading
      context.commit("addCompanySelected", company.data);
      store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      store.commit("Loading/stateLoading", false);
    }
  },

  //create company
  async createCompany(context, company) {
    try {
      //see page loading and reset error
      //store.commit("Loading/stateLoading", true);
      store.commit("Error/resetError");

      //call api for create company
      await Vue.axios.post(`${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company-create`, company, headers);

      //reload comapnies of user connected and disable page loading
      context.dispatch("getAllCompaniesAdmin");
      //store.commit("Loading/stateLoading", false);
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
      //store.commit("Loading/stateLoading", false);
    }
  },

  //delete company
  async delete(context, id) {
    try {
      //call api for delete
      const response = await Vue.axios.delete(
        `${process.env.VUE_APP_URL_API_NUMERICA_COMPETENCE}company/${id}`,
        headers
      );
      if (!response) throw new Error("L'élement n'a pas pu etre supprimé");

      //delete company store and redirection in home
      context.commit("deleteCompaniesSelected");
      router.push({ name: "HomeDashbord" });
    } catch (error) {
      //add error in store disable page loading
      store.commit("Error/addError", error);
    }
  },
};
