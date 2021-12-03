class LS {
    constructor() {
        this.defaultcity = "Tallinn";
        this.city;
    }
    getcitydata() {
        if(localStorage.getItem("city") === null) {
            this.city = this.defaultcity;
        }
        else {
            this.city = localStorage.getItem("city");
        }
        return this.city;
    }
    setcitydata(city) {
        localStorage.setItem("city", city);
    }
}