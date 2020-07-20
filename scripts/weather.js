const cityForm =document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

    const cityDeets = data.cityDeets;
    const weather = data.weather;

    details.innerHTML = `
        <h5 class="my-3">${cityDeets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;


    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);


    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };



};


const updateCity = async (city) => {

    const cityDeets = await getCity(city);
    const weather = await getWeather(cityDeets.Key);

    return {
        cityDeets: cityDeets,
        weather: weather
    };
};



cityForm.addEventListener('submit', e => {
    e.preventDefault();


    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});