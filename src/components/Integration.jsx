// import { useState, useRef } from 'react';

import React from 'react';
import { integration } from '../constants';
import { AiOutlineBulb, AiOutlineSolution, AiOutlineApi, AiOutlineRocket } from 'react-icons/ai';

const Integration = () => {
    // const sectionRef = useRef();
    return (
        <section className='w-full bg-bdc-gray-100/25'>
        <div className='font-inter px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='flex flex-col pl-16 justify-between items-center lg:flex-row'>
                {/* TITLE */}
                <div className='max-w-2xl pr-16'>
                    <h5
                        className='mb-6 text-6xl font-extrabold leading-tight text-balance'
                        dangerouslySetInnerHTML={{ __html: integration.title }}
                    />
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
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-bdc-gray-100 duration-150 bg-white transition-all group hover:bg-bdc-green-400'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full shadow-md group-hover:bg-white transition-all'>
                            <AiOutlineBulb className='w-8 h-8 text-bdc-green-300' />
                        </div>
                        <p className='text-md leading-snug font-semibold text-bdc-gray-700 group-hover:text-white lg:max-w-[280px] text-pretty transition-all'>
                            {integration.items[0].content}
                        </p>
                    </div>
                    {/* ITEM 2 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-bdc-gray-100 duration-150 bg-white transition-all group hover:bg-bdc-green-400'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full shadow-md group-hover:bg-white transition-all'>
                            <AiOutlineSolution className='w-8 h-8 text-bdc-green-300' />
                        </div>
                        <p className='text-md leading-snug font-semibold text-bdc-gray-700 group-hover:text-white lg:max-w-[280px] text-pretty transition-all'>
                            {integration.items[1].content}
                        </p>
                    </div>
                    {/* ITEM 3 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-bdc-gray-100 duration-150 bg-white transition-all group hover:bg-bdc-green-400'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full shadow-md group-hover:bg-white transition-all'>
                            <AiOutlineApi className='w-8 h-8 text-bdc-green-300' />
                        </div>
                        <p className='text-md leading-snug font-semibold text-bdc-gray-700 group-hover:text-white lg:max-w-[280px] text-pretty transition-all'>
                            {integration.items[2].content}
                        </p>
                    </div>
                    {/* ITEM 4 */}
                    <div className='flex gap-6 max-w-md py-8 px-12 border-b-2 border-bdc-gray-100 duration-150 bg-white transition-all group hover:bg-bdc-green-400'>
                        <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full shadow-md group-hover:bg-white transition-all'>
                            <AiOutlineRocket className='w-8 h-8 text-bdc-green-300' />
                        </div>
                        <p className='text-md leading-snug font-semibold text-bdc-gray-700 group-hover:text-white lg:max-w-[280px] text-pretty transition-all'>
                            {integration.items[3].content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Integration;
