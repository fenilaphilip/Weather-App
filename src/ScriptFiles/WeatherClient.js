import axios from "axios";

const api_key = "9f60d7631c91fefe3d27ab9b78997410";
const openweather_url = `https://api.openweathermap.org`;
const CurrentApi = `${openweather_url}/data/2.5/weather`;
const OnecallApi = `${openweather_url}/data/2.5/onecall`;

const WeatherClient = {
  getCurrentWeather: (city, unit, updateWeatherDetails) => {
    const api_url = `${CurrentApi}?q=${city}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then((response) => {
      console.log(response);
      let wtimg = response.data.weather[0].icon;
      updateWeatherDetails({
        city: response.data.name,
        date: response.data.dt * 1000,
        temperature: Math.round(response.data.main.temp),
        temp_max: Math.round(response.data.main.temp_max),
        temp_min: Math.round(response.data.main.temp_min),
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        icon: `https://openweathermap.org/img/wn/${wtimg}@2x.png`,
        sun_rise: response.data.sys.sunrise * 1000,
        sun_set: response.data.sys.sunset * 1000,
        longitude: response.data.coord.lon,
        latitude: response.data.coord.lat,
      });
    });
  },
  getForecastWeather: (lat, lon, unit, updateWeatherForecast) => {
    const api_url = `${OnecallApi}?lat=${lat}&lon=${lon}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then((response) => {
      console.log(response.data);

      updateWeatherForecast({
        weeklyReadings: extract_7days_readings(response.data),
        hourlyReadings: extract_hourly_readings(response.data),
      });
    });
  },
};

function extract_hourly_readings(data) {
  let readings = [];
  let currentHour = new Date(data.current.dt * 1000).getHours();
  for (let i = 0; i < 24; i++) {
    let icon = data.hourly[i].weather[0].icon;
    let reading = {
      hour: (i + currentHour) % 24,
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: data.hourly[i].weather[0].description,
      temp: Math.round(data.hourly[i].temp),
    };
    readings.push(reading);
  }
  return readings;
}

function extract_7days_readings(data) {
  let readings = [];
  for (let i = 0; i < 8; i++) {
    let icon = data.daily[i].weather[0].icon;
    let reading = {
      date: new Date(data.daily[i].dt * 1000),
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: data.daily[i].weather[0].description,
      tempMax: Math.round(data.daily[i].temp.max),
      tempMin: Math.round(data.daily[i].temp.min),
    };
    readings.push(reading);
  }
  return readings;
}

export default WeatherClient;
