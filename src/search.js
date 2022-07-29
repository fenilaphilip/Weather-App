import React, { useState } from "react";
import axios from "axios";
import Weather from "./weather";

export default function Search() {
  const [city, setCity] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);

  function searchCity(event) {
    event.preventDefault();
    const unit = "Metric";
    const api_key = "9f60d7631c91fefe3d27ab9b78997410";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then(weather_in_searched_city);
  }
  function weather_in_searched_city(response) {
    console.log(response);
    setWeatherDetails({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="search-engine">
      <form onSubmit={searchCity}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />{" "}
        <button>Search</button>
      </form>
      <Weather details={weatherDetails} />
    </div>
  );
}
