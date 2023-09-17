import { useState } from "react"

export default function WeatherForm({dataFetcher}) {
    const [location, setLocation] = useState("");
    const handleChange = (evt) => {
        setLocation(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(location);
        dataFetcher(location);
        setLocation("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="location">Location</label>
            <input type="text"
                placeholder="your city"
                name="location"
                id="location"
                onChange={handleChange} 
                value={location}
            />
            <button>Submit</button>
        </form>
    )
}