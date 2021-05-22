import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Block7Day from './components/Block7Day';
import BlockOneDay from './components/BlockOneDay';

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
      <Block7Day cities={cities}/>
      <BlockOneDay cities={cities}/>
   </div>
  );
}

export default App;
