import React, {useState} from 'react';
import '../styles/CardWeather.scss';
import { formateDate } from '../functions/FormatDate';
export default function CardWeather(props: any) {
    const data = props.data;
    const date = data?.dt ? formateDate(data.dt) : '';
    const temp = data?.temp?.day ? data?.temp.day : data?.temp;
    const src = data?.weather ? ' http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png' : '';
    const tempCurrent  = Math.round(temp - 273.15) + String.fromCharCode(176);
    return (
        <div className={props.size === 'big' ? 'card card_big' : 'card'}>
            <p className="card__date">{date}</p>
            <img className="card__icon" src={src}></img>
            <h3 className="card__temperature">{tempCurrent}</h3>
        </div>
    )
}