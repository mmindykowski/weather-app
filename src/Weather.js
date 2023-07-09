import axios from "axios";

import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeather] = useState([]);

  const getWeatherData = () => {
    axios.get("https://danepubliczne.imgw.pl/api/data/synop").then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    getWeatherData();
  }, []);
  return <div className="weather">Pogoda</div>;
};

export default Weather;
