import React from 'react';
import Navbar from '../../share/navbar/Navbar';
import Banner from '../banner/Banner';
import About from '../aboutUs/About';
import Offer from '../offer/Offer';
import Tour from '../tour/Tour';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Offer></Offer>
            <Tour></Tour>
            
        </div>
    );
};

export default Home;