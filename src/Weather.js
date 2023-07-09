import "./Weather.css";

import axios from "axios";

import { useEffect, useState } from "react";

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

  console.log(weatherData);
  return (
    <div className="weather">
      <div weatherList>
        {weatherData.map((weatherItem) => {
          return <div className="weatherItem" key={weatherItem.id_stacji}>
            <h2>{weatherItem.stacja}</h2>
            <p>Temperatura: {weatherItem.temperatura} st. C.</p>
            <p>Ciśnienie: {weatherItem.cisnienie} hPa</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Weather;
