import React from "react";
export default function Hourlyforecast() {
  return (
    <div className="col-sm-6 mt-2">
      <div className="card pt-2">
        <h6>
          <strong className="text-center">24-hour weather forecast</strong>
        </h6>
      </div>
      <div className="card" id="hourlyforecast">
        <div className="card-body overflow-auto">
          <ul id="hourly-forecast"></ul>
        </div>
      </div>
    </div>
  );
}
