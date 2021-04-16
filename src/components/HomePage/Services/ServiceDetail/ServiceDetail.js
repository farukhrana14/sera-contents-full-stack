import React from 'react';

const ServiceDetail = ({service}) => {
// console.log(service);

    return (
        <div className='col-md-4 text-center'>
            <img style={{height: '100px'}} src={service.img} alt=''/>
            <h5 className='mt-3 mb-3'>{service.name}</h5>
            <p > {service.description} </p>
        </div>
    );
};

export default ServiceDetail;