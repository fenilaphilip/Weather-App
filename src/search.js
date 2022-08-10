import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import locationIcon from "./images/location.png";

export default function Search(properties) {
  const [city, setCity] = useState("");
  let updateWeatherDetails = properties.updateWeatherDetails;
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
    updateWeatherDetails({
      city: response.data.name,
      date: response.data.dt * 1000,
      temperature: Math.round(response.data.main.temp),
      temp_max: Math.round(response.data.main.temp_max),
      temp_min: Math.round(response.data.main.temp_min),
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${wtimg}@2x.png`,
      sun_rise: response.data.sunrise,
      sun_set: response.data.sys.sunset,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="search-engine">
      <form className="d-flex" onSubmit={searchCity}>
        <button class="btn btn-outline-success me-2" title="Current location">
          <img src={locationIcon} alt="location" id="location-img-btn" />
        </button>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <button className="btn btn-outline-success">Search</button>
      </form>
    </div>
  );
}
