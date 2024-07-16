import React from 'react';
import { facilities } from '../constants';

const Facilities = () => {
    return (
        <div className='px-4 pt-20 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-36'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                <h2 className='max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto text-pretty'>
                    {facilities.title}
                </h2>
                <p className='text-base text-gray-700 md:text-lg'>{facilities.subtitle}</p>
            </div>
            <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3'>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[0].content}</p>
                </div>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[1].content}</p>
                </div>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[2].content}</p>
                </div>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[3].content}</p>
                </div>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[4].content}</p>
                </div>
                <div className='p-5 duration-300 transform bg-white border-l-8 rounded shadow-sm hover:-translate-y-2 hover:shadow-lg'>
                    <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
                        <svg className='w-10 h-10 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                            <polygon
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                fill='none'
                                points='29 13 14 29 25 29 23 39 38 23 27 23'
                            />
                        </svg>
                    </div>
                    <p className='mb-2 font-bold leading-snug text-lg'>{facilities.items[5].content}</p>
                </div>
            </div>
            {/* <div className="text-center">
      <a
        href="/"
        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
      >
        boton extra
      </a>
    </div> */}
        </div>
    );
};

export default Facilities;
