import React from "react";
import "./styles.css";
// import { Card } from 'semantic-ui-react'
import fav from "./logos/icon_favourite.png";
import sun from "./logos/sun.png";
import temp from "./logos/icon_temperature_info.png";
import wind from "./logos/icon_wind_info.png";
import humidity from "./logos/icon_humidity_info.png";
import cloudy from "./logos/icon_mostly_cloudy_big.png";
import fewCloud from "./logos/icon_partially_cloudy_big.png"
import moderateRain from "./logos/icon_rain_big.png";
import thunderstorm from "./logos/icon_thunderstorm_big.png"
import visibility from "./logos/icon_visibility_info.png";

const weather = ({ weatherData }) => {
  const descrip = weatherData.weather[0].description;
  const v = weatherData.visibility / 1000;
  return (
    <>
     

      <div className="header"></div>
     
      <div className="location">
        <h1 className="location_name">{weatherData.name}</h1>
        {/* <button> */}
        <div className="favorite">
          <img
            className="icon-favourite"
            src={fav}
            alt="my"
            // onClick={console.log("clicked")}
          />
          <p className="fav_text"> Add to favorite</p>
        </div>

        {/* </button> */}
        {console.log(v)}
      </div>
      <div>
        {(() => {
          switch (descrip) {
            case "broken clouds":
              return (
                <div>
                  <img className="icon-mostly-sunny" src={cloudy} alt="my" />
                </div>
              );

            case "light rain":
              return (
                <div>
                  <img
                    className="icon-mostly-sunny"
                    src={moderateRain}
                    alt="my"
                  />
                </div>
              );

            case "moderate rain":
              return (
                <div>
                  <img
                    className="icon-mostly-sunny"
                    src={moderateRain}
                    alt="my"
                  />
                </div>
              );
              case "few clouds":
              return (
                <div>
                  <img
                    className="icon-mostly-sunny"
                    src={fewCloud}
                    alt="my"
                  />
                </div>
              );
              case "thunderstorm":
              return (
                <div>
                  <img
                    className="icon-mostly-sunny"
                    src={thunderstorm}
                    alt="my"
                  />
                </div>
              );
              case "overcast clouds":
              return (
                <div>
                  <img
                    className="icon-mostly-sunny"
                    src={fewCloud}
                    alt="my"
                  />
                </div>
              );

            default:
              return (
                <div>
                  <img className="icon-mostly-sunny" src={sun} alt="my" />
                </div>
              );
          }
        })()}
      </div>

      <div className="deg_div">
        <p className="temp_home"> {weatherData.main.temp} </p>
        <p className="deg">&deg;C </p>
        <p className="far">&deg;F </p>
      </div>
      <div className="description">
        {" "}
        <h1 className="des_text">{descrip}</h1>
      </div>

      <hr className="line"></hr>
      <div className="weather_info">
        <div className="temp_info">
          <img className="temp_img" src={temp} alt="my" />
          <p className="minmax">Min-Max</p>
          <br></br>

          <p className="temp_val">
            {weatherData.main.temp_max}-{weatherData.main.temp_min}&deg;C
          </p>
        </div>
        <div className="humidity_info">
          <img className="hum_img" src={humidity} alt="my" />
          <p className="humidity">Humidity</p>
          <br></br>
          <p className="humidity_val">{weatherData.main.humidity}%</p>
        </div>
        <div className="wind_info">
          <img className="wind_img" src={wind} alt="my" />
          <p className="wind">Wind</p>
          <br></br>
          <p className="wind_val">{weatherData.wind.speed} Mph</p>
        </div>
        <div className="visibility_info">
          <img className="vis_img" src={visibility} alt="my" />
          <p className="visibility">Visibility</p>
          <br></br>
          <p className="vis_val">{v} Mph</p>
        </div>
      </div>
    </>
  );
};

export default weather;
