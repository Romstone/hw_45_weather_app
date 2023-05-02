import {useSelector} from "react-redux";

const Weather = () =>
{
    const {weather} = useSelector(state => state.city);
    if (weather.name)
    {
        const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

        return (
            <div>
                <p>City: {weather.name}</p>
                <p>Temperature: {weather.main.temp}</p>
                <p>Pressure: {weather.main.pressure}</p>
                <p>Weather: {weather.weather[0].main}, {weather.weather[0].description}</p>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>
            </div>
        );
    } else
    {
        return (
            <div>
                <h3 className='error'>{weather.message}</h3>
            </div>
        )
    }
};

export default Weather;