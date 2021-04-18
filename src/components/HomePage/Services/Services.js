import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';




const Services = () => {
    const [selectedService, setSelectedService] = useState({});
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allServices')
        .then(res=> res.json())
        .then(data => setServices(data))
        
    }, [])
   

    return (
        <section id='services' className='pt-3'  style={{backgroundColor: '#0088FF'}}>
            <div className='text-center'>
                <h3 className='text-white'>OUR SERVICES</h3>
                <h2 className='text-white'>Create Any Type of Content</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className = 'w-75 row mt-3'>
                    {
                        services && services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;