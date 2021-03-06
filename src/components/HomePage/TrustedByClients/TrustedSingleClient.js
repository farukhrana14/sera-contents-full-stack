import React from 'react';

const TrustedSingleClient = ({client}) => {
    return (
        <div className='col-md-3 col-12 mb-5 text-center'>
            <h5 className='mt-3 mb-3 text-brand' style={{fontSize: '40px', fontWeight: '600'}}>{client.name}</h5>
            <img style={{height: '100px'}} src={client.img} alt=''/>

        </div>
    );
};

export default TrustedSingleClient;