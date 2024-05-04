// any changes to api key can be done in isolated js file
import {apiKey} from "./api-key.js";

async function fetchRate() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    const data = await response.json();
    if (data.result === "success") {
      console.log("data fetched from API");
      // store data from api in local storage
      // data from api will only update once a day, no need to keep fetch same data
      localStorage.setItem("conversionData", JSON.stringify(data.conversion_rates));
      localStorage.setItem("nextUpdateData", data.time_next_update_utc);
      return data.conversion_rates;
    } else if (data.result === "error") {
      console.log(data["error-type"]);
      alert(data["error-type"]);
    }

  } catch (error) {
    console.log(error);
    alert(error);
  }
}

async function initialize() {
  // fetch data if
  // 1. (update time/conversion rate) is not found in local storage
  // 2. data is expired
  const nextAPIUpdateTime = localStorage.getItem("nextUpdateData");
  let conversionRates = JSON.parse(localStorage.getItem("conversionData"));
  if (!nextAPIUpdateTime || !conversionRates || new Date(nextAPIUpdateTime) < new Date()) {
    conversionRates = await fetchRate();
    console.log("data from api", conversionRates)
  } else {
    console.log("data from local storage", conversionRates)
  }

  return conversionRates;
}

export const conversionRates = await initialize();