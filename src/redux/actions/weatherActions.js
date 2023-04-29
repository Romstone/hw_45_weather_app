import {api_key, base_url} from "../../constants/constants";

export const WEATHER_INFO = 'WEATHER_INFO';

export const cityInfoAction = weather => (
    {
        type: WEATHER_INFO,
        payload: weather
    });
export const getWeatherAction = city =>
{
    return (dispatch) =>
    {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => dispatch(cityInfoAction(data)));
    }
}