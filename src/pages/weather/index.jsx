import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import { useGeoLocation } from "../../hooks/useGeoLocation";
import { getClass } from "./getClass";

import Header from "../../components/layout/Header/header";
import CityTitle from "../../components/weather/title/title";
import Forecast from "../../components/weather/forecast/forecast";

import styles from "./style.module.css";

export default function WeatherPage() {
  const locationPath = useLocation().pathname;

  const location = useGeoLocation();
  const [cityName, setCityName] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (
      locationPath === "/weather/location" &&
      location.latitude &&
      location.longitude
    ) {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
      const fetchWeather = async () => {
        const weatherData = await useWeather(
          location.latitude,
          location.longitude
        );
        setCityName(weatherData.city);
      };
      fetchWeather();
    }
  }, [locationPath, location]);

  const { weather, calSunrise, calSunset } = useWeather(
    location.latitude,
    location.longitude,
    undefined
  );
  const backgroundClass = getClass(weather.main, weather.icon);

  return (
    <div className={`${styles.div} ${backgroundClass}`}>
      <Header weatherMain={backgroundClass} />
      <CityTitle city={weather.city} weatherMain={backgroundClass} />
      <Forecast
        temp={weather.temp}
        main={weather.main}
        description={weather.description}
        temp_min={weather.temp_min}
        temp_max={weather.temp_max}
        sunrise={calSunrise}
        sunset={calSunset}
        weatherMain={backgroundClass}
      />
    </div>
  );
}
