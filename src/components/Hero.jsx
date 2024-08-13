import React from 'react';
import { heroBanner } from '../constants';
import ButtonScroll from './buttonScroll';
import { AiOutlineFullscreen, AiOutlinePieChart, AiOutlineThunderbolt } from 'react-icons/ai';

/* TODO: ADD EXTRA TEXT AT THE BOTTOM OF THE IMAGE IN THE HERO "imageFooter" */
const Hero = () => {
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const yOffset = -75;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className='flex px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full font-inter'>
            <div className='max-w-xl mx-auto lg:max-w-screen-xl pt-2'>
                <div className='mb-16 lg:max-w-lg lg:mb-0'>
                    <div className='max-w-xl mb-6'>
                        <h1
                            className='mb-6 text-bdc-blue-700 text-3xl font-bold !leading-tight tracking-tight  sm:text-6xl md:mx-auto max-w-[900px]'
                            dangerouslySetInnerHTML={{ __html: heroBanner.title }}
                        />
                        <p className='text-base text-bdc-blue-700 md:text-xl max-w-3xl text-pretty'>
                            {heroBanner.content}
                        </p>
                    </div>
                    <div className='flex items-center gap-8'>
                        <ButtonScroll information={heroBanner} />
                        <a
                            href={heroBanner.button2.url}
                            target='_blank'
                            className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none border-4 border-bdc-green text-bdc-green hover:border-bdc-green-400 hover:text-bdc-green-400`}>
                            {heroBanner.button2.text}
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center h-full lg:w-2/3 xl:w-1/2 relative'>
                <img
                    src='./images/bannerImg-green.svg'
                    className='w-full h-full max-w-xl lg:h-auto lg:max-w-[462px] '
                    alt=''
                />

                <div className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute flex items-center left-28 -bottom-2 max-w-40 min-w-[150px] justify-center'>
                    <AiOutlineFullscreen className='w-[45px] h-[45px] text-bdc-green' />
                    <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                        Maximizá
                        <br />
                        Recursos
                    </span>
                </div>
                <div className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute  flex items-center left-1/3 -top-10  max-w-40 min-w-[150px] justify-center'>
                    <AiOutlinePieChart className='w-[45px] h-[45px] text-bdc-green' />
                    <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                        Reducí
                        <br />
                        Costos
                    </span>
                </div>
                <div className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute right-16 top-40 flex items-center max-w-40 min-w-[150px] justify-center'>
                    <AiOutlineThunderbolt className='w-[45px] h-[45px] text-bdc-green' />
                    <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                        Optimizá
                        <br />
                        Tiempos
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
