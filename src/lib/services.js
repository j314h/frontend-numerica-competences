export const Services = {
  //upper first letter
  upperFirstLetter: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  upperAll: (str) => {
    return str.toUpperCase();
  },

  //full name user, first name + last name
  fullName: (civ, firstName, lastName) => {
    return `${Services.upperFirstLetter(civ)} ${Services.upperFirstLetter(firstName)} ${Services.upperFirstLetter(
      lastName
    )}`;
  },

  //return all word with first letter uppercase
  manyWordFirstLetterUpper: (name) => {
    const listName = name.split(" ");
    const newName = listName.map((el) => Services.upperFirstLetter(el));
    return `${newName.join(" ")}`;
  },

  //return street with first letter uppercase and on one line
  streetOneLine: (street) => {
    return `${Services.upperFirstLetter(street)}`;
  },

  //return first letter of city a uppercase, and format on one line
  codePostCityOneLine: (codePost, city) => {
    return `${codePost} ${Services.upperFirstLetter(city)}`;
  },
};
