import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';



const DashboardBooking = () => {
    
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <h1>Add Booking</h1>
            </div>
        </div>

    );
};

export default DashboardBooking;