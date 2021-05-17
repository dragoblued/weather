import React, {useState} from 'react';
import '../styles/Select.scss';
import Input from './Input';
import getWeatherIn7Days from '../functions/ApiCommon';
import { City } from '../functions/interfaces';

interface ISelectProps {
    list: any,
    changeWeatherData?: any
}

export default function Select(props: ISelectProps) {
    const [value, setValue] = useState('');
    const [showList, setShowList] = useState(false);
    const [error, setError] = useState(false);
    const listItems = props.list.map((city: City) => {
            let className = (value == city.text) ? 'list__item list__item_current' : 'list__item';
            return <li className={className} value={city.value} key={city.id.toString()} onClick={(e) => {
                onclick();
                setValue(city.text);
                setError(false);
                getWeatherIn7Days(city).then(
                    res => props.changeWeatherData(res)
                )
            }}>{city.text}</li>
        }
    );
    
    function onclick() {
        setShowList(!showList);
    }

    function changeInputValue(value: string) {
        setValue(value);
        setShowList(false);
        const city = props.list.filter((city: City) => {
            return city.text == value
        });
        if (city.length <= 0) {
            setError(true);
        } else {
            setError(false);
            getWeatherIn7Days(city[0]).then(
                res => props.changeWeatherData(res)
            )
        }
    }

    return (
        <div className="select">
            <Input click={onclick} showList={showList} value={value} change={changeInputValue} error={error}/>
            {
                (showList == true) && 
                <ul className="list">
                   {listItems}
                </ul>
            }     
        </div>
    );
}