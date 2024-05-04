// available currencies can be changed in isolated js file
import {currenciesCode} from "./currencies-code.js";
import {conversionRates} from "./fetch.js";

// function to add currency options to dropdown 
function addOptionToDropdown(dropdown, item, defaultOption) {
  const option = document.createElement("option");
  option.value = item;
  option.innerText = item;
  // select default option for dropdown
  if (item === defaultOption) {
    option.selected = true;
  }
  dropdown.add(option);
}

const fromDropdown = document.getElementById("fromCurrencyDropdown");
const toDropdown = document.getElementById("toCurrencyDropdown");

currenciesCode.forEach((currency)=>{
  addOptionToDropdown(fromDropdown, currency, "USD");
  addOptionToDropdown(toDropdown, currency, "MYR");
});
/* // set default option to dropdown
fromDropdown.value = "USD";
toDropdown.value = "MYR"; */