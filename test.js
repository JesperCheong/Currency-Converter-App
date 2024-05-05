function test() {
  const amount = document.getElementById("amountInput").value;
  /* const fromCurrency = fromDropdown.value;
  const toCurrency = toDropdown.value; */

  if (amount) {
    console.log("ok");
  } else {
    console.log("enter valid amount");
  }
}