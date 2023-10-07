import React from 'react';
import bg1 from '../../../assets/bg1.jpg'
import card1 from '../../../assets/card/card1.png'
import card2 from '../../../assets/card/card2.png'
import card3 from '../../../assets/card/card3.png'
import card4 from '../../../assets/card/card4.png'
import card5 from '../../../assets/card/card5.png'
import card6 from '../../../assets/card/card6.png'
import { BsArrowRight } from 'react-icons/bs';

const Tour = () => {
    const turistPlaces = [
        {
            image: card1 ,
            title: 'Explore Beauty Of Turkey',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        },
        {
            image:  card2 ,
            title: 'Walk At The Street In Sweden',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        },
        {
            image:  card3 ,
            title: 'Indonesian Sea Beach',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        },
        {
            image:  card4 ,
            title: 'Feel The Nature In Switzerland',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        },
        {
            image: card5 ,
            title: 'Explore The Skyscrapers In Dubai',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        },
        {
            image: card6 ,
            title: 'Street View Of Paris',
            dis: 'Lorem ipsum dolor sit amet, adipiscing elit,  labore  aliqua.'
        }
    ]
    return (
        <div style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }} className='py-20 hero-overlay'>
            <div className='container mx-auto px-10'>
                <div className='mb-20'>
                    <h2 className='text-3xl font-semibold text-[#FB8E26]'>Tours</h2>
                    <h1 className='text-5xl font-semibold tracking-wide my-5'>
                        Live Your Life Through Travel
                    </h1>
                    <div className='flex justify-between items-center mb-8'>
                        <p className='text-lg w-8/12 text-[#A1A1A1]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius facilis eveniet eos, asperiores libero. Beatae esse voluptatibus pariatur perferendis?</p>

                        <button className='bg-[#FB8E26] text-white px-8 mt-5 transition-all py-3 rounded-3xl hover:bg-[#021F41] text-lg hover:animate-bounce '>View All Packges</button>
                    </div>

                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {turistPlaces.map((place, index) =><div key={index} >
                        <div>
                            <div className="card rounded-none mb-14 card-compact w-96 bg-base-100">
                                <img src={place.image} className='hover:scale-90 transition-all' alt="" />
                                <div className="p-4">
                                    <h2 className="text-xl mt-2">{place.title}</h2>
                                    <p className='text-lg text-[#A1A1A1] my-4'>{place.dis}</p>
                                    <div className="card-actions justify-start">
                                        <button className=' text-[#FB8E26] flex items-center rounded-3xl pb-4 hover:text-[#021F41] text-lg'>Learn More <span ><BsArrowRight className='ml-3 font-semibold'></BsArrowRight></span> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default Tour;