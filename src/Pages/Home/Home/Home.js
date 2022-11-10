import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Services from '../HomeSevices/Services';
import Offer from '../Offer/Offer';

const Home = () => {
    //update title
    useTitle("home")
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Offer></Offer>
        </div>
    );
};

export default Home;