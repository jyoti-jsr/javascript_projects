const apiKey = "76bc6ef7bb24b31bb5751cb8edc8bb6e";
const units = "metric";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".waether-icon");

async function checkWeather(cityName = "jamshedpur") {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  const res = await fetch(apiUrl);
  let data = await res.json();
  console.log("apidata", data);
  document.querySelector(".city").innerHTML = data?.name || "Jamshedpur";
  const spanElement = document.querySelector(".temp span");
  spanElement.textContent = data?.main?.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
  console.log("weather", data?.weather[0]?.main);
  if (data?.weather[0]?.main == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (data?.weather[0]?.main == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (data?.weather[0]?.main == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (data?.weather[0]?.main == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (data?.weather[0]?.main == "Mist") {
    weatherIcon.src = "./images/mist.png";
  } else if (data?.weather[0]?.main == "Smoke") {
    weatherIcon.src = "./images/smoke.png";
  } else if (data?.weather[0]?.main == "Haze") {
    weatherIcon.src = "./images/haze.png";
  }
}
// checkWeather();
searchButton.addEventListener("click", () => checkWeather(searchBox.value));

async function getCityName(latitude, longitude) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const res = await fetch(apiUrl);
  let data = await res.json();
  if (data?.name) {
    checkWeather(data?.name);
  }
}

function getGeolocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    getCityName(latitude, longitude);
  });
}
getGeolocation();
