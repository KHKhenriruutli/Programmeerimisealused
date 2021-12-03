document.addEventListener("DOMContentLoaded", cityweather);


function weatherdatafetch(city) {
    let key = "03823a78df5346d0ed2372582120a2ff";
    /* fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`) */
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)

        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
            drawweather(data);
        })
        .catch(function() {

        })
}

function cityweather(e) {
    weatherdatafetch("Barcelona");
}

function drawweather(data) {
    let celsius = Math.round(parseFloat(data.main.temp) - 273.15);
    let description = data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celsius;
    document.querySelector("#location").innerHTML = data.name;
}

