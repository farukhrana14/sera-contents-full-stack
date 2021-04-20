import React, { useContext } from 'react';
import './NavBar.css';
import {Link, useHistory} from 'react-router-dom';
import brandImage from '../../../images/brand.png';
import { RoleContext, UserContext } from '../../../App';

const NavBar = () => {
 
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [adminRole, setAdminRole] = useContext(RoleContext);
   const history = useHistory();

   const handleLogInOut = () => {
      loggedInUser.email ? handleLogOut() : history.push('/login')
   }

   const handleLogOut = () => {
      setLoggedInUser({});
      setAdminRole({});
      sessionStorage.setItem('token', '');
      history.push('/')
   }

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
         <Link onClick={handleLogInOut} className="nav-link mr-5 text-white" to="/login">{loggedInUser.email ? 'Logout' : 'Login'}</Link>
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