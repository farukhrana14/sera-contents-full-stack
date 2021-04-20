import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faNewspaper, faTasks, faShoppingCart, faCog, faSignOutAlt, faHome, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import jwt_decode from "jwt-decode";
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminMenuStyle, setAdminMenuStyle] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);
    const history = useHistory();

    // const token = sessionStorage.getItem('token')
    // const decodedToken = jwt_decode(token);
    // // console.log(decodedToken.email, 'or', loggedInUser.email );
    // const emailCheck = decodedToken.email || loggedInUser.email;
    
    // useEffect(()=> {
         
    // fetch('http://localhost:5000/isAdmin', {
    //     method: 'POST',
    //     headers:  {'Content-Type': 'application/json'},
    //     body: JSON.stringify({email: emailCheck})
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     if(data){
    //       setIsAdmin(true);
    //     }
        
    //     console.log(isAdmin);
  
    //   })
      
    //   if(isAdmin===false) {
    //       setAdminMenuStyle(['none'])
    //   } 
    // }, [])
    
    // console.log('Style', adminMenuStyle)
    // console.log('Admin', adminMenuStyle);
     
    const handleLogOut =()=> {
        setLoggedInUser({});
        sessionStorage.setItem('token', '');
        history.push('/')
    }

    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div className='users-functions'>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/bookinglist" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>All Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                </div>

                <div className='admin-functions' style={adminMenuStyle}>
                    <div className='mb-3'>
                        <FontAwesomeIcon style={{ fontSize: '25px' }} className='text-white' icon={faCog} /> <span style={{ fontSize: '20px' }} className='text-white'> Admin Section</span>
                    </div>

                    <hr style={{ border: '1px solid white' }} />

                    <li>
                        <Link to="/bookinglist" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/deletereviews" className="text-white" >
                            <FontAwesomeIcon icon={faFileAlt} /> <span>All Reviews/ Delete</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addservice" className="text-white" >
                            <FontAwesomeIcon icon={faNewspaper} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/deleteservice" className="text-white" >
                            <FontAwesomeIcon icon={faNewspaper} /> <span>All Services / Delete</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeadmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={handleLogOut}>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;