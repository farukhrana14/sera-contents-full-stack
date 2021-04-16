import React from 'react';
import { useLocation } from 'react-router';

const Booking = () => {

    const location = useLocation();
    const serviceName = location.state.service;
    console.log(serviceName);

    return (
        <div>
            <h1>Booking</h1>
        </div>
    );
};

export default Booking;<h1>Booking</h1>