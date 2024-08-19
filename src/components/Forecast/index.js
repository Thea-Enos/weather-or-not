import _ from "lodash";
import moment from "moment-timezone";
import PropTypes from "prop-types";
import React from "react";

import mockData from "../../mockWeatherData";
import Recommendations from "../Recommendations";

const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const convertKelvinToFarenheit = (kelvinTemp) =>
  ((kelvinTemp - 273.15) * 9) / 5 + 32;

const convertDtToMs = (dtVal) => dtVal * 1000;
const findFirstForecastAfterTime = (forecasts, compareTime) => {
  return forecasts.find((f) => {
    const apiUnixTimestamp = convertDtToMs(f.dt);
    return moment(apiUnixTimestamp).isAfter(moment(compareTime));
  });
};

const Forecast = ({
  zipCode,
  startTime,
  stopTime,
  coatCutoff,
  jacketCutoff,
}) => {
  const [lacksForecast, setLacksForecast] = React.useState(false);
  const [hasRain, setHasRain] = React.useState(false);
  const [wearCoat, setWearCoat] = React.useState(false);
  const [wearJacket, setWearJacket] = React.useState(false);
  const [city, setCity] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const fetchWeatherData = async () => {
        if (zipCode.length === 5) {
          const openWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${openWeatherApiKey}`;
          const response = await fetch(openWeatherUrl);
          const json = await response.json();
          return json;
        }
      };

      // REAL DATA
      // const openWeatherData = await fetchWeatherData();
      // A point-in-time value of `openWeatherData` is what's pasted as the `mockData` object in `src/mockWeatherData.js`

      // MOCK DATA
      const openWeatherData = mockData;

      // Parse Data
      const allForecasts = _.get(openWeatherData, "list", []);
      const cityName = openWeatherData?.city?.name;
      setCity(cityName);

      // First Forecast
      const firstAfterStartTime = findFirstForecastAfterTime(
        allForecasts,
        startTime,
      );
      const firstAfterStartIndex = allForecasts.indexOf(firstAfterStartTime);
      const startIndex = firstAfterStartIndex - 1;

      // Last Forecast
      const firstAfterStopTime = findFirstForecastAfterTime(
        allForecasts,
        stopTime,
      );
      const firstAfterStopIndex = allForecasts.indexOf(firstAfterStopTime);
      const stopIndex = firstAfterStopIndex - 1;

      // Forecasts to Heed
      const forecastsToConsider = allForecasts.filter(
        (f) =>
          allForecasts.indexOf(f) >= startIndex &&
          allForecasts.indexOf(f) <= stopIndex,
      );
      if (forecastsToConsider.length) {
        setLacksForecast(false);
      } else {
        setLacksForecast(true);
      }

      const forecastsRain = forecastsToConsider.some((f) => f.rain);
      setHasRain(forecastsRain);

      const feelsLikeTemps = forecastsToConsider.map((f) => f.main.feels_like);

      const minFeelsLikeKelvin = Math.min(...feelsLikeTemps);
      const minFeelsLikeFarenheit =
        convertKelvinToFarenheit(minFeelsLikeKelvin);

      if (minFeelsLikeFarenheit < coatCutoff) {
        setWearCoat(true);
        setWearJacket(false);
      } else if (minFeelsLikeFarenheit < jacketCutoff) {
        setWearCoat(false);
        setWearJacket(true);
      } else {
        setWearCoat(false);
        setWearJacket(false);
      }
    })();
  }, [zipCode, startTime, stopTime, coatCutoff, jacketCutoff]);

  return (
    <Recommendations
      hasRain={hasRain}
      lacksForecast={lacksForecast}
      wearJacket={wearJacket}
      wearCoat={wearCoat}
      city={city}
    />
  );
};

Forecast.propTypes = {
  coatCutoff: PropTypes.number.isRequired,
  jacketCutoff: PropTypes.number.isRequired,
  startTime: PropTypes.number.isRequired,
  stopTime: PropTypes.number.isRequired,
  zipCode: PropTypes.string.isRequired,
};

export default Forecast;
