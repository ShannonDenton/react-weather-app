import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponde(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 7:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalization">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src="weatherData.iconUrl" alt="{weatherData.description}" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>

          <div className="col-6">
            <ul>
              <li>{weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e6c2364656962bdcb16bc352fc42569a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${props.defaultCity}&appid=${apiKey}&unit=imperial`;
    axios.get(apiUrl).then(handleResponde);

    return "Loading...";
  }
}
