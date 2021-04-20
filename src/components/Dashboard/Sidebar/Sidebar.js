import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faNewspaper, faTasks, faCartPlus, faThList, faShoppingCart, faCog, faSignOutAlt, faHome, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import jwt_decode from "jwt-decode";
import { RoleContext, UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminRole, setAdminRole] = useContext(RoleContext);
    const history = useHistory();

    console.log(adminRole);
    if(adminRole !== true){
        setAdminRole(false)
    }

     
    const handleLogOut =()=> {
        setLoggedInUser({});
        setAdminRole({});
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
                            <FontAwesomeIcon icon={faThList} /> <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/bookinglist" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span>All Bookings</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/newbooking" className="text-white">
                            <FontAwesomeIcon icon={faCartPlus} /> <span>Add New Booking</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                        </Link>
                    </li>
                </div>

                <div className='admin-functions' style={{display: adminRole ? 'block' : 'none'  }}>
                    <div className='mb-3'>
                        <FontAwesomeIcon style={{ fontSize: '25px' }} className='text-white' icon={faCog} /> <span style={{ fontSize: '20px' }} className='text-white'> Admin Section</span>
                    </div>

                    <hr style={{ border: '1px solid white' }} />

                    <li>
                        <Link to="/updateservice" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>All Bookings/ Update</span>
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