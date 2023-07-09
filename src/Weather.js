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

  const filterWeather = (searchValue) => {
    console.log(searchValue);

    const filteredWeatherData = weatherData.filter((weatherItem) =>
      weatherItem.stacja.toLowerCase().includes(searchValue.toLowerCase())
    );

    setWeatherData(filteredWeatherData);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="weather">
      <h1>Pogodynka</h1>
      <SearchWeather filterWeather={filterWeather} />
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
