"use strict"

// Chart.js
// https://www.chartjs.org/docs/latest/


// init on first load
let userSel = "temp";

// holds the custom data for 'weatherChart'
let chartData = [];
let labels = [];
let metric = [];

// plots the line chart
let weatherChart;


// metric selector
document.querySelector("#metric").addEventListener("input", metricEv);
async function metricEv() {
    await createChart(forecastObj);
}


async function createChart(forecastObj) {
    await parseData(forecastObj);
    await plotCharts();
}


// abstraction may not be necessary
const metricPath = {
    "temp": "['main']['temp']",
    "pressure": "['main']['pressure']",
    "humidity": "['main']['humidity']",
    "wind speed": "['wind']['speed']"
};
async function parseData(forecastObj) {
    // always reset the chart's data
    chartData = [];
    labels = [];
    metric = [];

    userSel = document.querySelector("#metric").value;
    let urlDataPath = metricPath[userSel];

    // build the data for the chart
    forecastObj.list.forEach(el => {
        let label= el["dt_txt"].substring(11, el["dt_txt"].length - 6);
        if (parseInt(label) === 0) {
            labels.push(el["dt_txt"].substring(5,  el["dt_txt"].length - 9) + "  - -");
        } else {
            labels.push(label);
        }
        metric.push(eval(`el${urlDataPath}`));
    });

    // object for the chart
    chartData = {
        "labels": labels,
        "metric": metric
    };
}


async function plotCharts() {

    // only 1 chart per canvas allowed
    if (weatherChart) {
        weatherChart.destroy();
    }

    let data = {
        labels: chartData.labels,
        datasets: [{
            label: userSel,
            data: chartData.metric,
            fill: false,
        }]
    };

    let config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
        }
    };

    let ctx = document.querySelector("#chart");
    weatherChart = new Chart(ctx, config);
}


// mouse double click on chart - calculate the x-axis value
document.querySelector("#chart").addEventListener("dblclick", mouseDouble);

function mouseDouble(ev) {
    let firstX = parseFloat(weatherChart.scales.x.left) + parseFloat(weatherChart.scales.x.paddingLeft);
    let lastX = parseFloat(weatherChart.scales.x.right) + parseFloat(weatherChart.scales.x.paddingRight);

    let gridScale = (lastX - firstX) / (chartData.labels.length - 1);
    let xAxisIndex = Math.round((ev.clientX - firstX) / gridScale);

    // timeout functionality here due to previous 'fade' functionality which required
    // modal to be visible before adjusting parameters
    setTimeout(() => {
        document.querySelector(".btn-primary").click();
    }, 0);

    setTimeout(() => {
        document.querySelector("#chartRange").value = xAxisIndex;
        range(xAxisIndex);
    }, 0);

    // function call -
    range(xAxisIndex);
}


//  range selection
document.querySelector("#chartRange").addEventListener("click", rangeEv);

function rangeEv(ev) {
    const rangeValue = ev.target.value;
    range(rangeValue);
}

function range(rangeValue) {

    // canvas arithmetic
    const modalWidthPx = document.querySelector(".modal-body").clientWidth;
    const rangeInModalPerc = (rangeValue / (chartData.labels.length - 1));
    const rangeInModalPx = Math.round(rangeInModalPerc * modalWidthPx);

    // set modal title
    document.querySelector("#chartModalLabel")
        .innerText = forecastObj.list[rangeValue].dt_txt.substring(0, 10);

    // display the time underneath the range button
    let rangeSelDate = forecastObj.list[rangeValue].dt_txt.substring(11, 16);
    const timeElement = document.querySelector("#range-select-time");
    timeElement.innerText = rangeSelDate;
    // prep calc to center text underneath range button
    const timeWidthPx = timeElement.offsetWidth;
    let buttonLeftMarginPx = rangeInModalPx - (timeWidthPx * .5);

    // valid range check to prevent text spilling beyond the margins
    if (rangeInModalPx < timeWidthPx) {
        buttonLeftMarginPx = 0;
    } else if (rangeInModalPx > modalWidthPx - timeWidthPx) {
        buttonLeftMarginPx = modalWidthPx - timeWidthPx;
    } else {
        // all good;
    }

    // center text underneath range button
    document.querySelector("#range-select-time").style.marginLeft = `${buttonLeftMarginPx}px`;

    // build the modal body
    // pic
    let iconName = forecastObj.list[rangeValue]["weather"][0].icon;
    document.querySelector("#modal-pic").innerHTML =
        `<img src="./images/ow${iconName}.png">`;
    document.querySelector("#table-temp").innerText =
        Math.round(parseFloat(forecastObj.list[rangeValue]["main"]["temp"]));
    document.querySelector("#table-wind-speed").innerText =
        Math.round(parseFloat(forecastObj.list[rangeValue]["wind"]["speed"]));
    document.querySelector("#table-humidity").innerText = forecastObj.list[rangeValue]["main"]["humidity"];
    document.querySelector("#table-pressure").innerText = forecastObj.list[rangeValue]["main"]["pressure"];
    document.querySelector("#table-description").innerText =
        forecastObj.list[rangeValue]["weather"][0]["description"];
}


// arrows
document.querySelector("#arrow-left").addEventListener("click", arrowLeft);
document.querySelector("#arrow-right").addEventListener("click", arrowRight);

function arrowLeft() {
    let rangeValue = parseInt(document.querySelector("#chartRange").value) - 1;
    document.querySelector("#chartRange").value = rangeValue;
    range(rangeValue);
}

function arrowRight() {
    let rangeValue = parseInt(document.querySelector("#chartRange").value) + 1;
    document.querySelector("#chartRange").value = rangeValue;
    range(rangeValue);
}
