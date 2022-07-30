import "./App.css";
import React from "react";
import Search from "./search";

export default function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <Search />
      <p>
        <a href="https://github.com/fenilaphilip/Weather-App.git">
          Open-source code
        </a>
        , by Fenila Philip
      </p>
    </div>
  );
}
