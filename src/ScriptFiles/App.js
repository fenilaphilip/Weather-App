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
  const [location, setLocation] = useState({ latitude: 51.5085, longitude: 0 });
  const [currentDetails, setCurrentDetails] = useState(null);
  const [hourlyForecast, setHourlyForcast] = useState(null);
  const [weeklyForecast, setWeeklyForcast] = useState(null);

  useEffect(() => {
    WeatherClient.getCurrentWeatherByLocation(
      location.latitude,
      location.longitude,
      unit,
      (details) => {
        console.log(details);
        setCurrentDetails(details);
      }
    );
  }, [location, unit]);
  useEffect(() => {
    WeatherClient.getCurrentWeatherByCity(city, unit, (details) => {
      console.log(details);
      setLocation({ latitude: details.latitude, longitude: details.longitude });
    });
  }, [city, unit]);
  useEffect(() => {
    WeatherClient.getForecastWeather(
      location.latitude,
      location.longitude,
      unit,
      (forecast) => {
        console.log(forecast);
        setHourlyForcast(forecast.hourlyReadings);
        setWeeklyForcast(forecast.weeklyReadings);
      }
    );
  }, [location, unit]);

  return (
    <div className="app container">
      <Header setCity={setCity} setLocation={setLocation} />
      <Currentweather
        currentDetails={currentDetails}
        unit={unit}
        setUnit={setUnit}
      />
      <div className="row">
        <Hourlyforecast hourlyForecast={hourlyForecast} unit={unit} />
        <Weeklyforecast weeklyForecast={weeklyForecast} unit={unit} />
      </div>
      <Footer />
    </div>
  );
}
