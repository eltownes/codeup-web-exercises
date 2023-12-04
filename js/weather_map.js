"use strict";


let forecastObj;


document.querySelector("#find").addEventListener("click", processUserInput_Ev);


// initialize the weather_map
extractLatLng( document.querySelector("#place").value );


// User form
async function processUserInput_Ev(ev) {
    ev.preventDefault();

    const address = document.querySelector("#place").value;
    await extractLatLng(address);
}


function markerChange(lngLat) {
    extractLatLng(lngLat);
}


async function extractLatLng(userInput) {
    // ensure we have a lng lat
    let lngLat;
    if ( typeof userInput === "string") {
        lngLat = await geocode(userInput, apiKey_mapBox);
    } else {
        lngLat = userInput;
    }
    await processLatLng(lngLat);
}


// with a lat lng --> get the forecast
async function processLatLng(lnglat) {
    forecastObj = await getForecast(lnglat);
    document.querySelector("#place").value = forecastObj.city.name;
    document.querySelector("#navbar-city").innerText = forecastObj.city.name;
    await createChart(forecastObj);
    followMarker(lnglat);
}


function followMarker(latlng) {
    let mapZoom = map.getZoom();
    map.flyTo({
        center: latlng,
        zoom: mapZoom,
    });
    marker.setLngLat(latlng);
}
