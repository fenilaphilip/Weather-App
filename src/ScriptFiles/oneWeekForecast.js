import React from "react";

export default function Oneweekforecast() {
  return (
    <div className="col-sm-6 mt-2 ">
      <div className="card pt-2 forecast">
        <h6>
          <strong>One-week weather forecast</strong>
        </h6>
      </div>
      <div className="card forecast">
        <div className="card-body overflow-auto weeklyforecast">
          <ul id="oneWeekForecast"></ul>
        </div>
      </div>
    </div>
  );
}
