import './CardForm.css';
import React from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';


const CardForm = ({handlePaymentSuccess}) => {

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(''); 
    const [paymentSuccess, setPaymentSuccess] = useState(''); 

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentSuccess(null);
        setPaymentError(error.message)
        alert('Your payment is not successful.', paymentError)
        
      } else {
        const paymentInfo = {
          paymentId: paymentMethod.id,
          billingDetails: paymentMethod.billing_details,
          cardInfo: paymentMethod.card 
        }
        console.log('[PaymentMethod]', paymentInfo);
        setPaymentError(null);
        setPaymentSuccess(paymentInfo);
        handlePaymentSuccess(paymentInfo);
        console.log(paymentInfo);

      }
    };
  
    return (
        <div className='mt-5 p-5 col-md-10' style={{border: '1px solid #0088FF', borderRadius: '5px'}}>
            <h3 className='pb-3'>Pay by Stripe</h3>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <br/>
          <button className='btn btn-primary' type="submit" disabled={!stripe}>
           Pay Now
          </button>
        </form>
      {
        paymentError && <p className='mt-5' style={{color: 'red'}}>{paymentError}</p>
      }
      {
        paymentSuccess && <p className='mt-5' style={{color: 'green'}}>Thank you! Your payment is successful.</p>
      }
      </div>
    );
};

export default CardForm;