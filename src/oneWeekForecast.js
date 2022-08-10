import React from "react";
export default function Oneweekforecast() {
  return (
    <div class="col-sm-6 mt-2">
      <div class="card pt-2">
        <h6>
          <strong>One-week weather forecast</strong>
        </h6>
      </div>
      <div class="card">
        <div class="card-body overflow-auto" id="weeklyforecast">
          <ul id="oneWeekForecast"></ul>
        </div>
      </div>
    </div>
  );
}
