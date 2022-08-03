import React from "react";
import "./mainReport.css";
export default function Currentweather() {
  return (
    <div className="mainReport">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title location pt-2 text-center">Berlin</h1>

              <div className="row m-4">
                <div className="col pt-2" id="tempNow">
                  <h1>22</h1>
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
                        autocomplete="off"
                        checked
                      />
                      <label
                        className="btn btn-outline-primary"
                        for="btn-celsius"
                      >
                        °C
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btn-fahrenheit"
                        autocomplete="off"
                      />
                      <label
                        className="btn btn-outline-primary"
                        for="btn-fahrenheit"
                      >
                        °F
                      </label>
                    </div>
                  </h5>
                </div>
                <div className="col-sm-3">
                  <div className="wtdetail" id="description">
                    clear sky
                  </div>
                  <div className="wtdetail">
                    Max / Min :<span className="wtmeasure">26°C / 23°C</span>
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
                      <p className="wtmeasure">41 %</p>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="wtdetail">wind</h6>
                      <p className="wtmeasure">3 km/h</p>
                    </div>
                    <div className="col-sm-2">
                      <h6 className="wtdetail">Air Pressure</h6>
                      <p className="wtmeasure">1007 hPa</p>
                    </div>
                    <div className="col-sm-3">
                      <h6 className="wtdetail">Sunrise</h6>
                      <p className="wtmeasure">5:22</p>
                    </div>
                    <div className="col-sm-2">
                      <h6 className="wtdetail">Sunset</h6>
                      <p className="wtmeasure">21:2</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-2">
                <small>Last updated</small>
                <p className="day">Saturday 30th July 07:36 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
