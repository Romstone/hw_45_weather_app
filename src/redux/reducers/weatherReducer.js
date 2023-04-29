import {WEATHER_INFO} from "../actions/weatherActions";

export function weatherReducer(state, action)
{
    switch (action.type)
    {
        case WEATHER_INFO:
            return {...state, weather: action.payload};
        default:
            return state;
    }
}