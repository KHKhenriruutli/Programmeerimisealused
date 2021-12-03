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
        })
        .catch(function() {

        })
}

function cityweather(e) {
    weatherdatafetch("Barcelona");
}

