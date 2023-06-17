async function getWeeklyWeather(event) {
    document.getElementById('search').remove();
    let bunchOfHtml = `<div class="wrapper-container">
    <div class="wrapper">
        <div class="header-container">

            <a href="search.html">
                <div class="header-menu">
                    <img src="assets/arrow-left-thin.svg" alt="" class="menu-bar">
                </div>
            </a>

            <div class="search-input-container">
              <div class="search-icon">
                  <img class="s-icon" src="assets/Vector.svg" alt="">
              </div>

              <input placeholder="Search for City" class="search-input" type="text">
              
              <div class="gps">
                  <img class="gps-icon" src="assets/Location on.svg" alt="">
              </div>
          </div>

            

        </div>

        <div class="toliq-malumot-container">
            <div class="icon-search-container">
                <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="icon-img">
                <div class="gradus-toliq">

                    <div class="max-temp">
                        23
                    </div>
                    <img class="ellipse1" src="assets/Ellipse 1.svg" alt="">

                    <div class="slesh">/</div>

                    <div class="min-temp">
                        17
                    </div>
                    <img class="ellipse2" src="assets/Ellipse 1.svg" alt="">
                </div>
            </div>

            <div class="toliq-malumot">
              <div class="zonik">
                <div class="zontik-icon icon-animation">
                  <img src="assets/insurance 1.svg" alt="" />
                </div>
                <div class="zontik-text bosim">
                  30% <br />
                  Precipitation
                </div>
              </div>
  
              <div class="zonik">
                <div class="zontik-icon icon-animation2">
                  <img src="assets/insurance 1 (1).svg" alt="" />
                </div>
                <div class="zontik-text namlik">
                  20% <br />
                  Humidity
                </div>
              </div>
  
              <div class="zonik p-none">
                <div class="zontik-icon icon-animation3">
                  <img src="assets/insurance 1 (2).svg" alt="" />
                </div>
                <div class="zontik-text tezlik">
                  9km/h <br />
                  Wind Speed
                </div>
              </div>
            </div>
          </div>

          <div class="days-container">
            
            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

            <div class="mon-con">
              
              <div class="uch">

                <div class="day-name">
                  Monday
                </div>

                <div class="day-icon">
                  <img src="assets/weatherConditions/cloudy-weather.svg" alt="" class="d-icon">
                </div>

                
              </div>

              <div class="grd"> 

                <div class="day-desc">
                  Sunny
                </div>

                <div class="ikki-temp">
                  <div class="min-con">
                    <div class="day-temp-min">
                      +31
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-el">
                  </div>

                  <div class="max-con">
                    <div class="day-temp-max">
                      +51
                    </div>
  
                    <img src="assets/Ellipse 1.svg" alt="" class="temp-ell">
                  </div>
                </div>

              </div>

            </div>

          </div>

    </div>
</div>
    `;
    // rezultat sahifasini qoshadon kod
    let div = document.getElementById('rezultat');
    div.insertAdjacentHTML("afterend", bunchOfHtml);
  
  //   sorov yuvarimiz apiya qidiruvda yazilgan shahar nomi boyicha
  
    let cityName = event.target.value;
    
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`
    );
    let responseObj = await response.json();
    let arrLength = responseObj.list.length;
    let indexDayName = 0;
    for (let i = 2; i < arrLength; i = i + 8) {
      let date = responseObj.list[i].dt_txt;
      let description = responseObj.list[i].weather[0].description;
      document.getElementsByClassName("day-name")[indexDayName].innerHTML = date;
      document.getElementsByClassName('day-desc')[indexDayName].innerHTML = description;
      indexDayName++;
    }
  
  }
  