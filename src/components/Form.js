import React from 'react';
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../redux/actions/weatherActions";

const Form = () =>
{
    const dispatch = useDispatch();
    const submitHandler = e =>
    {
        e.preventDefault();
        const city = e.target.city.value;
        dispatch(getWeatherAction(city));
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