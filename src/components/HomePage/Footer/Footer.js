import React from 'react';
import './Footer.css';
import FooterColumns from './FooterColumns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const contentServices = [
    { name: "Article Writing", link: "/services" },
    { name: "Blog Posts", link: "/services" },
    { name: "Copy Writing", link: "/services" },
    { name: "Web Contents", link: "/services" },
    { name: "Product Description", link: "/services" }
]

const serviceForWhom = [
    { name: "Affiliate Marketers", link: "/services" },
    { name: "Agencies", link: "/services" },
    { name: "Company Blogs", link: "/services" },
    { name: "Content Marketers", link: "/services" },
    { name: "Online Publishers", link: "/services" }
]

const resources = [
    { name: "Quality", link: "/services" },
    { name: "Automate", link: "/services" },
    { name: "Blog", link: "/services" },
    { name: "Writer Resources", link: "/services" },
    { name: "Frequently Asked Questions", link: "/services" }
]

const aboutUs = [
    { name: "Press", link: "/services" },
    { name: "Team", link: "/services" },
    { name: "Careers", link: "/services" },
    { name: "Partners", link: "/services" },
    { name: "Our Vision", link: "/services" }
]

const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },

]



const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColumns key={1} menuTitle="Content Creation Services" menuItems={contentServices} />
                    <FooterColumns key={2} menuTitle="Who We Help" menuItems={serviceForWhom} />
                    <FooterColumns key={3} menuTitle="Resources" menuItems={resources} />
                    <FooterColumns key={4} menuTitle="About Us" menuItems={aboutUs}/>
                    <FooterColumns key={4} menuTitle="Our Address" menuItems={ourAddress}>
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon style={{color: '#3b5998', backgroundColor: 'white', border: '1px solid #3b5998'}} className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//youtube.com"><FontAwesomeIcon style={{color: 'red', backgroundColor: 'white', border: '1px solid red'}} className="icon" icon={faYoutube} /></a></li>
                                <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon style={{color: '#00acee', backgroundColor: 'white', border: '1px solid #00acee'}} className="icon" icon={faTwitter} /></a></li>
                            </ul>
                            
                        </FooterColumns>
                </div>
                    <div className="copyRight text-center">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer; 