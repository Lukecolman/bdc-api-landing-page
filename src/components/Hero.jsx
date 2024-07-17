import React from 'react';
import { heroBanner } from '../constants';

const Hero = () => {
    
    return (
        <div className='flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-20 md:px-0'>
            <div className='flex flex-col items-center max-w-7xl md:px-8'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-8 flex flex-col gap-2 items-center'>
                    <h2 className=' mb-6 font-sans text-3xl font-bold leading-loose tracking-tight text-gray-900 sm:text-6xl md:mx-auto text-balance'>
                    {heroBanner.title}
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg max-w-5xl'>
                    {heroBanner.content}
                    </p>
                </div>
                <a
                    href={heroBanner.button.link}
                    className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none mb-12'
                    >
                    {heroBanner.button.text}
                </a>
            </div>
            <img
                src={heroBanner.imageUrl.img}
                className='w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md'
                alt={heroBanner.imageUrl.alt}
            />
        </div>
    );
};

export default Hero;
