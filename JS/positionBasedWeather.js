if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sendPosition);
} else {
  alert("Geolocation is not supported by this browser.");
}
async function sendPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  // console.log(latitude + "  " + longitude);
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
  );
  let Weatherdata = await response.json();
  let weatherDesc = Weatherdata.weather[0].description;
  let degree = Math.floor(Weatherdata.main.temp);
  let currentTime = new Date().getHours();
  
  if (currentTime >= 6 && currentTime <= 19) {
      if (weatherDesc === "clear sky") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/sunny.svg"
          );
      } else if (weatherDesc == "few clouds") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/cloudy-weather.svg"
          );
      } else if (
        weatherDesc == "few clouds" ||
        weatherDesc == "broken clouds"
      ) {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (weatherDesc == "shower rain") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (weatherDesc == "rain") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/rainy-sunny.svg"
          );
      } else if (weatherDesc == "thunderstorm") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (weatherDesc == "snow" || weatherDesc == "mist") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    } else {
      if (weatherDesc === "clear sky") {
        document
          .getElementsByClassName("quyosh")[0]
          .setAttribute("src", "assets/weatherConditions/moon.svg");
      } else if (weatherDesc == "few clouds") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (
        weatherDesc == "few clouds" ||
        weatherDesc == "broken clouds"
      ) {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (weatherDesc == "shower rain") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (weatherDesc == "rain") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/rain-night.svg"
          );
      } else if (weatherDesc == "thunderstorm") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (weatherDesc == "snow" || weatherDesc == "mist") {
        document
          .getElementsByClassName("quyosh")
          [0].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    }
  







        document.getElementsByClassName("g23")[0].innerHTML = Math.floor(degree);
        document.getElementById('description').innerHTML =  weatherDesc.toUpperCase();
        document.getElementsByClassName("bosim")[0].innerHTML = Weatherdata.main.pressure + ' ' + 'Pa' + '<br>' + 'Pressure';
        document.getElementsByClassName("namlik")[0].innerHTML = Weatherdata.main.humidity + ' ' + '%' + '<br>' + 'Humidity';
        document.getElementsByClassName("tezlik")[0].innerHTML = Weatherdata.wind.speed + ' ' + 'M/s' + '<br>' + 'Speed';
        document.getElementsByClassName("data-container")[0].innerHTML = new Date();
}


