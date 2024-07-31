import React from 'react';
import { solutions } from '../constants';
import ButtonScroll from './buttonScroll';

/* TODO: DESTACAR ESTA SECCION Y PRESENTAR UNA PROPUESTA DIFERENTE, QUIEREN UN COLOR DE FONDO Y OTROS DETALLES */
const Solutions = () => {
    return (
        <>
            <div
                className='font-inter mt-24 max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12'
                id='solutions'>
                <h2
                    className='max-w-lg mb-6 text-3xl font-extrabold leading-tight tracking-tight text-bdc-gray-900 sm:text-6xl mx-auto text-balance'
                    dangerouslySetInnerHTML={{ __html: solutions.title }}
                />
                {/* {solutions.title} */}
                {/* </h2> */}
                {/* <p className="text-base text-gray-700 md:text-lg">
        content
      </p> */}
            </div>
            {/* SOLUTION 1 */}
            <div className='font-inter px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div className='relative'>
                        <img
                            className='object-cover w-full h-56 rounded-3xl shadow-lg sm:h-[420px] sm:w-[520px] sm:mx-auto'
                            src={solutions.items[0].img}
                            alt={solutions.items[0].alt}
                        />
                        <div className='absolute h-96 w-96 -z-10 top-0 right-0 rounded-full bg-gradient-to-b from-bdc-green-500  to-bdc-blue-500 opacity-40 blur-3xl' />
                    </div>

                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-5xl font-extrabold leading-none'>{solutions.items[0].title}</h5>
                        <p className='mb-2 text-bdc-gray-900 text-xl text-balance'>{solutions.items[0].content}</p>
                        <ul className='list-disc pl-5 text-bdc-gray-700 text-lg'>
                            {Object.values(solutions.items[0].bullet[0]).map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className='mb-2'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* SOLUTION 2 */}
            <div className='font-inter px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-5xl font-extrabold leading-none'>{solutions.items[1].title}</h5>
                        <p className='mb-2 text-bdc-gray-900 text-xl text-balance'>{solutions.items[1].content}</p>
                        <ul className='list-disc pl-5 text-bdc-gray-700 text-lg'>
                            {Object.values(solutions.items[1].bullet[0]).map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className='mb-2'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='relative'>
                        <img
                            className='object-cover w-full h-56 rounded-3xl shadow-lg sm:h-[420px] sm:w-[520px] sm:mx-auto z-50 '
                            src={solutions.items[1].img}
                            alt={solutions.items[1].alt}
                        />
                        <div className='absolute h-96 w-96 -z-10 top-0 rounded-full bg-gradient-to-r from-bdc-green-500  to-bdc-blue-500 opacity-40 blur-3xl' />
                    </div>
                </div>
            </div>
            {/* SOLUTION 3 */}
            <div className='font-inter px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div className='relative'>
                        <img
                            className='object-cover w-full h-56 rounded-3xl shadow-lg sm:h-[420px] sm:w-[520px] sm:mx-auto'
                            src={solutions.items[2].img}
                            alt={solutions.items[2].alt}
                        />
                        <div className='absolute h-96 w-96 -z-10 bottom-0 right-0 rounded-full bg-gradient-to-r from-bdc-green-500  to-bdc-blue-500 opacity-50 blur-3xl' />
                    </div>

                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-5xl font-extrabold leading-none'>{solutions.items[2].title}</h5>
                        <p className='mb-2 text-bdc-gray-900 text-xl text-balance'>{solutions.items[2].content}</p>
                        <ul className='list-disc pl-5 text-bdc-gray-700 text-lg'>
                            {Object.values(solutions.items[2].bullet[0]).map((bullet, bulletIndex) => (
                                <li key={bulletIndex} className='mb-2'>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='font-inter text-center mt-10 pb-14'>
                <ButtonScroll information={solutions} />
            </div>
        </>
    );
};

export default Solutions;
