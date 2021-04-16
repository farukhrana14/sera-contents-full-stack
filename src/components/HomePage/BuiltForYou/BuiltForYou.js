import React from 'react';

const BuiltForYou = () => {
    return (
        <div className='w-75  mt-5 mx-auto pb-5'>
            <h2 className='text-center'>We Make Content Creation Simple</h2>
            <div  className='marketPlace card-deck row bg-light'>
                
                    <div className='card shadow-sm col-md-6 col-12 mt-5 text-brand text-center market-info'>
                        <h3 className='mt-5'>Content Marketplace</h3>
                        <p className='text-secondary'>Leverage our self-serve platform to connect with and buy website content from over 6,000 professional writers.</p>
                    </div>
                    <div className='card shadow-sm col-md-6 col-12 mt-5 text-brand text-center market-info'>
                        <h3 className='mt-5'>Enterprise Content Services</h3>
                        <p className='text-secondary'>Partner with our experienced enterprise team for a fully managed solution that delivers publish-ready content at any scale.</p>
                    </div>    
                

            </div>
        </div>
    );
};

export default BuiltForYou;