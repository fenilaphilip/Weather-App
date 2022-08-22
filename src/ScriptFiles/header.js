import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import locationIcon from "../images/location.png";

export default function Header(properties) {
  const api_key = "9f60d7631c91fefe3d27ab9b78997410";
  const [city, setCity] = useState("");
  let updateWeatherDetails = properties.updateWeatherDetails;
  let unit = properties.unit;

  function onSearchSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }
  function searchCity(currentCity) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=${unit}&appid=${api_key}`;
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
      sun_rise: response.data.sys.sunrise * 1000,
      sun_set: response.data.sys.sunset * 1000,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  useEffect(() => {
    searchCity("London");
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