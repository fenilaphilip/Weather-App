import React from "react";
import Temperature from "./Temperature.js";
import FormattedDate from "./Date.js";

export default function Weeklyforecast(properties) {
  return (
    <div className="col-sm-6 mt-2 ">
      <div className="card pt-2 forecast">
        <h6>
          <strong>One-week weather forecast</strong>
        </h6>
      </div>
      <div className="card forecast">
        <div className="card-body overflow-auto weeklyforecast">
          <ul id="oneWeekForecast">
            {properties.weeklyForecast !== null &&
              properties.weeklyForecast.map((reading, idx) => (
                <li className="row mt-2" key={`forecast-day-${idx}`}>
                  <span className="col p-2">
                    <FormattedDate date={reading.date} mode="day" />
                  </span>
                  <span className="col wt-img">
                    <img
                      src={reading.image}
                      alt={reading.description}
                      width="40px"
                    />
                  </span>
                  <span className="col-4 p-2">{reading.description}</span>
                  <div className="col-sm-3 p-2">
                    <strong>
                      {" "}
                      <Temperature
                        value={reading.tempMax}
                        unit={properties.unit}
                      />
                    </strong>
                    /{" "}
                    <Temperature
                      value={reading.tempMin}
                      unit={properties.unit}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
