import React from "react";
export default function Hourlyforecast() {
  return (
    <div class="col-sm-6 mt-2">
      <div class="card pt-2">
        <h6>
          <strong>24-hour weather forecast</strong>
        </h6>
      </div>
      <div class="card" id="hourlyforecast">
        <div class="card-body overflow-auto">
          <ul id="hourly-forecast"></ul>
        </div>
      </div>
    </div>
  );
}
