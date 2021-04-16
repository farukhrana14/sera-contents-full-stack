import React from 'react';

const ReviewSingle = (props) => {
    const {userName, userImg, coLogo, description} = props.review;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={userImg} alt="" width="100"/>
                <div>
                    <h6 className="text-brand">{userName}</h6>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{description}</p>
                <img className="mx-3" src={coLogo} alt="" width="50"/>
            </div>
            
       </div>
    );
};

export default ReviewSingle;