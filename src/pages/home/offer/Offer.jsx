import React from 'react';
import cuple from '../../../assets/cuple.jpg'
import turist from '../../../assets/turist.jpg'
import './Offer.css'
import 'animate.css';


const Offer = () => {
    return (
        <div className='bg-[#021F41] py-20'>
            <div className='container px-10 mx-auto'>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <h2 data-aos='fade-down' className='text-[#FB8E26] text-3xl mb-6'>Special Offer For Couples</h2>
                        <p data-aos='fade-up' className='text-[#A1A1A1] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut et dolore magna aliqua.</p>
                        <div className='relative effect'>
                            <img data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className='offerimg' src={cuple} alt="" />
                            <div className='overlay px-10'>
                                <div className=''>
                                    <h2 className='text-3xl font-semibold text-white'>Discount up to 50%</h2>
                                    <p className='text-white text-lg mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi est ex omnis cupiditate harum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative effect'>
                            <img data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className='offerimg' src={turist} alt="" />
                            <div className='overlay px-10'>
                                <div className=''>
                                    <h2 className='text-3xl font-semibold text-white'>Discount up to 50%</h2>
                                    <p className='text-white text-lg mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt alias dignissimos minus maiores pariatur!</p>
                                </div>
                            </div>
                        </div>
                        <h2 data-aos-delay='500' data-aos='fade-down' className='text-[#FB8E26] text-3xl mt-6'>Special Offer On Adventure Tours</h2>
                        <p data-aos-delay='500' data-aos='fade-up' className='text-[#A1A1A1] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut et dolore magna aliqua. </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Offer;