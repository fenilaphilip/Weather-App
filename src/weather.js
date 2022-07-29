import React from "react";

export default function Weather(details) {
  return (
    <div className="weather-details">
      <ul>
        <li>{details.temperature}</li>
      </ul>
    </div>
  );
}
