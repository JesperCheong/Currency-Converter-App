export function convertCurrency(currencyInput1, currencyInput2, amountInput) {
  const fromAmount = Number(amountInput.value);
  const fromCurrency = currencyInput1.value;
  const toCurrency = currencyInput2.value;

  const firstRate = conversionRates[fromCurrency];
  const secondRate = conversionRates[toCurrency];
  
  return fromAmount * secondRate / firstRate;
}

