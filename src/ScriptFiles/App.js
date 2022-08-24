import "../StyleFiles/App.css";
import React, { useEffect, useState } from "react";
import WeatherClient from "./WeatherClient.js";
import Header from "./Header.js";
import Currentweather from "./CurrentWeather.js";
import Hourlyforecast from "./HourlyForecast.js";
import Weeklyforecast from "./WeeklyForecast.js";
import Footer from "./Footer.js";

export default function App() {
  const [city, setCity] = useState("London");
  const [unit, setUnit] = useState("metric");
  const [currentDetails, setCurrentDetails] = useState(null);

  useEffect(() => {
    WeatherClient.getCurrentWeather(city, unit, (details) => {
      console.log(details);
      setCurrentDetails(details);
    });
  }, [city, unit]);

  // WeatherClient.getForecastWeather(
  //   52.517533,
  //   13.386401,
  //   "metric",
  //   (forecast) => {
  //     console.log(forecast);
  //   }
  // );
  return (
    <div className="app container">
      <Header setCity={setCity} />
      <Currentweather
        currentDetails={currentDetails}
        unit={unit}
        setUnit={setUnit}
      />
      <div className="row">
        <Hourlyforecast />
        <Weeklyforecast />
      </div>
      <Footer />
    </div>
  );
}
