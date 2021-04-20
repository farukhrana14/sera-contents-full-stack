import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import articleImg from '../../../images/services/articles.svg';
import blogImg from '../../../images/services/blog-posts.svg';
import prdImg from '../../../images/services/product-description.svg';


const localServicesData = [
    {   
        name: "Article Writing",
        description: "Hire the web’s best article writers with our professional writing service. Quality content on demand. Strong long-form articles that communicate your brands message to your audience.",
        price: 100,
        photoURL: articleImg
    },
    {   
        name: "Blog Posts",
        description: "Hire the webs best bloggers with our blog post writing service. Order content for your blog that will drive traffic and delight readers.",
        price: 150,
        photoURL: blogImg
    },
    {   
        name: "Product Description",
        description: "Hire expert product description writers with our copywriting service. Use our on-demand product description writing service trusted by leading ecommerce companies.",
        price: 250,
        photoURL: prdImg
    }


]


const Services = () => {
    const [selectedService, setSelectedService] = useState({});
    let [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://fathomless-river-81170.herokuapp.com/allservices')
        .then(res=> res.json())
        .then(data => setServices(data))
        
    }, [])
    
    console.log(services);

    if (services.length === 0){
        services = localServicesData;
    }


    return (
        <section id='services' className='pt-3'  style={{backgroundColor: '#0088FF'}}>
            <div className='text-center'>
                <h3 className='text-white'>OUR SERVICES</h3>
                <h2 className='text-white'>Create Any Type of Content</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className = 'w-75 row mt-3'>
                    {
                        services && services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;