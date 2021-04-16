import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {


    return (
        <div className='col-md-4 text-center myCard'>
            <img style={{height: '100px'}} src={service.img} alt=''/>
            <h5 className='mt-3 mb-3'>{service.name}</h5>
            <p className='service-description mb-5' > {service.description} </p>
            <div className='row justify-content-center'>
                <div className='d-flex'>
                <Link to={{pathname:"/booking", state: {service: service.name}}}> <button className='btn btn-green mt-5 mb-5'>BOOK NOW</button>  </Link>


                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;