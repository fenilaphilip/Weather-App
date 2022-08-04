import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./search";

export default function Header(properties) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">WEATHER APP</div>
          <Search updateWeatherDetails={properties.updateWeatherDetails} />
        </div>
      </nav>
    </div>
  );
}
