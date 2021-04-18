import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from './Sidebar/Sidebar';

  
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext (UserContext);

    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar/>
            </div>
            <div className=" mt-4 col-md-5 col-sm-12 col-12 d-flex justify-content-center">
            <h4 className='mt-5 text-brand' >Welcome, {loggedInUser.name || loggedInUser.email}!</h4>
            </div>
            <div className="mt-3 col-md-4 col-sm-12 col-12">
            <h4 className='mt-5 text-brand' >This is Your Dashboard.</h4>    
            </div>
        

        </div>
    </section>
    );
};

export default Dashboard;