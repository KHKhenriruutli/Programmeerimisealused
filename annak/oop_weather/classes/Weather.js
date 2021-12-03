class Weather {
    constructor(city) {
        this.city = city;
        this.key = "03823a78df5346d0ed2372582120a2ff";

    }
    async getWeather() {
        const response = fetch("https://api.openweathermap.org/data/2.5/weather?q="+(this.city)+"&appid="+(this.key));
        const responseData = (await response).json();
        return responseData;

    }

    changecity(city) {
        this.city = city;
    }
}