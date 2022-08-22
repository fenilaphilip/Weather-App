import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherClient from "./Api.js";
import locationIcon from "../images/location.png";

export default function Header(properties) {
  const [city, setCity] = useState("");
  let updateWeatherDetails = properties.updateWeatherDetails;
  let unit = properties.unit;

  function onSearchSubmit(event) {
    event.preventDefault();
    WeatherClient.getCurrentWeather(city, unit, updateWeatherDetails);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  useEffect(() => {
    WeatherClient.getCurrentWeather("London", unit, updateWeatherDetails);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">WEATHER APP</div>
          <div className="search-engine">
            <form className="d-flex" onSubmit={onSearchSubmit}>
              <button
                className="btn btn-outline-success me-2"
                title="Current location"
              >
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
        </div>
      </nav>
    </div>
  );
}
