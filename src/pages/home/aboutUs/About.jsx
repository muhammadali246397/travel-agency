import React from 'react';
import about from '../../../assets/about.png'
import { BsArrowRight } from "react-icons/bs";

const About = () => {
    return (
        <div className='bg-[#F0F0F0]'>
            <div className='container mx-auto px-10'>
                <div className='relative '>
                    <div className='flex absolute -top-28'>
                        <div data-aos='fade-down' className='grid grid-cols-4 gap-4 w-5/6 mr-4  bg-white h-52 p-4'>
                            <div className='my-auto'>
                                <h3 className='text-xl font-semibold text-[#FB8E26] mt-5'>Name</h3>
                                <input type="text" placeholder='Your Name' className='  focus:outline-none py-5 border-b-2 hover:border-[#FB8E26]' />
                            </div>
                            <div className='my-auto'>
                                <h3 className='text-xl font-semibold text-[#FB8E26] mt-5'>Destination</h3>
                                <input type="text" placeholder='Destination' className='  focus:outline-none py-5 border-b-2 hover:border-[#FB8E26]' />
                            </div>
                            <div className='my-auto'>
                                <h3 className='text-xl font-semibold text-[#FB8E26] mt-5'>Tour Days</h3>
                                <input type="text" placeholder='Tour Days' className='  focus:outline-none py-5 border-b-2 hover:border-[#FB8E26]' />
                            </div>
                            <div className='my-auto'>
                                <button className='bg-[#FB8E26] text-white px-8 transition-all py-3 rounded-3xl hover:bg-[#021F41] text-lg 
                    '>Book Now</button>
                            </div>
                        </div>
                        <div data-aos-delay="500" data-aos='fade-up' className='ml-10'>
                            <img src={about} alt="" />
                            <div className='bg-[#021F41] py-5 w-full'>
                                <h1 className='text-5xl font-semibold tracking-wider text-white text-center'>60K+</h1>
                                <h4 className='text-white text-xl text-center'>Happy Customers</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-40 pb-20 w-3/6 '>
                    <h3 data-aos="fade-right" className='font-semibold text-3xl mb-4 text-[#FB8E26]'>About Us</h3>
                    <h2 data-aos='fade-right' data-aos-delay="500" className='text-5xl tracking-wide mb-8'>With Us, You Are <br /> Always In For A Pleasant Surprise</h2>
                    <p data-aos-delay="" data-aos='fade-up' className='text-lg text-[#A1A1A1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    <button data-aos="zoom-in-left" className='bg-[#FB8E26] text-white px-8 transition-all flex items-center py-3 mt-5 rounded-3xl hover:bg-[#021F41] text-lg 
                    '>Learn More <span ><BsArrowRight className='ml-3 font-semibold'></BsArrowRight></span> </button>
                </div>
            </div>
        </div>
    );
};

export default About;