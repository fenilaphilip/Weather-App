import axios from "axios";

const api_key = "9f60d7631c91fefe3d27ab9b78997410";

const WeatherClient = {
  getCurrentWeather: (city, unit, updateWeatherDetails) => {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${api_key}`;
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
        icon: `http://openweathermap.org/img/wn/${wtimg}@2x.png`,
        sun_rise: response.data.sys.sunrise * 1000,
        sun_set: response.data.sys.sunset * 1000,
      });
    });
  },
};
export default WeatherClient;
