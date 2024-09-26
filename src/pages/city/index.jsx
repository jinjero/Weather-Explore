import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../../hooks/useWeather";
import { getClass } from "./getClass";

import Header from "../../components/layout/Header/header";
import CityTitle from "../../components/weather/title/title";
import Forecast from "../../components/weather/forecast/forecast";

import styles from "./style.module.css";

export default function SearchedCityPage() {
  const { city } = useParams();
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const savedCity = localStorage.getItem("searchedCity");
    if (savedCity) {
      setCityName(savedCity);
    }
  }, []);

  const { weather, calSunrise, calSunset } = useWeather(cityName);
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
