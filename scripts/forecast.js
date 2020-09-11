class Forecast{
    constructor(){
        this.key = 'JDosxg60LXAEf7GBReOIOE5cWuRUO5Zu'
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI =  'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDeets = await this.getCity(city);
        const weather = await this.getWeather(cityDeets.Key);
        return { cityDeets, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}

const addForm = document.querySelector('.compass');

addForm.addEventListener('click', e => {
    e.preventDefault();
    console.log('The code has run');
})
