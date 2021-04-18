import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewSingle from './ReviewSingle';
import wilsonImg from '../../../images/reviews/wilson.png';
import kazukiImg from '../../../images/reviews/kazukiBaba.png';
import arthurImg from '../../../images/reviews/arthurOrduna.png';
import logo1 from '../../../images/clients/fedex.png';
import logo2 from '../../../images/clients/whatsapp.png';
import logo3 from '../../../images/clients/youtube.png';

const reviewsData = [
    {
        userName: 'Will Jansen',
        userImg: wilsonImg,
        coLogo: logo1,
        description: 'Collaboration with Sera Content has enabled us to unlock tremendous potential in multiple areas of our operations. Their insightful contents about complex problems and ability to execute improvements based on these insights has been impressive.'
    },
    {
        userName: 'Kazuki Baba',
        userImg: kazukiImg,
        coLogo: logo2,
        description: 'Our partnership with Sera Content enables us to accelerate and de-risk the launch of new sites and services and to optimize existing ones. Within days, we are able to drive loads of traffics to our sites across critical business metric.'
    },
    {
        userName: 'Arthur Orduna',
        userImg: arthurImg,
        coLogo: logo3,
        description: 'Sera Contents provides impactful contents that allows us to measure KPIs, and in turn improve our toolkit of services for future projects. The company’s work with us is crucial for developing new sites and drive traffics serve.'
    }
]

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://sera-contents.herokuapp.com/allReviews')
        .then(res=> res.json())
        .then(data => setReviews(data))

    },[])
    console.log(reviews);

    return (
        <section className="reviews my-5 pt-5">
        <div className="container">
          <div className="section-header text-center">
            <h5 className="text-uppercase">Reviews</h5>
            <h2 className="text-brand" >From Our Customers</h2>
          </div>
          <div className="card-deck mt-5">
                    {
                        reviews && reviews.map(review => <ReviewSingle review={review} key={review.userName}> </ReviewSingle>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;