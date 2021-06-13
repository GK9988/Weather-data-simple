// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //CODE GOES HERE
  const weatherPromise = fetch(FULL_URL)
  return weatherPromise.then((response) => {
    return response.json() 
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response) => {
    showWeatherData(response)
  }).catch(error => {
    console.log(error);
  })

}

showWeatherData = (weatherData) => {
  //CODE GOES HERE

  // City name
  document.getElementById('city-name').innerText = weatherData.name

  // Weather Type
  document.getElementById('weather-type').innerText = weatherData.weather[0].main

  // Temp
  document.getElementById('temp').innerText = weatherData.main.temp

  // Min Temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  
  // Max Temp
  document.getElementById('max-temp').innerText = weatherData.main.temp_max

  
}

