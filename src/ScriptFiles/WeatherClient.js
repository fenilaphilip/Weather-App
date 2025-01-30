import axios from "axios";

const api_key = "9f60d7631c91fefe3d27ab9b78997410";
const openweather_url = `https://api.openweathermap.org`;
const CurrentApi = `${openweather_url}/data/2.5/weather`;
const ForecastApi = `${openweather_url}/data/2.5/forecast`;

const WeatherClient = {
  getCurrentWeatherByCity: (city, unit, updateWeatherDetails) => {
    const api_url = `${CurrentApi}?q=${city}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then((response) => {
      updateWeatherDetails(parseCurrentWeather(response));
    });
  },
  getCurrentWeatherByLocation: (lat, lon, unit, updateWeatherDetails) => {
    const api_url = `${CurrentApi}?lat=${lat}&lon=${lon}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then((response) => {

      updateWeatherDetails(parseCurrentWeather(response));
    });
  },
  getForecastWeather: (lat, lon, unit, updateWeatherForecast) => {
    const api_url = `${ForecastApi}?lat=${lat}&lon=${lon}&units=${unit}&appid=${api_key}`;
    axios.get(api_url).then((response) => {
      const forecast = {
        weeklyReadings: extract_5days_readings(response.data),
        hourlyReadings: extract_3hour_readings(response.data),
      }
      updateWeatherForecast(forecast);
    });
  },
};

function extract_3hour_readings(data) {
  let readings = [];
  for (let i = 0; i < 8; i++) {
    let icon = data.list[i].weather[0].icon;
    let reading = {
      hour: new Date(data.list[i].dt * 1000).getHours(),
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: data.list[i].weather[0].description,
      temp: Math.round(data.list[i].main.temp),
    };
    readings.push(reading);
  }
  return readings;
}

function extract_5days_readings(data) {
  let readings = [];
  for (let i = 4; i < 40; i += 8) {
    let icon = data.list[i].weather[0].icon;
    let reading = {
      date: new Date(data.list[i].dt * 1000),
      image: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: data.list[i].weather[0].description,
      tempMax: Math.round(data.list[i].main.temp_max),
      tempMin: Math.round(data.list[i].main.temp_min),
    };
    readings.push(reading);
  }
  return readings;
}

function parseCurrentWeather(response) {
  let wtimg = response.data.weather[0].icon;
  return {
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
  };
}
export default WeatherClient;
