import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function Weather() {
    const [forecast, setForecast] = useState([]);
    const fetchForecast = (location) => {
        
        setForecast(data);
    }

    return (
        <div>
            <h1>WeatherApp</h1>
            <WeatherForm />
            { forecast && <p>{forecast}</p>}
        </div>
    )

}