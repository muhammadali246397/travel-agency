import React from 'react';
import Navbar from '../pages/share/navbar/Navbar';
import Footer from '../pages/share/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;