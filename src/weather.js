import React from "react";

export default function Weather(details) {
  if (details.details !== null) {
    return (
      <div className="weather-details">
        <img src={details.details.icon} alt={details.details.description} />
        <p>{details.details.description}</p>
        <ul>
          <li>Temperature:{details.details.temperature}°C</li>
          <li>Humdity:{details.details.humidity}%</li>
          <li>Air pressure:{details.details.pressure}hPa</li>
          <li>Wind Speed:{details.details.wind}m/s</li>
        </ul>
      </div>
    );
  }
}
