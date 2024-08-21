import React from 'react';
import { solutions } from '../constants';
import ButtonScroll from './buttonScroll';
import Tabs from './Tabs';

const Solutions = () => {
    return (
        <>
            <div className='px-4 py-20 md:px-0 w-full bg-bdc-blue md:py-20 overflow-x-hidden font-inter border-b-[40px] border-bdc-green'>
                <div
                    className='font-inter md:mt-24 max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12'
                    id='solutions'>
                    <h2
                        className='max-w-lg mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl mx-auto'
                        dangerouslySetInnerHTML={{ __html: solutions.title }}
                    />
                </div>
                <div className='grid md:grid-rows-2  md:grid-cols-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-10 gap-7'></div>
                <Tabs />
                <div className='font-inter text-center mt-20 md:mt-10 md:pb-14'>
                    <ButtonScroll
                        information={solutions}
                        bgColor={'bg-bdc-green'}
                        textColor='text-white'
                        hoverColor={'hover:bg-bdc-green-400'}
                    />
                </div>
            </div>
        </>
    );
};

export default Solutions;
