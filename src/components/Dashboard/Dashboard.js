import React from 'react';
import Sidebar from './Sidebar/Sidebar';

  
const containerStyle ={
    backgroundColor:    '#F4FDFB',
 }

const Dashboard = () => {
    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar/>
            </div>
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
            {/* {<Calendar className='react-calendar' onChange={handleDateChange} value={new Date()} />} */}
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                {/* {<AppointmentByDate appointments={appointments} />} */}
            </div>
        

        </div>
    </section>
    );
};

export default Dashboard;