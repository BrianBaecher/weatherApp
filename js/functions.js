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


