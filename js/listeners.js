const API = "c56add992ea90b9f5e20730ef9a5cc87";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
import { writeInfo, clearInfo, searchHistory } from "./functions.js";
let histArr = [];
export function searchListener() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("citySearch");

    let search = input.value;
    fetch(`${WEATHER_URL}?q=${search}&appid=${API}&units=imperial`)
      .then((res) => {
        return res.json();
      })
      .then((weatherData) => {
        if (weatherData.cod === "404" || weatherData.cod === "400") {
          console.log("404");
          cityName.textContent =
            "Unable to find your city, check the spelling and try again";
          clearInfo();
        } else (writeInfo(weatherData),
        searchHistory(weatherData));
        
      })
      .catch((err) => console.error(err));
    input.value = "";
  });
}
