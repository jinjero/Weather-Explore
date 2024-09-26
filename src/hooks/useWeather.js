import { useState, useEffect } from "react";
import { OpenWeatherMap } from "../services/weather";
import { TimeOffset } from "../services/offset";

export const useWeather = (lat, lon, city) => {
  const [weather, setWeather] = useState({
    city: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    sunrise: 0,
    sunset: 0,
    lat: 0,
    lon: 0,
    main: "",
    description: "",
    icon: "",
  });

  const [offset, setOffset] = useState(0);
  const [calSunrise, setCalSunrise] = useState("");
  const [calSunset, setCalSunset] = useState("");

  const calSun = (sun, offset) => {
    const local = new Date((sun + offset) * 1000);
    const hours = "0" + local.getUTCHours();
    const minutes = "0" + local.getUTCMinutes();
    return `${hours.substr(-2)}:${minutes.substr(-2)}`;
  };

  // Load OpenWeatherMap API
  useEffect(() => {
    const getWeather = async () => {
      try {
        const weatherData = await OpenWeatherMap(lat, lon, city);
        setWeather(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    getWeather();
  }, [lat, lon, city]);

  // Load TimeOffset
  useEffect(() => {
    if (weather.lat && weather.lon) {
      const getOffset = async () => {
        try {
          const offset = await TimeOffset(weather.lat, weather.lon);
          setOffset(offset);
        } catch (error) {
          console.error(error);
        }
      };

      getOffset();
    }
  }, [weather.lat, weather.lon]);

  // Calculate UTC
  useEffect(() => {
    if (weather.sunrise && weather.sunset && offset) {
      const sunRise = calSun(weather.sunrise, offset);
      const sunSet = calSun(weather.sunset, offset);
      setCalSunrise(sunRise);
      setCalSunset(sunSet);
    }
  }, [weather.sunrise, weather.sunset, offset]);

  return { weather, calSunrise, calSunset };
};
