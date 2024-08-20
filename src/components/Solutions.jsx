import React from 'react';
import { solutions } from '../constants';
import ButtonScroll from './buttonScroll';
import Tabs from './Tabs';

/* TODO: DESTACAR ESTA SECCION Y PRESENTAR UNA PROPUESTA DIFERENTE, QUIEREN UN COLOR DE FONDO Y OTROS DETALLES */
const Solutions = () => {
    return (
        <>
            <div className='w-full bg-bdc-blue py-20 overflow-x-hidden font-inter border-b-[40px] border-bdc-green'>
                <div
                    className='font-inter mt-24 max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12'
                    id='solutions'>
                    <h2
                        className='max-w-lg mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl mx-auto'
                        dangerouslySetInnerHTML={{ __html: solutions.title }}
                    />
                </div>
                <div className='grid md:grid-rows-2  md:grid-cols-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-10 gap-7'>
                    {/* <div className=' bg-white font-inter px-4 py-8 rounded-3xl md:px-24 lg:px-16 lg:py-16 col-span-1 relative'>
                        <div className='bg-bdc-green-200 p-8 h-40 w-40 rounded-full shadow-lg absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2'>
                            <img src={solutions.items[0].img} alt={solutions.items[0].title} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h5 className='mb-4 text-5xl font-extrabold bg-gradient-to-b from-bdc-green-200 to-bdc-green bg-clip-text leading-tight text-transparent'>
                                {solutions.items[0].title}
                            </h5>
                            <p className='mb-4 text-bdc-gray-600 text-xl text-pretty font-semibold'>
                                {solutions.items[0].content}
                            </p>
                            <ul className='list-disc pl-5 text-bdc-gray-700 text-base'>
                                {Object.values(solutions.items[0].bullet[0]).map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className='mb-3 text-pretty'>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className=' bg-white font-inter px-4 py-8 rounded-3xl md:px-24 lg:px-16 lg:py-16 col-span-1 relative'>
                        <div className='bg-bdc-green-200 p-8 h-40 w-40 rounded-full shadow-lg absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2'>
                            <img src={solutions.items[1].img} alt={solutions.items[0].title} />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h5 className='mb-4 text-5xl font-extrabold bg-gradient-to-b from-bdc-green-200 to-bdc-green bg-clip-text leading-tight text-transparent'>
                                {solutions.items[1].title}
                            </h5>
                            <p className='mb-4 text-bdc-gray-600 text-xl text-pretty font-semibold'>
                                {solutions.items[1].content}
                            </p>
                            <ul className='list-disc pl-5 text-bdc-gray-700 text-base'>
                                {Object.values(solutions.items[1].bullet[0]).map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className='mb-3 text-pretty'>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className=' bg-white font-inter px-4 py-8 rounded-3xl md:px-24 lg:px-16 lg:py-16 col-span-2'>
                        <div className='grid grid-cols-2 justify-center gap-7'>
                            <div className='pr-32'>
                                <img src={solutions.items[2].img} alt={solutions.items[2].title} className='w-full' />
                            </div>
                            <div>
                                <h5 className='mb-4 text-5xl font-extrabold bg-gradient-to-b from-bdc-green-200 to-bdc-green bg-clip-text leading-none text-transparent text-pretty'>
                                    {solutions.items[2].title}
                                </h5>
                                <p className='mb-4 text-bdc-gray-600 text-xl text-pretty font-semibold'>
                                    {solutions.items[2].content}
                                </p>
                                <ul className='list-disc pl-5 text-bdc-gray-700 text-base'>
                                    {Object.values(solutions.items[2].bullet[0]).map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className='mb-3 text-pretty'>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Tabs />
                <div className='font-inter text-center mt-10 pb-14'>
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
