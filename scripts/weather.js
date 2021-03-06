const cityForm =document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUI = (data) => {

    const cityDeets = data.cityDeets;
    const weather = data.weather;

    details.innerHTML = `
        <h5 class="my-3 text-light">${cityDeets.EnglishName}</h5>
        <div class="my-3 text-light">${weather.WeatherText}</div>
        <div class="display-4 my-4 text-light">
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


cityForm.addEventListener('submit', e => {
    e.preventDefault();


    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});