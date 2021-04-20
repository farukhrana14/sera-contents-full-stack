import React from 'react';
import {Link} from 'react-scroll'
import headerImg from '../../../images/header-main.png'; 
import Typewriter from 'typewriter-effect';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#0088FF'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1 col-sm-6 col-12 offset-sm-3'>
                <img src={logo} alt=""/>
                
                <h1 style={{color: '#FFFFFF'}}>We write amazing</h1>
                <p className='text-white'>Hire the Web's Best Content Writers With Our Professional Content Writing Services</p>
                <Typewriter style={{fontSize: 'xx-large', color: 'lightgreen'}} options={{strings: ['ARTICLES', 'BLOGS', 'PRODUCT', 'CATEGORY'], autoStart: true, loop: true, }}/> 
                <Link to="services" spy={true} smooth={true} className="btn btn-green text-white mb-5">START NOW</Link>
            </div>
            <div className='col-md-6 col-sm-6 col-12 header-img mb-3 mt-3'>
                <img src={headerImg} alt="" className='img-fluid'/>
            </div>
        </div>
    );
};

export default Header;