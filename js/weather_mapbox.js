"use strict";


// clear error ?
const mapContainer = document.querySelector("#map-div");
while (mapContainer.firstChild) {
    mapContainer.removeChild(mapContainer.firstChild);
}


// init
mapboxgl.accessToken = apiKey_mapBox;
let map;
let marker;


initMap();


async function initMap() {
    let geoAddress = [0,0];

    map = new mapboxgl.Map({
        container: "map-div",
        style: 'mapbox://styles/mapbox/streets-v12',
        center: geoAddress,
        zoom: 1,
    });
    // init
    map.setZoom(5);

    map.addControl(new mapboxgl.NavigationControl());

    marker = new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat(geoAddress)
        .addTo(map);

    function onDragEnd() {
        let lngLat = marker.getLngLat();
        markerChange([lngLat.lng,lngLat.lat]);
    }

    marker.on('dragend', onDragEnd);
}

