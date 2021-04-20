import React from 'react';

const ReviewSingle = (props) => {
    const {userName, photoURL, description} = props.review;
    return (
        <div className="card col-md-4 shadow-sm mb-5">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={photoURL} alt="" width="100"/>
                <div>
                    <h6 className="text-brand">{userName}</h6>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default ReviewSingle;