import "../StyleFiles/App.css";
import React, { useState } from "react";
import WeatherClient from "./WeatherClient.js";
import Header from "./Header.js";
import Currentweather from "./CurrentWeather.js";
import Hourlyforecast from "./HourlyForecast.js";
import Weeklyforecast from "./WeeklyForecast.js";
import Footer from "./Footer.js";

export default function App() {
  WeatherClient.getCurrentWeather("kerala", "metric", (details) => {
    console.log(details);
  });
  WeatherClient.getForecastWeather(52.517533, 13.386401, "metric");
  return (
    <p>Hello</p>

    // <div className="screen">
    //   <div className="app container">
    //     <Header updateWeatherDetails={setWeatherDetails} unit={unit} />
    //     {weatherDetails != null && (
    //       <Currentweather
    //         currentWeatherDetails={weatherDetails}
    //         changeUnit={setUnit}

    //       />
    //     )}
    //     <div className="row">
    //       <Hourlyforecast />
    //       <Weeklyforecast />
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
  );
}
