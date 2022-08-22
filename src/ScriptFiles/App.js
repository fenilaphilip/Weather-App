import "../StyleFiles/App.css";
import React, { useState } from "react";
import Header from "./header.js";
import Currentweather from "./mainReport";
import Hourlyforecast from "./hourlyForecast";
import Oneweekforecast from "./oneWeekForecast";
import Footer from "./footer";

export default function App() {
  const [unit, setUnit] = useState("metric");
  const [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <div className="screen">
      <div className="app container">
        <Header updateWeatherDetails={setWeatherDetails} unit={unit} />
        {weatherDetails != null && (
          <Currentweather
            currentWeatherDetails={weatherDetails}
            changeUnit={setUnit}
          />
        )}
        <div className="row">
          <Hourlyforecast />
          <Oneweekforecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
