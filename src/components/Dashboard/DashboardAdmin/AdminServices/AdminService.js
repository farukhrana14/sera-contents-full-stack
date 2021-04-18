import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';
import jwt_decode from 'jwt-decode';



const AdminService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    if (loggedInUser.email === 0) {
        const token = sessionStorage.getItem('token');
        const decodedToken = jwt_decode(token);
        const newUser = {...loggedInUser};
        newUser.email = decodedToken.email;
        setLoggedInUser(newUser);
    }

    console.log(loggedInUser);

    
    useEffect(() => {
        fetch('http://localhost:5000/showorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    console.log(orders);

    return (
        <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
            <Sidebar/>
        </div>
        <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
        <h1>Admin Service {orders.length}</h1>
        


        </div>
               

    </div>
    );
};

export default AdminService;