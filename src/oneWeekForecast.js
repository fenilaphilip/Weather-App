import React from "react";
export default function Oneweekforecast() {
  return (
    <div className="col-sm-6 mt-2">
      <div className="card pt-2">
        <h6>
          <strong className="text-center">One-week weather forecast</strong>
        </h6>
      </div>
      <div className="card">
        <div className="card-body overflow-auto" id="weeklyforecast">
          <ul id="oneWeekForecast"></ul>
        </div>
      </div>
    </div>
  );
}
