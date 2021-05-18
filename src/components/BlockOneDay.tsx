import React, {useState, useEffect} from 'react';
import Select from './Select';
import CardWeather from './CardWeather';
import '../styles/BlockOneDay.scss';
import { City } from '../functions/interfaces';
import CardWeatherEmpty from './CardWeatherEmpty';
import Datepicker from './Datepicker';
import { getWeatherOneDay } from '../functions/ApiCommon';

export default function Block7Day(props: any) {
    const [weatherData, setWeatherData] = useState({
      alerts: [],
      current: {},
      daily: [],
      lat: 0,
      lon: 0,
    });
    
    const [date, setDate] = useState(0);
    const [city, setCity] = useState({
        id: 0,
        text: '',
        value: '',
        coordinates: [0, 0]
    })
    function changeWeatherData(citySlected: City) {
        setCity(citySlected);
    }

    function changeCalendar(day: number, month: number, year: number) {
        const utcDate = Math.round(new Date(year, month, day).getTime()/1000.0);
        console.log(utcDate);
        setDate(utcDate);
    }
    useEffect(() => {
        if (city.text !== '' && date !== 0 && weatherData.lat !== city.coordinates[0]) {
            getWeatherOneDay(city, date).then(
                res => setWeatherData(res)
            )
        }
    });
    return (
        <div className="block-one-day">
          <h2 className="block-one-day__headline">Forecast for a Date in the Past</h2>
          <div className="block-one-day__select">
            <Select list={props.cities} changeWeatherData={changeWeatherData}/>
            <Datepicker changeCalendar={changeCalendar}/>
          </div>
            {
                weatherData.lat == 0 ? <CardWeatherEmpty /> : <CardWeather data={weatherData.current}/>
            }
           
        </div>
    );
}