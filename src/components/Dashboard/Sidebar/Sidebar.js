import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserShield, faNewspaper, faTasks, faShoppingCart, faPlusSquare, faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';


const Sidebar = () => {
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
                    <div className='admin-functions'>
                    <div className='mb-3'>
                    <FontAwesomeIcon style={{fontSize: '25px'}} className='text-white' icon={faCog} /> <span style={{fontSize: '20px'}} className='text-white'> Admin Section</span>
                    </div>
                    
                    <hr style={{border: '1px solid white'}}/>
                        
                        <li>
                            <Link to="/bookinglist" className="text-white" >
                                <FontAwesomeIcon icon={faTasks} /> <span>Bookings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminreviews" className="text-white" >
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addservice" className="text-white" >
                                <FontAwesomeIcon icon={faNewspaper} /> <span>Add Services</span>
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
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
        </div>
    );
};

export default Sidebar;