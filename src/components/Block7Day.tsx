import React, {useState} from 'react';
import Select from './Select';
import CardWeather from './CardWeather';
import '../styles/Block7Day.scss';
import { City } from '../functions/interfaces';
import CardWeatherEmpty from './CardWeatherEmpty';
import Datepicker from './Datepicker';
import { getWeatherIn7Days } from '../functions/ApiCommon';

export default function Block7Day(props: any) {
    const [weatherData, setWeatherData] = useState({
      alerts: [],
      current: {},
      daily: [],
      lat: 0,
      lon: 0,
    });
    
    function changeWeatherData(city: City) {
      getWeatherIn7Days(city).then(
        res => setWeatherData(res)
      )
    }

    return (
        <div className="block-7day">
          <h2 className="block-7day__headline">7 Days Forecast</h2>
          <div className="block-7day__select">
            <Select list={props.cities} changeWeatherData={changeWeatherData}/>
          </div>
            {
              weatherData.lat == 0 ? <CardWeatherEmpty /> : <div className="list-weather">
                {
                  weatherData.daily.map((item: any) => {
                    return <CardWeather data={item}/>
                  })
                }
              </div>
            }
           
        </div>
    );
}