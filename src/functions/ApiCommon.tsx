import { City } from './interfaces';

export default function getWeatherIn7Days(city: City) {
    const apiKey = 'edeed65787807330d7c9fa00d419b9bf';
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