import "./Weather.css";

import axios from "axios";

import { useEffect, useState } from "react";

import WeatherItem from "./WeatherItem";
import SearchWeather from "./SearchWeather";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = () => {
    axios.get("https://danepubliczne.imgw.pl/api/data/synop").then((res) => {
      setWeatherData(res.data);
    });
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather">
      <h1>Pogodynka</h1>
      <SearchWeather />
      <div className="weatherList">
        {weatherData.map((weatherItem) => {
          return (
            <WeatherItem
              weatherItem={weatherItem}
              key={weatherItem.id_stacji}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
