import React, {useState} from 'react';
import Select from './Select';
import CardWeather from './CardWeather';
import '../styles/Block7Day.scss';
import { City } from '../functions/interfaces';
import CardWeatherEmpty from './CardWeatherEmpty';

export default function Block7Day() {
    const listCity = [
        {
          id: 1,
          text: 'Самара',
          value: 'Samara',
          coordinates: [53.195873, 50.100193] 
        },
        {
          id: 2,
          text: 'Тольятти',
          value: 'Tolyatti',
          coordinates: [53.195873, 50.100193]
        },
        {
          id: 3,
          text: 'Саратов',
          value: 'Saratov',
          coordinates: [51.533557, 46.034257]
        },
        {
          id: 4,
          text: 'Казань',
          value: 'Kazan',
          coordinates: [55.796127, 49.106405]
        },
        {
          id: 5,
          text: 'Краснодар',
          value: 'Krasnodar',
          coordinates: [45.035470, 38.975313]
        },
    ];
    const [weatherData, setWeatherData] = useState({
      alerts: [],
      current: {},
      daily: [],
      lat: 0,
      lon: 0,
    });
    
    function changeWeatherData(res: any) {
      setWeatherData(res);
    }


    return (
        <div className="block-7day">
          <h2 className="block-7day__headline">7 Days Forecast</h2>
          <div className="block-7day__select">
            <Select list={listCity} changeWeatherData={changeWeatherData}/>
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