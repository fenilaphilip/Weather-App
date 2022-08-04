import "./App.css";
import React, { useState } from "react";
import Header from "./header.js";
import Currentweather from "./mainReport";
import Footer from "./footer";

export default function App() {
  const [weatherDetails, setWeatherDetails] = useState({
    temperature: 99,
    humidity: 88,
    pressure: 77,
    description: "Hello world",
    wind: 5.27,
    icon: `http://openweathermap.org/img/wn/10d@2x.png`,
  });

  return (
    <div className="screen">
      <div className="app container">
        <Header updateWeatherDetails={setWeatherDetails} />
        <Currentweather currentWeatherDetails={weatherDetails} />
        <Footer />
      </div>
    </div>
  );
}
