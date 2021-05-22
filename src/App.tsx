import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Block7Day from './components/Block7Day';
import BlockOneDay from './components/BlockOneDay';
import backgroundLeft from './assets/background/Academy-Weatherforecast-Bg-buttom@2x.png';
import backgroundLeftSmall from './assets/background/Academy-Weatherforecast-Bg-buttom.png';
import backgroundRight from './assets/background/Academy-Weatherforecast-Bg-up.png';
import backgroundRightSmall from './assets/background/Academy-Weatherforecast-Bg-up-1.png';

function App() {
  const cities = [
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
      coordinates: [53.507836, 49.420393]
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
  return (
    <div className="main">
      <picture>
        <source srcSet={backgroundLeft}  media="(min-width: 720px)"/>
        <img src={backgroundLeftSmall} className="background-img background-img_left"/>
      </picture>
      <picture>
        <source srcSet={backgroundRight}  media="(min-width: 720px)"/>
        <img src={backgroundRightSmall} className="background-img background-img_right"/>
      </picture>
      <div className="title">
        <h1>Weather</h1>
        <h1>forecast</h1>
      </div>
      <div className="blocks">
        <Block7Day cities={cities}/>
        <BlockOneDay cities={cities}/>
      </div>
   </div>
  );
}

export default App;
