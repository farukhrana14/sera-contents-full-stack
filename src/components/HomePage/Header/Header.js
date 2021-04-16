import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../../../images/header-main.png'; 
import Typewriter from 'typewriter-effect';
import './Header.css';

const Header = () => {
    return (
        <div style={{height: '600px', backgroundColor: '#0088FF'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1 col-sm-6 col-12 offset-sm-1'>
                <h1 style={{color: '#FFFFFF'}}>We write amazing</h1>
                <p className='text-white'>Hire the Web's Best Content Writers With Our Professional Content Writing Services</p>
                <Typewriter style={{fontSize: 'xx-large', color: 'lightgreen'}} options={{strings: ['ARTICLES', 'BLOGS', 'PRODUCT DESCRIPTION', 'CATEGORY'], autoStart: true, loop: true, }}/> 
                <Link to="/" className="btn btn-green text-white">START NOW</Link>
            </div>
            <div className='col-md-6 col-sm-6 col-12'>
                <img src={headerImg} alt="" className='img-fluid'/>
            </div>
        </div>
    );
};

export default Header;