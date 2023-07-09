import axios from "axios";

import { useState } from "react";

const Weather = () => {
    const [weatherData, setWeather] = useState([])
    return (
        <div className="weather">
            Pogoda
        </div>
    )
}

export default Weather