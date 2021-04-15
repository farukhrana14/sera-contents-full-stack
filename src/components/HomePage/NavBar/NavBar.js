import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import brandImage from '../../../images/brand.png';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <Link className="navbar-brand" to="/"><img style={{width: '40px', marginLeft: '50px'}} src={brandImage} alt=""/>  </Link>

  <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
         <Link className="nav-link mr-5 text-white" to="/">Home</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link mr-5 text-white" to="/dashboard">Admin</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link mr-5 text-white" to="#">Blogs</Link>
      </li>
      <li className="nav-item">
         <Link className="nav-link mr-5 text-white" to="#">Contact Us</Link>
      </li>
      
      
    </ul>
 
  </div>
</nav>
    );
};

export default NavBar;