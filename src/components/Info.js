import React from 'react';
import {useSelector} from "react-redux";

const Info = () =>
{
    const picture = useSelector(state => state.city.picture);
    return (
        picture ? <img src={picture} alt=""/>   :
            <div>
                <h2>Weather application</h2>
                <p>Your city weather</p>
            </div>
    );
};

export default Info;