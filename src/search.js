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
    let wtimg = response.data.weather[0].icon;
    setWeatherDetails({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${wtimg}@2x.png`,
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
      <Weather city={city} details={weatherDetails} />
    </div>
  );
}
