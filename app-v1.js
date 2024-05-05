// available currencies can be changed in isolated js file
import { currenciesCode } from "./currencies-code.js";
import { conversionRates } from "./fetch.js";

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

function convert() {
  const amount = Number(document.getElementById("amountInput").value);
  const result1 = document.getElementById("result1"); 
  const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value;
  
  if (amount && amount > 0) {
    const fromRate = conversionRates[fromCurrency];
    const toRate = conversionRates[toCurrency];
    const convertedAmount = amount * toRate / fromRate;
    result1.innerText = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } else {
    alert("Please enter a valid amount.");
  }
}

const fromDropdown = document.getElementById("fromCurrencyDropdown");
const toDropdown = document.getElementById("toCurrencyDropdown");

currenciesCode.forEach((currency) => {
  addOptionToDropdown(fromDropdown, currency, "USD");
  addOptionToDropdown(toDropdown, currency, "MYR");
});
//function in onclick is not scoped globally due to module
window.convert = convert;
convert();