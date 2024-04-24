const apiKey = '3242c96c90a4ea578f1f9e75d731ffeb';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weatherIcon = document.querySelector('.weather-image i');
const searchInput = document.querySelector('.search-box input');

const weather = document.querySelector('.weather');
const error = document.querySelector('.error');


async function chechWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        error.style.display = 'block'
        weather.style.display = 'none'
    }
    const data = await response.json();
    console.log(data, 'data');

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';


    if (data.weather[0].main == 'Clear') {
        weatherIcon.className = 'fa-solid fa-sun';
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.className = 'fa-solid fa-cloud-rain';
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.className = 'fa-solid fa-smog';
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.className = 'fa-solid fa-cloud-drizzle';
    } else if (data.weather[0].main == 'Snow') {
        weatherIcon.className = 'fa-solid fa-snowflake';
    } else if (data.weather[0].main == 'Smoke') {
        weatherIcon.className = 'fa-solid fa-smog';
    }

    weather.style.display = 'block'
    error.style.display = 'none'
}

const searchButton = () =>{
    chechWeather(searchInput.value);
    searchInput.value = ''
}

document.body.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        searchButton()
    }
});




