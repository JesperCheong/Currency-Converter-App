// available currencies can be changed in isolated js file
import { currenciesCode, addOptionToDropdown } from "./currencies-code.js";
import { conversionRates } from "./fetch.js";

window.convertV2 = function convertV2(currency1, currency2, amount, display) {
  console.log("change");
  const fromAmount = Number(amount.value);
  const fromCurrency = currency1.value;
  const toCurrency = currency2.value;

  if (fromAmount && fromAmount >= 0) {
    const firstRate = conversionRates[fromCurrency];
    const secondRate = conversionRates[toCurrency];
    const convertedAmount = fromAmount * secondRate / firstRate;
    display.value = convertedAmount.toFixed(2);
    exchangeRateDisplay();
  } else {
    display.value = "";
  }

}

function exchangeRateDisplay() {
  // 1 USD = 4.75 MYR
  const currencyInfo = document.getElementById("currencyInfo");
  const infoIcon = document.getElementById("infoIcon");
  const rate = conversionRates[secondDropdownV2.value] / conversionRates[firstDropdownV2.value]; 
  
  currencyInfo.innerText = `1 ${firstDropdownV2.value} = ${rate.toFixed(2)} ${secondDropdownV2.value}`
  infoIcon.classList.remove("d-none");
}

window.firstAmountInputV2 = document.getElementById("firstInputV2");
window.secondAmountInputV2 = document.getElementById("secondInputV2");
window.firstDropdownV2 = document.getElementById("firstCurrencyDropdownV2");
window.secondDropdownV2 = document.getElementById("secondCurrencyDropdownV2");

currenciesCode.forEach((currency) => {
  addOptionToDropdown(firstDropdownV2, currency, "USD");
  addOptionToDropdown(secondDropdownV2, currency, "MYR");
});

convertV2(firstDropdownV2, secondDropdownV2, firstAmountInputV2, secondAmountInputV2);