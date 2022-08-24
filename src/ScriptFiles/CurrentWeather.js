import React from "react";
import FormattedDate from "./Date";
import Temperature from "./Temperature";

export default function Currentweather(properties) {
  let weatherDetails = properties.currentDetails;
  function useImperial() {
    console.log("Using imperial units");
    properties.setUnit("imperial");
  }
  function useMetric() {
    console.log("Using metric units");
    properties.setUnit("metric");
  }

  if (weatherDetails !== null) {
    return (
      <div className="row ">
        <div className="col">
          <div className="card mainReport">
            <div className="card-body">
              <h1 className="card-title location pt-2 text-center">
                {weatherDetails.city}
              </h1>

              <div className="row m-4">
                <div className="col pt-2" id="tempNow">
                  <h1>{weatherDetails.temperature}</h1>
                </div>

                <div className="col-6">
                  <h5 className="float-left">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btn-celsius"
                        autoComplete="off"
                        checked={properties.unit === "metric"}
                        onChange={useMetric}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btn-celsius"
                      >
                        °C
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btn-fahrenheit"
                        autoComplete="off"
                        checked={properties.unit === "imperial"}
                        onChange={useImperial}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor="btn-fahrenheit"
                      >
                        °F
                      </label>
                    </div>
                  </h5>
                </div>
                <div className="col-sm-3">
                  <img
                    src={weatherDetails.icon}
                    alt={weatherDetails.description}
                  />
                  <div className="wtdetail" id="description">
                    {weatherDetails.description}
                  </div>
                  <div className="wtdetail">
                    Max / Min :
                    <Temperature
                      value={weatherDetails.temp_max}
                      unit={properties.unit}
                    />
                    /
                    <Temperature
                      value={weatherDetails.temp_min}
                      unit={properties.unit}
                    />
                  </div>
                </div>
              </div>
              <div className="row m-4">
                <div
                  className="card-body overflow-auto text-center"
                  id="more-details"
                >
                  <div className="row">
                    <div className="col-sm-2">
                      <h6 className="wtdetail">Humidity</h6>
                      <p className="wtmeasure">{weatherDetails.humidity} %</p>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="wtdetail">wind</h6>
                      <p className="wtmeasure">{weatherDetails.wind} km/h</p>
                    </div>
                    <div className="col-sm-2">
                      <h6 className="wtdetail">Air Pressure</h6>
                      <p className="wtmeasure">{weatherDetails.pressure} hPa</p>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="wtdetail">Sunrise</h6>
                      <div className="wtmeasure">
                        <FormattedDate
                          mode="time"
                          date={weatherDetails.sun_rise}
                        />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <h6 className="wtdetail">Sunset</h6>
                      <div className="wtmeasure">
                        <FormattedDate
                          mode="time"
                          date={weatherDetails.sun_set}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-2">
                <small>Last updated</small>
                <div className="day">
                  <FormattedDate date={weatherDetails.date} mode="full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading............!</p>;
  }
}
