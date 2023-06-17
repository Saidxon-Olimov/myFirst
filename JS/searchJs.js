async function sendCity() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=zurich&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata = await response.json();
    let obhavoTarifi = Weatherdata.weather[0].description;
    document.getElementsByClassName("one-daraja")[0].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(0, obhavoTarifi);
  }
  
  sendCity();
  
  async function sendCity2() {
    let response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata2 = await response2.json();
    let obhavoTarifi = Weatherdata2.weather[0].description;
    document.getElementsByClassName("one-daraja")[1].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(1, obhavoTarifi);
  }
  
  sendCity2();
  
  async function sendCity3() {
    let response3 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=talin&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata3 = await response3.json();
    let obhavoTarifi = Weatherdata3.weather[0].description;
    document.getElementsByClassName("one-daraja")[2].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(2, obhavoTarifi);
  }
  
  sendCity3();
  
  async function sendCity4() {
    let response4 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata4 = await response4.json();
    let obhavoTarifi = Weatherdata4.weather[0].description;
    document.getElementsByClassName("one-daraja")[3].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(3, obhavoTarifi);
  }
  
  sendCity4();
  
  // shahar ob havo tarifini korsatuvchi iconni ozgartirish kodi

  
  
function iconOzgartiruvchi(shaharIndeksi, obhavoTarifi) {
    let currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime <= 19) {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/sunny.svg"
          );
      } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloudy-weather.svg"
          );
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/rainy-sunny.svg"
          );
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    } else {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("one-img")[shaharIndeksi]
          .setAttribute("src", "assets/weatherConditions/moon.svg");
      } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/rain-night.svg"
          );
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("one-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    }
  }

