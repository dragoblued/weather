import React, { useState, useEffect } from "react";
import "../styles/Datepicker.scss";
import { getMonth, getDays } from "../functions/FormatDate";
import Input from "./Input";

export default function DatePicker(props: any) {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [day, setDay] = useState(date.getDate());
  const [showCalendar, setShowCalendar] = useState(false);
  const [value, setValue] = useState("");
  const days = [];

  for (let i = 1; i <= getDays(month, year); i++) {
    days[i - 1] = i;
  }

  function onclick() {
    setShowCalendar(!showCalendar);
  }

  function getSelectDate() { //получить дату в своем формате для вывода в input
    let currentMonth = month + 1;
    return day + "/" + currentMonth + "/" + year;
  }

  useEffect(() => {
    setValue(getSelectDate());
    props.changeCalendar(day, month, year);
  });

  return (
    <div className="datepicker">
      <Input
        click={onclick}
        value={value}
        error={false}
        change={() => {}}
        type="calendar"
        placeholder="Select date"
      />
      {showCalendar == true && (
        <div className="calendar">
          <div className="year">
            <button
              className="arrow arrow_left"
              onClick={() => {
                setYear(year - 1);
              }}
            ></button>
            <p className="year-selected">{year}</p>
            <button
              className="arrow arrow_right"
              onClick={() => {
                setYear(year + 1);
              }}
            ></button>
          </div>
          <div className="month">
            <button
              className="arrow arrow_left"
              onClick={() => {
                month == 0 ? setMonth(11) : setMonth(month - 1);
              }}
            ></button>
            <p className="month-selected">{getMonth(month)}</p>
            <button
              className="arrow arrow_right"
              onClick={() => {
                month == 11 ? setMonth(0) : setMonth(month + 1);
              }}
            ></button>
          </div>
          <div className="days">
            {days.map((item) => {
              const className = item == day ? "day day_current" : "day";
              return (
                <div
                  key={item}
                  className={className}
                  onClick={() => {
                    setDay(item);
                    setShowCalendar(!showCalendar);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
