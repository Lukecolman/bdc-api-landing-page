import React from 'react';
import { heroBanner } from '../constants';

const Hero = () => {
    return (
        <div className='flex font-inter flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-14 md:px-0 shadow-2xl shadow-bdc-gray-200 overflow-hidden  gradien relative'>
            <div className='flex flex-col items-center max-w-7xl md:px-8'>
                {' '}
                <div>
                    {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
              Brand new
            </p> */}
                </div>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl flex flex-col items-center '>
                    <h1
                        className=' mb-6 text-gray-800 text-3xl font-extrabold !leading-tight tracking-tight  sm:text-6xl md:mx-auto text-balance'
                        dangerouslySetInnerHTML={{ __html: heroBanner.title }}
                    />
                    <p className='text-base text-gray-700 md:text-xl max-w-5xl text-balance'>{heroBanner.content}</p>
                </div>
                <a
                    href={heroBanner.button.link}
                    className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-bdc-green hover:bg-bdc-green-400 focus:shadow-outline focus:outline-none mb-24'>
                    {heroBanner.button.text}
                </a>
            </div>
            {/* <div className="relative">
                <div
                  className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600 via-amber-600 to-indigo-600 opacity-50 blur-2xl"
                  ></div>
                <img
              src={heroBanner.imageUrl.img}
              className='w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-2xl bg-green-500'
              alt={heroBanner.imageUrl.alt}
          />
            </div> */}

            <div className=' flex w-full  items-center justify-center rounded-lg text-slate-300'>
                <img
                    src={heroBanner.imageUrl.img}
                    className='w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-2xl bg-green-500'
                    alt={heroBanner.imageUrl.alt}
                />
            </div>
            <div className='absolute w-full translate-y-1/2 -z-10 rounded-full -inset-0 scale-90  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-bdc-green-50 to-bdc-green-50 opacity-30 blur-[200px]' />
            {/* <div
                  className="absolute w-full translate-y-1/3 -z-10 rounded-full -inset-0 scale-90  bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-bdc-green to-transparent opacity-100 blur-[100px]   bg-violet-700"
                /> */}
        </div>
    );
};

export default Hero;
