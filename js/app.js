// Instantiate the Weather class
const weather = new Weather('Sydney');

// Instantiate the UI class
const ui = new UI();

// Load Weather on browser loading
window.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('button').addEventListener('click', (e) => {
  const city = document.getElementById('new-location').value;

  // Change city to the one that user has entered
  weather.changeLocation(city);
  // Update weather
  getWeather();
  // Prevent default button submit behaviour
  e.preventDefault();
});


// Get weather function
function getWeather(){
  weather.getWeather()
  .then(results => {    
    ui.add(results);
  })
  // Log potential errors in the console
  .catch(err => console.log(err));
}
