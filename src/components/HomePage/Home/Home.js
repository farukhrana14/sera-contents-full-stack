import React, { createContext, useContext, useState } from 'react';
import BuiltForYou from '../BuiltForYou/BuiltForYou';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TrustedByClients from '../TrustedByClients/TrustedByClients';
import YouCountOn from '../YouCountOn/YouCountOn';



const Home = () => {

   

    return (
        <div>
            <NavBar/>
            <Header/>
            <BuiltForYou/>
            <Services/>
            <TrustedByClients/>
            <YouCountOn/>
            <Reviews/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;