import axios from "axios";

export const OpenWeatherMap = async (lat = 300, lon = 300, city = "") => {
  const API = import.meta.env.VITE_OpenWeather_API;
  let URL = "";

  if (lat !== 300 && lon !== 300) {
    URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;
  } else if (city) {
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
  } else {
    console.error("No valid location provided for weather data.");
    return;
  }

  try {
    const response = await axios.get(URL);
    // console.log(response);

    const weatherData = {
      city: response.data.name,
      temp: (response.data.main.temp - 273.15).toFixed(0),
      temp_max: (response.data.main.temp_max - 273.15).toFixed(0),
      temp_min: (response.data.main.temp_min - 273.15).toFixed(0),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      main: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };

    return weatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
