import { City } from './interfaces';
const apiKey = 'edeed65787807330d7c9fa00d419b9bf';

export function getWeatherIn7Days(city: City) {
    const address = "https://api.openweathermap.org/data/2.5/onecall?lat=" + city.coordinates[0] + "&lon=" + city.coordinates[1] + "&exclude=hourly,minutely&appid=" + apiKey;
    const result = fetch(address)
    .then(res => res.json())
    .then(
        (result) => {
            return result;
        },
        (error) => {
            return error;
        }
    )
    return result;
}

export function getWeatherOneDay(city: City, dt: number) {
    const address = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" + city.coordinates[0] + "&lon=" + city.coordinates[1] + "&dt="+dt+"&appid=" + apiKey;
    const result = fetch(address)
    .then(res => res.json())
    .then(
        (result) => {
            return result;
        },
        (error) => {
            return error;
        }
    )
    return result;
}