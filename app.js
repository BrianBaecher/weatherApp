//weather API key c56add992ea90b9f5e20730ef9a5cc87
const API = "c56add992ea90b9f5e20730ef9a5cc87";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

let writeCityName = document.getElementById("cityName");
let currWeather = document.getElementById("weather");
let temp = document.getElementById("temp");
let feel = document.getElementById("feel");
let humidity = document.getElementById("humidity");
let header = document.getElementById("header");
let searchInput = document.getElementById("citySearch");
let form = document.getElementById("form");
let input = document.getElementById("citySearch");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let search = input.value;
  fetch(`${WEATHER_URL}?q=${search}&appid=${API}&units=imperial`)
    .then((res) => {
      return res.json();
    })
    .then((weatherData) => {
      if (weatherData.cod == "404") {
        console.log("ree");
        cityName.textContent = "Unable to find your city, check the spelling and try again";
      } else {
        console.log(weatherData);
        cityName.textContent = `${weatherData.name}`;
        currWeather.textContent = `${weatherData.weather[0].description}`;
        temp.textContent = `${weatherData.main.temp}`;
        feel.textContent = `${weatherData.main.feels_like}`;
        humidity.textContent = `${weatherData.main.humidity}`;
      }
    })
    .catch((err) => console.error(err));
});
