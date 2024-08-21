import React from 'react';
import { integration } from '../constants';
import { AiOutlineBulb, AiOutlineSolution, AiOutlineApi, AiOutlineRocket } from 'react-icons/ai';

const Integration = () => {
    const items = [
        { icon: <AiOutlineBulb className='w-8 h-8 text-bdc-green-300' />, content: integration.items[0].content },
        { icon: <AiOutlineSolution className='w-8 h-8 text-bdc-green-300' />, content: integration.items[1].content },
        { icon: <AiOutlineApi className='w-8 h-8 text-bdc-green-300' />, content: integration.items[2].content },
        { icon: <AiOutlineRocket className='w-8 h-8 text-bdc-green-300' />, content: integration.items[3].content },
    ];

    return (
        <section className='w-full bg-bdc-gray-100/25'>
            <div className='font-inter px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-32'>
                <div className='flex flex-col lg:pl-16 justify-between items-center lg:flex-row'>
                    <div className='sm:max-w-2xl lg:pr-16 mb-6 lg:mb-0'>
                        <h5
                            className='text-4xl mb-2 sm:text-6xl font-extrabold leading-tight text-balance'
                            dangerouslySetInnerHTML={{ __html: integration.title }}
                        />
                        <p className='mb-6 text-base text-bdc-gray-700 md:text-xl text-pretty'>{integration.content}</p>
                    </div>
                    <div className='flex flex-col shadow-2xl  md:max-w-xl lg:max-w-md'>
                        {items.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className=' flex gap-6 max-w-xl lg:max-w-md py-8 px-4 md:px-12 border-b-2 border-bdc-gray-100 duration-150 bg-white transition-all group hover:bg-bdc-green-400 hover:border-bdc-green-400'>
                                    <div className='flex items-center justify-center min-w-16 h-16 mb-4 rounded-full shadow-md group-hover:bg-white transition-all'>
                                        {item.icon}
                                    </div>
                                    <p
                                        className={`text-sm md:text-base leading-snug font-semibold text-bdc-gray-700 group-hover:text-white lg:max-w-[280px] text-pretty transition-all md:pt-3 lg:pt-0 ${
                                            index === 0 ? 'lg:pt-3' : ''
                                        }`}>
                                        {item.content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;
