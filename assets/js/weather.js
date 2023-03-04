
import { weather_data } from './data.js';

let varCiudades = new Map();
let [var_gye, ...otrasCiudades] = weather_data;
let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week} = var_gye;

let loadDayForecastData = () => {
	
    let elementCity = document.getElementById ("city");
    elementCity.innerHTML = city;

    let elementDate = document.getElementById ("date");
    elementDate.innerHTML = date;

    let elementMaxTemp = document.getElementById ("maxtemperature");
    elementMaxTemp.innerHTML = maxtemperature;

    let elementMinTemp = document.getElementById ("mintemperature");
    elementMinTemp.innerHTML = mintemperature;

    let elementCloudiness = document.getElementById ("cloudiness");
    elementCloudiness.innerHTML = cloudiness;

    let elementWind = document.getElementById ("wind");
    elementWind.innerHTML = wind;

    let elementRainfall = document.getElementById ("rainfall");
    elementRainfall.innerHTML = rainfall;


    //====== LATE ======
    let {text: late_text, temperature: late_temperature, forecast: late_forecast, icon: late_icon} = forecast_today[0];

    let elementLate_icon = document.getElementById ("late_icon");
    elementLate_icon.innerHTML = late_icon;

    let elementLate_temperature = document.getElementById ("late_temperature");
    elementLate_temperature.innerHTML = late_temperature;

    let elementLate_forecast = document.getElementById ("late_forecast");
    elementLate_forecast.innerHTML = late_forecast;

    let elementLate_text = document.getElementById ("late_text");
    elementLate_text.innerHTML = late_text;


    //====== NIGHT ======
    let {text: night_text, temperature: night_temperature, forecast: night_forecast, icon: night_icon} = forecast_today[1];

    let elementNight_icon = document.getElementById ("night_icon");
    elementNight_icon.innerHTML = night_icon;
  
    let elementNight_temperature = document.getElementById ("night_temperature");
    elementNight_temperature.innerHTML = night_temperature;
  
    let elementNight_forecast = document.getElementById ("night_forecast");
    elementNight_forecast.innerHTML = night_forecast;
  
    let elementNight_text = document.getElementById ("night_text");
    elementNight_text.innerHTML = night_text;
  
}

let loadWeekForecastData = () => {
	
    let {day, text, date, temperature , icon} = forecast_week[0];
    let {min, max} = temperature;

    let elementForeCastWeek = document.getElementsByClassName ("list-group");
    elementForeCastWeek[0].innerHTML = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
      <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
  </li>`  
    	
} 

 function cargarCiudades (){
   for (let ciudad in weather_data){
     varCiudades.set(ciudad,weather_data[ciudad].city);
   }
   console.log(varCiudades);
   console.log(varCiudades.get('1'));
 }


document.addEventListener("DOMContentLoaded", () => {
  loadDayForecastData();
  cargarCiudades();
  let btn = document.getElementById('loadinfo');
  btn.addEventListener('click', () => {
       loadWeekForecastData(); })
});



 
//console.log(weather_data[2].city);