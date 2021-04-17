import React from 'react';
import articleImg from '../../../images/services/articles.svg';
import blogImg from '../../../images/services/blog-posts.svg';
import productImg from '../../../images/services/product-description.svg';
import ServiceDetail from './ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Article Writing',
        img: articleImg,
        description: 'Hire the web’s best article writers with our professional writing service. Quality content on demand. Strong long-form articles that communicate your brands message to your audience.',
        price: 100
    },
    {
        name: 'Blog Posts',
        img: blogImg,
        description: 'Hire the webs best bloggers with our blog post writing service. Order content for your blog that will drive traffic and delight readers.',
        price: 150
    },
    {
        name: 'Product Desciption',
        img: productImg,
        description: 'Hire expert product description writers with our copywriting service. Use our on-demand product description writing service trusted by leading ecommerce companies.',
        price: 200
    }
]


const Services = () => {
    return (
        <section id='services' className='pt-3'  style={{backgroundColor: '#0088FF'}}>
            <div className='text-center'>
                <h3 className='text-white'>OUR SERVICES</h3>
                <h2 className='text-white'>Create Any Type of Content</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className = 'w-75 row mt-3'>
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;