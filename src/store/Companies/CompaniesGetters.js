export default {
  companies: (state) => state.companies,
  referentOfCompanies: (state) => state.referentOfCompanies,
  tabHomeCompanies: (state) => {
    const newTabCompanies = [];
    //compare the tables and if the id matches we add in a new table an object
    //which contains two "company, referent" objects
    for (const company of state.companies) {
      for (const referent of state.referentOfCompanies) {
        if (referent) {
          if (referent.company._id === company._id) {
            const object = { company, referent };
            newTabCompanies.push(object);
          }
        }
      }
    }
    //the company that does not have a referrer, we create the referrer object with simple text
    for (const company of state.companies) {
      const foo = newTabCompanies.find((el) => el.company._id === company._id);
      if (!foo) {
        const object = {
          company,
          referent: {
            name: { firstName: "Ajouter un référent", lastName: "" },
          },
        };
        newTabCompanies.push(object);
      }
    }
    //format text in tab newTabCompanies
    for (const item of newTabCompanies) {
      item.company.name = item.company.name.charAt(0).toUpperCase() + item.company.name.slice(1);
      item.company.filliale = item.company.filliale.charAt(0).toUpperCase() + item.company.filliale.slice(1);

      item.referent.name.firstName =
        item.referent.name.firstName.charAt(0).toUpperCase() + item.referent.name.firstName.slice(1);
      item.referent.name.lastName =
        item.referent.name.lastName.charAt(0).toUpperCase() + item.referent.name.lastName.slice(1);
    }
    return newTabCompanies;
  },
  errors: (state) => state.errors,
};
