import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const YouCountOn = () => {
    return (
        <div className='count-section mt-5 mb-5'>
          <h1 className='text-center text-brand'>A Content Writing Company You Can Count On</h1>
          <div className='d-flex justify-content-center  w-90'>
            <div className='row'>
                <div className='count-div col-md-4 col-12 p-5 border'>
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: '#005fb2'}} end={5000}/><span style={{fontSize: '4rem', fontWeight: '600', color: '#005fb2'}} >+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: '#005fb2'}}>US Based Writers</p>
                </div>
                <div className='col-md-4 col-12 p-5 border'>
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: '#0088ff'}} end={6000}/><span style={{fontSize: '4rem', fontWeight: '600', color: '#0088ff'}}>+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: '#0088ff'}}>Business Served</p>

                </div>
                <div className='col-md-4 col-12 p-5 border' >
                    <CountUp style={{fontSize: '4rem', fontWeight: '600', color: '#005fb2'}} end={100}/><span style={{fontSize: '4rem', fontWeight: '600', color: '#005fb2'}}>M+</span>
                    <p style={{fontSize: '1.2rem', fontWeight: '400', color: '#005fb2'}}>Words Written</p>

                </div>
            </div>
            </div>
            <p className='text-center' style={{fontSize: '1.3rem', color: '#4cabff'}}>Ready to see why industry-leading companies trust us to write their content? Create your free account today.</p>
            <div className="d-flex justify-content-center">
                <Link to="/" className="btn btn-green text-white">GET STARTED NOW</Link>
            </div>
        
        </div>
    );
};

export default YouCountOn;