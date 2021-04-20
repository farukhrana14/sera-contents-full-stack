import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewSingle from './ReviewSingle';




const Reviews = () => {

    let [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-river-81170.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    console.log(reviews);

   

    return (
        <section className="reviews my-5 pt-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-uppercase">Reviews</h5>
                    <h2 className="text-brand" >From Our Customers</h2>
                </div>
                <div className='d-flex justify-content-center'> 
                    <div className="w-75 row mt-3">
                        {
                            reviews && reviews.map(review => <ReviewSingle review={review} key={review.userName}> </ReviewSingle>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;