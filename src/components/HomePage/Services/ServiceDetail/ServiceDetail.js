import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
import { AnimationWrapper } from 'react-hover-animation';
import { ServiceContext } from '../../../../App';

const ServiceDetail = ({ service }) => {

    const [selectedService, setSelectedService] = useContext(ServiceContext);

    const handleClick = (service) => {
        setSelectedService(service);
    }




    return (
        <AnimationWrapper className='card my-card col-md-3 text-center bg-white mb-3 mx-3 px-3 pt-5'>

            <img className='img-fluid card-img-top' style={{ height: '100px', width: '80px', margin: 'auto' }} src={service.photoURL} alt='' />
            <div className='card-body bg-white'>
                <h4 className='card-title text-brand mb-3'>{service.name}</h4>
                <p className='card-text service-description' > {service.description} </p>
            </div>
            <div className='card-footer my-footer bg-white'>
                <h3 className='text-brand' style={{ fontSize: '40px', fontWeight: '700' }}  >${service.price}</h3>
                <div className='row justify-content-center'>
                    <div className='d-flex'>
                        <Link to={{ pathname: "/homepagebooking", state: {} }}> <button onClick={() => handleClick(service)} className='btn btn-green mt-5 mb-5'>BOOK NOW</button>  </Link>


                    </div>
                </div>
            </div>

        </AnimationWrapper>
    );
};

export default ServiceDetail;