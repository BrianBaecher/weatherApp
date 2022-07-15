export function writeInfo(weatherData) {
  if (weatherData.cod == 200) {
    console.log(weatherData);
    cityName.textContent = `${weatherData.name}`;
    currWeather.textContent = `${weatherData.weather[0].description}`;
    temp.textContent = `${weatherData.main.temp}`;
    feel.textContent = `${weatherData.main.feels_like}`;
    humidity.textContent = `${weatherData.main.humidity}`;
  }
}

export function clearInfo() {
  currWeather.textContent = ``;
  temp.textContent = ``;
  feel.textContent = ``;
  humidity.textContent = ``;
}

let currWeather = document.getElementById("weather");
let temp = document.getElementById("temp");
let feel = document.getElementById("feel");
let humidity = document.getElementById("humidity");

// export function searchHistory()

let histArr = [];
export function searchHistory(weatherData) {
  let updatedArr = histArr.push(weatherData);
  console.log(histArr);
  return histArr;
}

export function appendValidCity(e) {
  // let node = document.createElement("li");
  let btn = document.createElement("button");
  btn.id = "listButtons"
  btn.textContent = `${e.name}`;
  // node.textContent = `${e.name}`;
  // document.getElementById("recentList").appendChild(node);
  document.getElementById("recentList").appendChild(btn);
  btn.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.target.textContent)
    buttonFetcher()
  });
}

export function fetcher() {
  const API = "c56add992ea90b9f5e20730ef9a5cc87";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
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
      } else
        writeInfo(weatherData),
          searchHistory(weatherData),
          appendValidCity(weatherData);
    })
    .catch((err) => console.error(err));
  input.value = "";
}

export function buttonFetcher(){
  const API = "c56add992ea90b9f5e20730ef9a5cc87";
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
  const input = document.getElementById("listButtons").textContent;
  console.log(input)
  let search = event.target.textContent;
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
      } else
        writeInfo(weatherData);
    })
    .catch((err) => console.error(err));
}
