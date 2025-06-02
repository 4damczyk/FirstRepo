const data = document.querySelector('.data');
const cityname = document.querySelector('.cityname');
const img = document.querySelector('.imgTemperature');
const temperature = document.querySelector('.temperature');
const feelsTemperature = document.querySelector('.feelsTemperature');
const temperatureDescription = document.querySelector('.temperatureDescription');
const humidity = document.querySelector('.humidity');
const pressure = document.querySelector('.preasure');
const windSpeed = document.querySelector('.windSpeed');

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiCity = 'Budva';
const apiKey = '&appid=130ac0aeb0b281c5e9d28035d4de6c38';
const apiUnits = '&units=metric';
const apiLang = '&lang=pl';

const checkWeather = () => {
  const URL = apiLink + apiCity + apiKey + apiUnits + apiLang;

  axios.get(URL)
    .then(response => {
      const res = response.data;
      console.log(res);

      data.textContent = `${new Date().toString().slice(4, 21)}`;
      cityname.textContent = `${res.name}, ${res.sys.country}`;
      img.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}.png`;
      temperature.textContent = `${Math.floor(res.main.temp)}°C`;
      feelsTemperature.textContent = `${Math.floor(res.main.feels_like)}°C`;
      temperatureDescription.textContent = `${res.weather[0].description}`;
      humidity.textContent = `${res.main.humidity} %`;
      pressure.textContent = `${res.main.pressure} hPa`;
      windSpeed.textContent = `${res.wind.speed} m/s`;
    })
    .catch(error => {
      console.error('Błąd podczas pobierania danych:', error);
      cityname.textContent = 'Nie udało się załadować danych pogodowych.';
    });
};

checkWeather();

const divRectangle = document.querySelector('.rectangle');
function scrollYStatus() {
  let currentScrollPosition = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
  divRectangle.style.width = currentScrollPosition + '%';
}
window.addEventListener('scroll', scrollYStatus);

const toggleButton = document.querySelector('.theme-toggle');

function toggleTheme() {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  toggleButton.textContent = theme === 'dark' ? '☀️ Tryb jasny' : '🌙 Tryb ciemny';
}

(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.theme-toggle').textContent = '☀️ Tryb jasny';
  }
})();


