import React from 'react';
import {useDispatch} from "react-redux";
import {getPictureAction, getWeatherAction} from "../redux/reducers/weatherReducer";

const Form = () =>
{
    const dispatch = useDispatch();
    const submitHandler = e =>
    {
        e.preventDefault();
        const city = e.target.city.value;
        dispatch(getWeatherAction(city));
        dispatch(getPictureAction(city));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name='city' placeholder='City'/>
                <button type='submit'>Get weather</button>
            </form>
        </div>
    );
};

export default Form;