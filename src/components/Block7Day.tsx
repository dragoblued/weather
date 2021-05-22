import React, { useState } from "react";
import Select from "./Select";
import CardWeather from "./CardWeather";
import "../styles/Block7Day.scss";
import { City, Coordinate } from "../functions/interfaces";
import CardWeatherEmpty from "./CardWeatherEmpty";
import Datepicker from "./Datepicker";
import { getWeatherIn7Days } from "../functions/ApiCommon";

export default function Block7Day(props: any) {
  const isMobile = window.innerWidth < 720;
  const [weatherData, setWeatherData] = useState({
    alerts: [],
    current: {},
    daily: [],
    lat: 0,
    lon: 0,
  });
  const [displayBlock, setDisplayBlock] = useState([0, isMobile ? 2 : 3]);
  const [swipe, setSwipe] = useState("");
  let touchStart: Coordinate,
    touchMove: Coordinate,
    touchEnd: { x: 0; y: 0 },
    touchPosition: Coordinate;

  function changeWeatherData(city: City) {
    getWeatherIn7Days(city).then((res) => {
      setWeatherData(res);
    });
  }

  function changeDiaplyBlock(side: string) { //в завимисти мобилка или нет - меняется кол-во отображаемых блоков с погодой
    if (isMobile) {
      if (side == "left") {
        displayBlock[1] + 2 > 8
          ? setDisplayBlock([0, 2])
          : setDisplayBlock([displayBlock[0] + 2, displayBlock[1] + 2]);
      } else {
        displayBlock[1] - 2 <= 0
          ? setDisplayBlock([6, 8])
          : setDisplayBlock([displayBlock[0] - 2, displayBlock[1] - 2]);
      }
    } else {
      if (side == "right") {
        displayBlock[1] + 3 > 9
          ? setDisplayBlock([0, 3])
          : setDisplayBlock([displayBlock[0] + 3, displayBlock[1] + 3]);
      } else {
        displayBlock[1] - 3 <= 0
          ? setDisplayBlock([6, 9])
          : setDisplayBlock([displayBlock[0] - 3, displayBlock[1] - 3]);
      }
    }
  }

  function TouchStart(e: any) {
    touchStart = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
    touchPosition = { x: touchStart.x, y: touchStart.y };
  }

  function TouchMove(e: any) {
    touchPosition = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  }

  function TouchEnd(e: any) {
    CheckAction();
    touchStart = { x: 0, y: 0 };
    touchPosition = { x: 0, y: 0 };
  }

  function CheckAction() { // функция для обработки свайпа влева-вправо(испрльзуется для прорисовки количества блоков с погодой)
    const sensitivity = 20;
    const d = {
      x: touchStart.x - touchPosition.x,
      y: touchStart.y - touchPosition.y,
    };
    if (Math.abs(d.x) > Math.abs(d.y)) {
      if (Math.abs(d.x) > sensitivity) {
        d.x > 0 ? changeDiaplyBlock("left") : changeDiaplyBlock("right");
      }
    }
  }

  return (
    <div className="block-7day">
      <h2 className="block-7day__headline">7 Days Forecast</h2>
      <div className="block-7day__select">
        <Select list={props.cities} changeWeatherData={changeWeatherData} />
      </div>
      {weatherData.lat == 0 ? (
        <CardWeatherEmpty />
      ) : (
        <div
          className="list-weather"
          onTouchMove={(e) => TouchMove(e)}
          onTouchEnd={(e) => TouchEnd(e)}
          onTouchStart={(e) => TouchStart(e)}
        >
          <button
            className="block-7day__button block-7day__button_left"
            onClick={() => changeDiaplyBlock("left")}
          ></button>
          {weatherData.daily.map((item: any, index: number) => {
            return index < displayBlock[1] && index >= displayBlock[0] ? (
              <CardWeather data={item} size="small" />
            ) : (
              ""
            );
          })}
          <button
            className="block-7day__button block-7day__button_right"
            onClick={() => changeDiaplyBlock("right")}
          ></button>
        </div>
      )}
    </div>
  );
}
