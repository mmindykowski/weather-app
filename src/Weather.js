import './Weather.css';

import axios from "axios";

import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = () => {
    axios.get("https://danepubliczne.imgw.pl/api/data/synop").then((res) => {
      setWeatherData(res.data)
    });
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  console.log(weatherData);
  return <div className="weather">Pogoda</div>;
};

export default Weather;
