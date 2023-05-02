/*import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const initialState =
    {
        weather: {}
    };

export const store = createStore(weatherReducer, initialState,
    applyMiddleware(thunk, logger));*/

import {configureStore} from "@reduxjs/toolkit";
import {cityReducer} from "../reducers/weatherReducer";

export const store = configureStore({
    reducer:
        {
            city: cityReducer,
        }
})