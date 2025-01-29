import React, { useState } from "react";
import locationIcon from "../images/location.png";

export default function Header(properties) {
  const [searchInput, setSearchInput] = useState("");

  function onSearchSubmit(event) {
    event.preventDefault();
    console.log(`searching.............. ${searchInput}`);
    properties.setCity(searchInput);
  }

  function updateSearchInput(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  function handleLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }
  function showLocation(position) {
    properties.setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">WEATHER APP</div>
        <div className="search-engine">
          <form className="d-flex" onSubmit={onSearchSubmit}>
            <button
              className="btn btn-outline-success me-2"
              title="Current location"
              onClick={handleLocation}
            >
              <img src={locationIcon} alt="location" id="location-img-btn" />
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter a city"
              onChange={updateSearchInput}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
