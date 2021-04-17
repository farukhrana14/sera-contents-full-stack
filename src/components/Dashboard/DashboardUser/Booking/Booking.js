import React from 'react';
import { useLocation } from 'react-router';
import Sidebar from '../../Sidebar/Sidebar';

const Booking = () => {

    // const location = useLocation();
    // const serviceName = location.state.service;
    // console.log(serviceName);

    return (
        <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
            <Sidebar/>
        </div>
        <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
        <h1>Add Booking</h1>
        </div>
               

    </div>
    );
};

export default Booking;<h1>Booking</h1>