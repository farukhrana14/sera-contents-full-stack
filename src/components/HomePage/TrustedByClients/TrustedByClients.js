import React from 'react';
import './TrustedByClients.css';
import appleImg from '../../../images/clients/apple.png';
import audiImg from '../../../images/clients/audi.png';
import fedexImg from '../../../images/clients/fedex.png';
import gucciImg from '../../../images/clients/gucci.png';
import rolexImg from '../../../images/clients/rolex.png';
import volvoImg from '../../../images/clients/volvo.png';
import whatsappImg from '../../../images/clients/whatsapp.png';
import youtubeImg from '../../../images/clients/youtube.png';
import TrustedSingleClient from './TrustedSingleClient';


const clientsData = [
    {
        name: 'Apple',
        img: appleImg
    },
    {
        name: 'Audi',
        img: audiImg
    },
    {
        name: 'FedEx',
        img: fedexImg
    },
    {
        name: 'Gucci',
        img: gucciImg
    },
    {
        name: 'Rolex',
        img: rolexImg
    },
    {
        name: 'Volvo',
        img: volvoImg
    },
    {
        name: 'WhatsApp',
        img: whatsappImg
    },
    {
        name: 'YouTube',
        img: youtubeImg
    }
]

const TrustedByClients = () => {
    return (
        <section className='clientsTrusted'>
            <div  className='container'>
                <div className='d-flex justify-content-center'>   
                    <div  className='row pt-5'>
                    {
                        clientsData.map(client => <TrustedSingleClient client={client} key={client.name}></TrustedSingleClient>)
                    }                        
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default TrustedByClients;