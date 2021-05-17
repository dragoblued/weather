import React, {useState} from 'react';
import '../styles/CardWeather.scss';
import { formateDate } from '../functions/FormatDate';
export default function CardWeather(props: any) {
    const date = props.data.dt ? formateDate(props.data.dt) : '';
    const src = props.data.weather ? ' http://openweathermap.org/img/wn/' + props.data.weather[0].icon + '@2x.png' : '';
    const temp = props.data.temp ? Math.round(props.data.temp.day - 273.15) + String.fromCharCode(176) : '';
    return (
        <div className="card">
            <p className="card__date">{date}</p>
            <img className="card__icon" src={src}></img>
            <h3 className="card__temperature">{temp}</h3>
        </div>
    )
}