import React from 'react';
import cuple from '../../../assets/cuple.jpg'
import turist from '../../../assets/turist.jpg'

const Offer = () => {
    return (
        <div className='bg-[#021F41] py-20'>
            <div className='container px-10 mx-auto'>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                        <h2 data-aos='fade-down' className='text-[#FB8E26] text-3xl mb-6'>Special Offer For Couples</h2>
                        <p data-aos='fade-up' className='text-[#A1A1A1] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut et dolore magna aliqua.</p>
                        <div>
                            <img className='hover:scale-90 transition-transform' src={cuple} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className='hover:scale-90 transition-transform' src={turist} alt="" />
                            <div>
                                
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