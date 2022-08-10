import "./App.css";
import React, { useState } from "react";
import Header from "./header.js";
import Currentweather from "./mainReport";
import Hourlyforecast from "./hourlyForecast";
import Oneweekforecast from "./oneWeekForecast";
import Footer from "./footer";

export default function App() {
  const [weatherDetails, setWeatherDetails] = useState({
    city: "London",
    date: "30 Thursday",
    temperature: 27,
    temp_max: 28,
    temp_min: 18,
    humidity: 38,
    pressure: 1058,
    description: "little rain",
    wind: 5,
    icon: `http://openweathermap.org/img/wn/10d@2x.png`,
    sun_rise: "5:30",
    sun_set: "6:20",
  });

  return (
    <div className="screen">
      <div className="app container">
        <Header updateWeatherDetails={setWeatherDetails} />
        <Currentweather currentWeatherDetails={weatherDetails} />
        <div className="row">
          <Hourlyforecast />
          <Oneweekforecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
