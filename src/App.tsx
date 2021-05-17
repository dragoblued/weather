import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select';

function App() {
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
  ]
  return (
   <Select list={listCity}/>
  );
}

export default App;
