const apiKey = "76bc6ef7bb24b31bb5751cb8edc8bb6e";
const cityName = "jamshedpur";
const units = "metric";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

async function checkWeather() {
  const res = await fetch(apiUrl);
  let data = await res.json();
  console.log("apidata", data);
  document.querySelector(".city").innerHTML = data?.name;
  const spanElement = document.querySelector(".temp span");
  spanElement.textContent = data?.main?.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
}

checkWeather();
