import React from 'react';
import { opportunities } from '../constants';
import ButtonScroll from './buttonScroll';
import {
    AiOutlineBarChart,
    AiOutlineThunderbolt,
    AiOutlineFileProtect,
    AiOutlineControl,
    AiOutlineDatabase,
    AiOutlineSafety,
} from 'react-icons/ai';

const Opportunities = () => {
    return (
        <div className='font-inter px-4 pt-20 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32 lg:pt-32'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20'>
                <h2
                    className='max-w-2xl mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 md:max-w-xl sm:text-6xl md:mx-auto text-pretty'
                    dangerouslySetInnerHTML={{ __html: opportunities.title }}
                />
                <p className='text-base text-bdc-gray-700 md:text-xl'>{opportunities.subtitle}</p>
            </div>
            <div className='grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3'>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineBarChart className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[0].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[0].content}
                    </p>
                </div>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineThunderbolt className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[1].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[1].content}
                    </p>
                </div>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineFileProtect className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[2].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[2].content}
                    </p>
                </div>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineControl className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[3].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[3].content}
                    </p>
                </div>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineDatabase className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[4].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[4].content}
                    </p>
                </div>
                <div className='p-5 duration-200 transform bg-white border-l-4 border-bdc-green text-bdc-gray-700 rounded shadow-md hover:-translate-y-2 hover:shadow-lg flex flex-col'>
                    <div className='w-fit p-3 mb-4 rounded-full shadow-md'>
                        <AiOutlineSafety className='w-7 h-7 text-bdc-green-300' />
                    </div>
                    <span className='font-bold text-xl mb-2'>{opportunities.items[5].title}</span>
                    <p className='mb-2 font-regular leading-snug text-base text-bdc-gray-600'>
                        {opportunities.items[5].content}
                    </p>
                </div>
            </div>
            <div className='text-center'>
                <ButtonScroll information={opportunities} />
            </div>
        </div>
    );
};

export default Opportunities;
