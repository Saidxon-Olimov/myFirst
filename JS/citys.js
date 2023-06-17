async function sendCity() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=hazorasp&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata = await response.json();
    let degree = Math.floor(Weatherdata.main.temp);
    let obhavoTarifi = Weatherdata.weather[0].description;
    document.getElementsByClassName("shahar-gradus")[0].innerHTML = degree;
    document.getElementsByClassName("korsatgich")[0].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(0, obhavoTarifi);
  }
  
  sendCity();
  
  async function sendCity2() {
    let response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=moskva&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata2 = await response2.json();
    let degree2 = Math.floor(Weatherdata2.main.temp);
    let obhavoTarifi = Weatherdata2.weather[0].description;
    console.log("Paris:::" + response2);
    document.getElementsByClassName("shahar-gradus")[1].innerHTML = degree2;
    document.getElementsByClassName("korsatgich")[1].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(1, obhavoTarifi);
  }
  
  sendCity2();
  
  async function sendCity3() {
    let response3 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=seul&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata3 = await response3.json();
    let degree3 = Math.floor(Weatherdata3.main.temp);
    let obhavoTarifi = Weatherdata3.weather[0].description;
    document.getElementsByClassName("shahar-gradus")[2].innerHTML = degree3;
    document.getElementsByClassName("korsatgich")[2].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(2, obhavoTarifi);
  }
  
  sendCity3();
  
  async function sendCity4() {
    let response4 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let Weatherdata4 = await response4.json();
    let degree4 = Math.floor(Weatherdata4.main.temp);
    let obhavoTarifi = Weatherdata4.weather[0].description;
    document.getElementsByClassName("shahar-gradus")[3].innerHTML = degree4;
    document.getElementsByClassName("korsatgich")[3].innerHTML = obhavoTarifi;
    iconOzgartiruvchi(3, obhavoTarifi);
  }
  
  sendCity4();
  
  // shahar ob havo tarifini korsatuvchi iconni ozgartirish kodi

  
  
function iconOzgartiruvchi(shaharIndeksi, obhavoTarifi) {
    let currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime <= 19) {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/sunny.svg"
          );
      } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloudy-weather.svg"
          );
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/rainy-sunny.svg"
          );
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    } else {
      if (obhavoTarifi === "clear sky") {
        document
          .getElementsByClassName("shahar-img")[shaharIndeksi]
          .setAttribute("src", "assets/weatherConditions/moon.svg");
      } else if (obhavoTarifi == "few clouds") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (
        obhavoTarifi == "few clouds" ||
        obhavoTarifi == "broken clouds"
      ) {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/cloud.svg"
          );
      } else if (obhavoTarifi == "shower rain") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/storm.svg"
          );
      } else if (obhavoTarifi == "rain") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/rain-night.svg"
          );
      } else if (obhavoTarifi == "thunderstorm") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/thunder.svg"
          );
      } else if (obhavoTarifi == "snow" || obhavoTarifi == "mist") {
        document
          .getElementsByClassName("shahar-img")
          [shaharIndeksi].setAttribute(
            "src",
            "assets/weatherConditions/snow.svg"
          );
      }
    }
  }

