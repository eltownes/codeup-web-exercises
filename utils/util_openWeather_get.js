"use strict";


// for dev testing
// async function _getForecast(latLng){
//     return await getData("./js/weather-data1.json");
// }


async function getForecast(lnglat) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?"+
        `lat=${lnglat[1]}&lon=${lnglat[0]}`+
        `&appid=${apiKey_openWeather}&units=imperial`;
    return await getData(url);
}
