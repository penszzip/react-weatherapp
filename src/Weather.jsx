import { useState } from "react";
import WeatherForm from "./WeatherForm";
import getURL from "./utils.js";
import "./Weather.css";

export default function Weather() {
    const [forecast, setForecast] = useState(null);
    const [heading, setHeading] = useState("");
    const [icon, setIcon] = useState("");
    async function fetchForecast(location) {

        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
        const coordinates = await response.json();

        const { latitude, longitude } = coordinates.results[0];

        const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weather = await responseWeather.json();
        const { current_weather } = weather;

        console.log(current_weather);

        setHeading(location);
        setForecast(current_weather);
        setIcon(getURL(current_weather.weathercode));

    }

    return (
        <div className="main">
            <div className="wrapper">
                <h1>WeatherApp</h1>
                <WeatherForm dataFetcher={fetchForecast} />
                {forecast &&
                    <div className="weatherClass">
                        {heading && <h2>{heading}</h2>}
                        <h3>{icon}</h3>
                        <p>Temperature: {forecast.temperature} degrees Celsius</p>
                        <p>Wind speed: {forecast.windspeed} km/h</p>
                    </div>}
            </div>
        </div>
    )
}