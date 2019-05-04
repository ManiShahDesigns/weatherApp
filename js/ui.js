class UI {
  constructor() {
    this.cityName = document.getElementById('city-name');
    this.temperature = document.getElementById('temperature');
    this.description = document.getElementById('weather-description');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.wind = document.getElementById('wind');
    this.population= document.getElementById('population');
  }

  add(weather) {
    this.cityName.textContent = weather.city.name;
    this.temperature.textContent = Math.round(weather.list[0].main.temp) + " °C";
    this.description.textContent = weather.list[0].weather[0].description;
    this.icon.setAttribute('src', "http://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png ");
    this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.list[0].wind.speed} km/h`;
    this.population.textContent = `Population: ${weather.city.population}`;
  }
}