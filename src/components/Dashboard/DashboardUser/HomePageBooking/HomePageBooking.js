import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './HomePageBooking.css'; 
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { ServiceContext } from '../../../../App';
import { useHistory } from 'react-router-dom';



  
const HomePageBooking = () => {
    const { register, handleSubmit, errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext); 
    const [shippingData, setShippingData] = useState();
    const history = useHistory();

    console.log(selectedService);

    const onSubmit = data => {
        setShippingData(data);
        console.log(data);
    };
 
 
 const handlePaymentSuccess = (paymentInfo) => {
    const orderDetails = {name: loggedInUser.name, email: loggedInUser.email, orderTime:new Date(), service: selectedService.name, price: selectedService.price, card: paymentInfo?.cardInfo?.brand, status: 'pending'}; 
        
    fetch ('http://localhost:5000/addOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    })
    .then (res=> res.json())
    .then (data => {
        if(data){
            alert('Your Order is placed successfully');
            history.push('/')
            
        }
    })
}

    
 
 


    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            
            
            <div   className="col-md-8 col-sm-12 col-12" style={{display: shippingData ? 'none' : 'block'}}>
                <h2 className='d-flex justify-content-center text-brand mt-3'>Book Your Service</h2>
                
                    <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                             <input type="text" ref={register({ required: true })} name="name" defaultValue={loggedInUser.name || ''} placeholder='Your Name' className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                             <input type="text" ref={register({ required: true })} name="email" defaultValue={loggedInUser.email} placeholder='Your Email' className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="service" defaultValue={selectedService.name} placeholder='Write a Service Name' className="form-control"  />
                        </div>

                        <div className="form-group">
                             <input type="text" ref={register({ required: true })} name="price" defaultValue={selectedService.price}  className="form-control"  />
                        </div>
                        
                        <h3 className='text-brand'> Your Shipping Address</h3>
                        <div className="form-group">
                             <input type="text" ref={register({ required: true })} name="shippingName" placeholder='Name of Receipient' className="form-control" />
                              {errors.shippingName && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                             <input type="textarea" ref={register({ required: true })} name="addressLine1" placeholder='City Address' className="form-control" />
                              {errors.addressLine1 && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                             <input type="text" ref={register({ required: true })} name="addressLine2" placeholder='Country' className="form-control" />
                              {errors.addressLine2 && <span className="text-danger">This field is required</span>}
                        </div>


                        <div className="form-group text-right">
                            <input type="submit" className="btn btn-primary"></input>
                        </div>
                    </form>
            </div>

            
            <div  className="col-md-8 col-sm-12 col-12 mx-auto" style={{display: shippingData ? 'block' : 'none'}}
>
                <h2 className='mx--5 text-brand mt-3'>Payment Option</h2>

                <PaymentProcess handlePaymentSuccess={handlePaymentSuccess} ></PaymentProcess>
                

            </div>


        </div>
    );
};

export default HomePageBooking; 