/*import {WEATHER_INFO} from "../actions/weatherActions";

export function weatherReducer(state, action)
{
    switch (action.type)
    {
        case WEATHER_INFO:
            return {...state, weather: action.payload};
        default:
            return state;
    }
}*/

import {createSlice} from "@reduxjs/toolkit";
import {base_urls, api_keys} from "../../constants/constants";

const initialState =
    {
        weather: {},
        picture: ''
    };

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers:
        {
            cityInfoAction: (state, action) =>
            {
                state.weather = action.payload;
            },
            cityPictureAction: (state, action) =>
            {
                state.picture = action.payload
            }
        }
});

export const {actions, reducer} = citySlice;
export const {cityInfoAction, cityPictureAction} = actions;
export const cityReducer = reducer;

export const getWeatherAction = city =>
{
    return (dispatch) =>
    {
        fetch(`${base_urls[0]}?q=${city}&appid=${api_keys[0]}&units=metric`)
            .then(response => response.json())
            .then(data => dispatch(cityInfoAction(data)));
    }
};

export const getPictureAction = city =>
{
    return (dispatch) =>
    {
        fetch(`${base_urls[1]}/search/photos?query=${city}&client_id=${api_keys[1]}`)
            .then(response => response.json())
            .then(data => dispatch(cityPictureAction(data.results[0].urls.small)));
    }
};