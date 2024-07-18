import React from 'react';
import { bdcApplicants } from '../constants';

const BDCApplicants = () => {
    const applicant = bdcApplicants[0];

    return (
        <div className='font-inter px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12 '>
                {/* <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
          Brand new
        </p>
      </div> */}
                <h2 className='max-w-7xl mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-6xl md:mx-auto text-balance '>
                    {applicant.title}
                </h2>
                <p className='max-w-2xl mx-auto text-base text-gray-700 md:text-lg  text-pretty'>
                    {applicant.subtitle}
                </p>
            </div>
            <div className='grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2'>
                <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
                    <div className='mr-4'>
                        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full shadow-md'>
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
                    </div>
                    <div>
                        <h6 className='mb-3 text-xl font-bold leading-5'> {applicant.item1[0].title}</h6>
                        <p className='mb-3 text-sm text-gray-900'>{applicant.item1[0].content}</p>
                    </div>
                </div>
                <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
                    <div className='mr-4'>
                        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full shadow-md'>
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
                    </div>
                    <div>
                        <h6 className='mb-3 text-xl font-bold leading-5'>{applicant.item2[0].title}</h6>
                        <p className='mb-3 text-sm text-gray-900'>{applicant.item2[0].content}</p>
                    </div>
                </div>
                <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
                    <div className='mr-4'>
                        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full shadow-md'>
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
                    </div>
                    <div>
                        <h6 className='mb-3 text-xl font-bold leading-5'>{applicant.item3[0].title}</h6>
                        <p className='mb-3 text-sm text-gray-900'>{applicant.item3[0].content}</p>
                    </div>
                </div>
                <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
                    <div className='mr-4'>
                        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full shadow-md'>
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
                    </div>
                    <div>
                        <h6 className='mb-3 text-xl font-bold leading-5'>{applicant.item4[0].title}</h6>
                        <p className='mb-3 text-sm text-gray-900'>{applicant.item4[0].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BDCApplicants;
