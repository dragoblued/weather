import React, {useState} from 'react';
import '../styles/Select.scss';
import Input from './Input';

interface ISelectProps {
    list: any
}

interface City {
    id: number,
    text: string,
    value: string,
    coordinates: any
}
export default function Select(props: ISelectProps) {
    const [value, setValue] = useState('');
    const [showList, setShowList] = useState(false);
    const listItems = props.list.map((city: City) => {
            let className = (value == city.text) ? 'list__item list__item_current' : 'list__item';
            return <li className={className} value={city.value} key={city.id.toString()} onClick={(e) => {
                onclick();
                setValue(city.text);
                getWeather(city);
            }}>{city.text}</li>
        }
    );
    
    function getWeather(city: City) {
        const apiKey = 'edeed65787807330d7c9fa00d419b9bf';
        const address = "https://api.openweathermap.org/data/2.5/onecall?lat=" + city.coordinates[0] + "&lon=" + city.coordinates[1] + "&exclude=hourly,minutely&appid=" + apiKey;
        fetch(address)
        .then(res => res.json())
        .then(
          (result) => {
              console.log(result);
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            console.log(error);
          }
        )
    }

    function onclick() {
        setShowList(!showList);
    }

    return (
        <div className="select">
            <Input click={onclick} showList={showList} value={value}/>
            {
                (showList == true) && 
                <ul className="list">
                   {listItems}
                </ul>
            }     
        </div>
    );
}