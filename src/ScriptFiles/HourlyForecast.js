import React from "react";
import Temperature from "./Temperature";

export default function Hourlyforecast(properties) {
  return (
    <div className="col-sm-6 mt-2">
      <div className="card pt-2 forecast">
        <h6>
          <strong>24-hour weather forecast</strong>
        </h6>
      </div>
      <div className="card forecast">
        <div className="card-body overflow-auto hourlyforecast">
          <ul id="hourly-forecast">
            {properties.hourlyForecast !== null &&
              properties.hourlyForecast.map((reading) => (
                <li
                  className="row mt-2"
                  key={`forecast-of-hour-${reading.hour}`}
                >
                  <span className="col p-2">{reading.hour}:00</span>
                  <span className="col wt-img">
                    <img
                      src={reading.image}
                      alt={reading.description}
                      width="40px"
                    />
                  </span>
                  <span className="col-4 p-2">{reading.description}</span>
                  <span className="col p-2">
                    <Temperature value={reading.temp} unit={properties.unit} />
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
