if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sendPosition2);
} else {
  alert("Geolocation is not supported by this browser. p");
}
async function sendPosition2(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(longitude, latitude);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
  );
  let weatherData = await response.json();
  console.log(weatherData);

  for (let i = 0; i < 5; i++) {
    let currentTime = weatherData.list[i].dt_txt.slice(11, 13)*1,time;
    let obhavoTarifi = weatherData.list[i].weather[0].description;
    if (currentTime < 12) {
      time = currentTime + " am";
      if(currentTime == 0){
        time = currentTime + '0' + ' ' + 'am'
      }
    } else {
      time = currentTime + " pm";
    }
    console.log(currentTime);
    document.getElementsByClassName("soat")[i].innerHTML = time;
    document.getElementsByClassName("soat-gradus")[i].innerHTML = Math.floor(
      weatherData.list[i].main.temp
    );
    console.log(obhavoTarifi);
    if (currentTime >= 6 && currentTime <= 19) {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/sunny.svg");
      } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute(
            "src",
            "assets/weatherConditions/cloudy-weather.svg"
          );                    
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/cloud.svg");
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/storm.svg");
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/rainy-sunny.svg");
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/thunder.svg");
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/snow.svg");
      }
    } else {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("weather-icon")[i].setAttribute('src','assets/weatherConditions/moon.svg')
        } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/cloud.svg");
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/cloud.svg");
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/storm.svg");
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/rain-night.svg");
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/thunder.svg");
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("weather-icon")
          [i].setAttribute("src", "assets/weatherConditions/snow.svg");
      }
    }
  }
}
