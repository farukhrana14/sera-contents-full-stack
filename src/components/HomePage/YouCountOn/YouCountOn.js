import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


const YouCountOn = () => {
    return (
        <div className='count-section mt-5 mb-5 pb-5 pt-3' style={{backgroundColor: '#0088FF'}}>
          <h1 className='text-center text-white pb-5'>A Content Writing Company You Can Count On</h1>
          <div className='d-flex justify-content-around'>
            <div className='row'>
                <div className='count-div col-md-4 col-12 p-5 border'>
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: 'white'}} end={5000}/><span style={{fontSize: '4rem', fontWeight: '600', color: 'white'}} >+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: 'white'}}>US Based Writers</p>
                </div>
                <div className='col-md-4 col-12 p-5 border'>
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: 'white'}} end={6000}/><span style={{fontSize: '4rem', fontWeight: '600', color: 'white'}}>+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: 'white'}}>Business Served</p>

                </div>
                <div className='col-md-4 col-12 p-5 border' >
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: 'white'}} end={100}/><span style={{fontSize: '4rem', fontWeight: '600', color: 'white'}}>M+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: 'white'}}>Words Written</p>

                </div>
            </div>
            </div>
            <p className='text-center mt-3' style={{fontSize: '1.3rem', color: 'white'}}>Ready to see why industry-leading companies trust us to write their content? Create your free account today.</p>
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-green text-white">GET STARTED NOW</Link>
            </div>
        
        </div>
    );
};

export default YouCountOn;