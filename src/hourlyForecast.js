import React from "react";
import "./forecast.css";
export default function Hourlyforecast() {
  return (
    <div className="col-sm-6 mt-2">
      <div className="card pt-2 forecast">
        <h6>
          <strong>24-hour weather forecast</strong>
        </h6>
      </div>
      <div className="card forecast">
        <div className="card-body overflow-auto hourlyforecast">
          <ul id="hourly-forecast"></ul>
        </div>
      </div>
    </div>
  );
}
