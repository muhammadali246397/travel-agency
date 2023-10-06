import React from 'react';
import Navbar from '../../share/navbar/Navbar';
import Banner from '../banner/Banner';
import About from '../aboutUs/About';
import Offer from '../offer/Offer';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Offer></Offer>
            
        </div>
    );
};

export default Home;