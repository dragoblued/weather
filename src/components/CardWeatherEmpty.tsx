import '../styles/CardWeatherEmpty.scss';
import heap from '../assets/images/heap.svg';

export default function CardWeatherEmpty(props: any) {
    return (
        <div className="card-weather-empty">
            <img src={heap} alt="" />
            <p className="card-weather-empty__description">Fill in all the fields and the weather will be displayed</p>
        </div>
    );
}