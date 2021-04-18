import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "../Payment/CardForm";

const stripePromise = loadStripe("pk_test_51Ie1EyKlUpwuQ4YkZUFJpIMrHNjaScQ0n45xgIZLi5qmuaEHjmkzpFihp5Ka8rIfeOOKK9aN1YhkJ6TKAIb3bKNQ00EsAKprFM");


const PaymentProcess = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePaymentSuccess={handlePaymentSuccess} ></CardForm>
        </Elements>
    );
};

export default PaymentProcess;