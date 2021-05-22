import React, { useState, useEffect } from "react";
import Select from "./Select";
import CardWeather from "./CardWeather";
import "../styles/BlockOneDay.scss";
import { City } from "../functions/interfaces";
import CardWeatherEmpty from "./CardWeatherEmpty";
import Datepicker from "./Datepicker";
import { getWeatherOneDay } from "../functions/ApiCommon";

export default function Block7Day(props: any) {
  const [weatherData, setWeatherData] = useState({
    alerts: [],
    current: {},
    daily: [],
    lat: 0,
    lon: 0,
  });
  const [requestError, setRequestError] = useState(false);
  const [date, setDate] = useState(0);
  const [city, setCity] = useState({
    id: 0,
    text: "",
    value: "",
    coordinates: [0, 0],
  });

  function changeWeatherData(citySlected: City) {
    setCity(citySlected);
  }

  function changeCalendar(day: number, month: number, year: number) {
    const utcDate = Math.round(new Date(year, month, day).getTime() / 1000.0);
    setDate(utcDate);
  }

  useEffect(() => { //при изменении даты или города - отправляется запрос
    getWeatherOneDay(city, date).then((res) => {
      setWeatherData(res);
      setRequestError(false);
      if (res.cod == "400") {
        setRequestError(true); //Api может отдать данные, только по предыдущим 5-ти дням - если не соответвует дата, то отображаем текст с ошибкой
      }
    });
  }, [city, date]);
  
  return (
    <div className="block-one-day">
      <h2 className="block-one-day__headline">
        Forecast for a Date in the Past
      </h2>
      <div className="block-one-day__select">
        <Select list={props.cities} changeWeatherData={changeWeatherData} />
        <Datepicker changeCalendar={changeCalendar} />
      </div>
      {requestError == true ? (
        <div className="error-request">
          Choose a different date, you can only select the previous 5 days p.s.
          Described in API
        </div>
      ) : weatherData.lat === 0 && requestError == false ? (
        <CardWeatherEmpty />
      ) : (
        <CardWeather data={weatherData.current} size="big" />
      )}
    </div>
  );
}
