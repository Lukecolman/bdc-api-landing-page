import React from 'react';
import { heroBanner } from '../constants';
import ButtonScroll from './buttonScroll';
import { AiOutlineFullscreen, AiOutlinePieChart, AiOutlineThunderbolt } from 'react-icons/ai';
import { useAnimate, stagger, motion } from 'framer-motion';

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
                    <div className='max-w-xl mb-12 sm:mb-6'>
                        <h1
                            className='mb-6 text-bdc-blue-700 text-4xl font-extrabold !leading-tight tracking-tight  sm:text-6xl md:mx-auto max-w-[900px]'
                            dangerouslySetInnerHTML={{ __html: heroBanner.title }}
                        />
                        <p className='text-base text-bdc-blue-700 md:text-xl max-w-3xl text-pretty'>
                            {heroBanner.content}
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8'>
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
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                stagger={(0.5, { startDelay: 1 })}
                className='hidden lg:flex justify-center h-full lg:w-2/3 xl:w-1/2 relative '>
                <div className='h-full w-full lg:h-auto lg:max-w-[500px]'>
                    <img
                        src='./images/heroIcon.svg'
                        className='w-full h-full max-w-xl lg:h-auto lg:max-w-[500px] '
                        alt=''
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, startDelay: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute flex items-center left-28 bottom-8 max-w-40 min-w-[150px] justify-center'>
                        <AiOutlineFullscreen className='w-[45px] h-[45px] text-bdc-green' />
                        <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                            Maximizá
                            <br />
                            Recursos
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, startDelay: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute  flex items-center left-1/3 -top-4  max-w-40 min-w-[150px] justify-center'>
                        <AiOutlinePieChart className='w-[45px] h-[45px] text-bdc-green' />
                        <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                            Reducí
                            <br />
                            Costos
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, startDelay: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className='bg-white py-3 px-4 gap-2 rounded-lg shadow-md absolute right-20 top-28 flex items-center max-w-40 min-w-[150px] justify-center'>
                        <AiOutlineThunderbolt className='w-[45px] h-[45px] text-bdc-green' />
                        <span className='text-base text-bdc-blue font-semibold leading-[1.15]'>
                            Optimizá
                            <br />
                            Tiempos
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
