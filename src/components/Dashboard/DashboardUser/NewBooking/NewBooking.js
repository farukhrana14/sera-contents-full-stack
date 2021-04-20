import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext, UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import './NewBooking.css';
import { useHistory } from 'react-router-dom';




const NewBooking = () => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleSelect = (data) => {
        setSelectedService(data);
        history.push('/homepagebooking')
        console.log(data);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar />
                </div>


                <div className="col-md-8 col-sm-12 col-12" style={{ display: 'block' }}>
                    <h2 className='d-flex justify-content-center text-brand mt-3'>Select A Service</h2>

                    <div className='service-detail'>
                        <table className='mb-3 table table-striped' style={{ margin: 'auto', width: '850px' }}>
                            <tbody>
                                
                                <tr className="table-header border border-success" >
                                    <th className="name-column" style={{width: 'auto'}} >Service Name</th>
                                    <th className="price-column" style={{width: 'auto'}}>Price</th>
                                    <th className="action-column " style={{width: 'auto'}}>Select</th>
                                </tr>
                                {

                                    services && services.map(service =>
                                        <tr key={service._id} className="border border-success" >
                                            <td>{service.name}</td>
                                            <td>${service.price}</td>
                                            <td><FontAwesomeIcon onClick={() => handleSelect(service)} className="select-icon" color="#A8A8A8" size='2x' icon={faCheckCircle} /> </td>
                                        </tr>
                                    )

                                }
                            </tbody>

                        </table>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBooking;