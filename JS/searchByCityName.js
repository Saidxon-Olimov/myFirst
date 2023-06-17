async function getWeeklyWeather(event){

    let cityName = event.target.value;
    let request = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e6a66a41d8d76995e74a48aa324c2854&units=metric`)

    window.location.replace('rezultat.html');
}