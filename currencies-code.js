import {conversionRates} from "./fetch.js";
export const currenciesCode = Object.keys(conversionRates).sort();

// function to add currency options to dropdown 
export function addOptionToDropdown(dropdown, item, defaultOption) {
  const option = document.createElement("option");
  option.value = item;
  option.innerText = item;
  // select default option for dropdown
  if (item === defaultOption) {
    option.selected = true;
  }
  dropdown.add(option);
}
