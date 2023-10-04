import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'
import banner3 from '../../../assets/banner/banner3.jpg'
import icon1 from '../../../assets/icons/icon1.png'
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'
import icon4 from '../../../assets/icons/icon4.png'
import './Banner.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({

  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: true,
  anchorPlacement: 'top-bottom',

});

const Banner = () => {
  const images = [
    banner1, banner2, banner3
  ];
  return (
    <div>
       <div className='relative'>
      <Zoom scale={0.7} indicators={false}>
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img className='md:h-[1000px]' style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />

          </div>
        ))}
      </Zoom>
      <div className='absolute top-[25%] z-10 left-[28%] py-5  mx-auto w-[700px] px-5  text-center'>
        <h2 data-aos="fade-down" className='text-9xl font-extrabold text-transparent tracking-widest text-outline'>EXPLORE</h2>
        <h2 data-aos="fade-up" className='tracking-widest text-8xl font-bold text-white'>THE WORLD</h2>
        <div data-aos="zoom-in">
          <p className='text-white text-lg tracking-wide mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis quae provident facere minima</p>
          <button className='bg-[#FB8E26] text-white px-8 mt-5 transition-all py-3 rounded-3xl hover:bg-[#021F41] text-lg hover:animate-bounce '>Discover Now</button>
        </div>


      </div>
      <div className='bg-[#021F41] bg-opacity-50 absolute bottom-0 left-0 w-[100%] z-10'>
        <div className='grid grid-cols-4 gap-4 container mx-auto px-10 pt-10'>
          <div className='hover:border-b-4 transition-all border-[#FB8E26]'>
            <img data-aos="zoom-out-left" className='hover:animate-bounce' src={icon1} alt="" />
            <h4 className='text-2xl text-white mt-4'>Self Guide</h4>
            <p data-aos="fade-up" className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum!</p>
          </div>
          <div className='hover:border-b-4 transition-all border-[#FB8E26]'>
            <img data-aos="zoom-out-left" src={icon2} alt="" className='hover:animate-bounce' />
            <h4 className='text-2xl text-white mt-4'>Back Packer</h4>
            <p data-aos="fade-up" className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum!</p>
          </div>
          <div className='hover:border-b-4 transition-all border-[#FB8E26]'>
            <img data-aos="zoom-out-left" src={icon3} alt="" className='hover:animate-bounce' />
            <h4 className='text-2xl text-white mt-4'>Best Services</h4>
            <p data-aos="fade-up" className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum!</p>
          </div>
          <div className='hover:border-b-4 transition-all pb-5 border-[#FB8E26]'>
            <img data-aos="zoom-out-left" src={icon4} alt="" className='hover:animate-bounce' />
            <h4 className='text-2xl text-white mt-4'>Affordable Prices</h4>
            <p data-aos="fade-up" className='text-white '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nostrum!</p>
          </div>

        </div>
      </div>
    </div>
 
      <div className='bg-[#0A1727]  h-40 mx-auto'>
          
      </div>
    </div>
 );
   
};

export default Banner;