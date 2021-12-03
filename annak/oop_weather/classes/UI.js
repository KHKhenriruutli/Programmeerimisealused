class UI {
    constructor() {
        this.description = document.querySelector("#description");
        this.temp = document.querySelector("#temp");
        this.location = document.querySelector("#location");
    }

    drawweather(data) {
        let celsius = Math.round(parseFloat(data.main.temp) - 273.15);
        let description = data.weather[0].description;

        this.description.innerHTML = description;
        this.temp.innerHTML = celsius;
        this.location.innerHTML = data.name;
    }
}