import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../images/header-main.png'; 

const Header = () => {
    return (
        <div style={{height: '600px', backgroundColor: '#0088FF'}} className='row d-flex align-items-center'>
            <div className='col-md-4 col-sm-6 col-12 offset-md-1'>
                <h1 style={{color: '#FFFFFF'}}>We write amazing</h1>
                <p className='text-white'>Hire the Web's Best Content Writers With Our Professional Content Writing Services</p>
                <Link to="/" className="btn btn-brand text-white">GET APPOINTMENT</Link>
            </div>
            <div className='col-md-6 col-sm-6 col-12'>
                <img src={headerImg} alt="" className='img-fluid'/>
            </div>
        </div>
    );
};

export default Header;