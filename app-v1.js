// available currencies can be changed in isolated js file
import { currenciesCode, addOptionToDropdown } from "./currencies-code.js";
import { conversionRates } from "./fetch.js";

window.convert = function convert() {
  const amount = Number(amountInput.value);
  const fromCurrencyV1 = fromDropdownV1.value;
  const toCurrencyV1 = toDropdownV1.value;

  if (amount && amount > 0) {
    console.log(amount);
    const fromRate = conversionRates[fromCurrencyV1];
    const toRate = conversionRates[toCurrencyV1];
    const convertedAmount = amount * toRate / fromRate;
    result1.innerText = `${amount.toFixed(2)} ${fromCurrencyV1} = ${convertedAmount.toFixed(2)} ${toCurrencyV1}`;
  } else {
    alert("Please enter a valid amount.");
  }
}

window.reset = function reset() {
  document.getElementById("amountInput").value = 1;
  fromDropdownV1.value = "USD";
  toDropdownV1.value = "MYR";
  convert();
}


const amountInput = document.getElementById("amountInput");
const result1 = document.getElementById("result1");
const fromDropdownV1 = document.getElementById("fromCurrencyDropdownV1");
const toDropdownV1 = document.getElementById("toCurrencyDropdownV1");

currenciesCode.forEach((currency) => {
  addOptionToDropdown(fromDropdownV1, currency, "USD");
  addOptionToDropdown(toDropdownV1, currency, "MYR");
});
convert();