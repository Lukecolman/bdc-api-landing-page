import React from 'react';
import { integration } from '../constants';

const Integration = () => {
    return (
        <div className='font-inter px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col pl-16 justify-between items-center lg:flex-row'>
                {/* TITLE */}
                <div className='max-w-2xl pr-16'>
                    <h5 className='mb-6 text-6xl font-extrabold leading-tight text-balance'>{integration.title}</h5>
                    {/* <p className="mb-6 text-gray-900">
          CONTENIDO
        </p> */}
                    {/* <div className="flex items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
          >
            CTA
          </button>
        </div> */}
                </div>
                <div className='flex flex-col shadow-2xl md:max-w-xl lg:max-w-md'>
                    {/* ITEM 1 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50'>
                            <svg className='w-12 h-12 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                                <polygon
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                                />
                            </svg>
                        </div>
                        <p className='text-md leading-snug font-semibold text-gray-700 lg:max-w-[280px] text-pretty'>
                            {integration.items[0].content}
                        </p>
                    </div>
                    {/* ITEM 2 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50'>
                            <svg className='w-12 h-12 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                                <polygon
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                                />
                            </svg>
                        </div>
                        <p className='text-md leading-snug font-semibold text-gray-700 lg:max-w-[280px] text-pretty'>
                            {integration.items[1].content}
                        </p>
                    </div>
                    {/* ITEM 3 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50'>
                            <svg className='w-12 h-12 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                                <polygon
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                                />
                            </svg>
                        </div>
                        <p className='text-md leading-snug font-semibold text-gray-700 lg:max-w-[280px] text-pretty'>
                            {integration.items[2].content}
                        </p>
                    </div>
                    {/* ITEM 4 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50'>
                            <svg className='w-12 h-12 text-green-400' stroke='currentColor' viewBox='0 0 52 52'>
                                <polygon
                                    strokeWidth='3'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    fill='none'
                                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                                />
                            </svg>
                        </div>
                        <p className='text-md leading-snug font-semibold text-gray-700 lg:max-w-[280px] text-pretty'>
                            {integration.items[3].content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Integration;
