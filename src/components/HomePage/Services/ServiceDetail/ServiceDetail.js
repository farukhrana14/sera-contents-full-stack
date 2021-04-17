import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import { AnimationWrapper } from 'react-hover-animation';

const ServiceDetail = ({service}) => {


    return (
        <AnimationWrapper className='card col-md-4 text-center bg-light mb-5 px-3 pt-3'>
        
            <img style={{height: '100px'}} src={service.img} alt=''/>
            <h4 className='text-brand mt-3 mb-3'>{service.name}</h4>
            <p className='service-description mb-5' > {service.description} </p>
            <h3 className='text-brand' style={{fontSize: '40px', fontWeight: '700'}}  >${service.price}</h3>
            <div className='row justify-content-center'>
                <div className='d-flex'>
                <Link to={{pathname:"/booking", state: {service: service.name}}}> <button className='btn btn-green mt-5 mb-5'>BOOK NOW</button>  </Link>


                </div>
            </div>
        
        </AnimationWrapper>
    );
};

export default ServiceDetail;