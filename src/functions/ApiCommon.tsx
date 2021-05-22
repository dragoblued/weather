import { City } from './interfaces';
export function getWeatherIn7Days(city: City) {
    const apiKey = 'b0f1401b1a3241560e9c7f1c5068b66f';
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
    const apiKey = 'b0f1401b1a3241560e9c7f1c5068b66f';
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