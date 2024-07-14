import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0'>
            <div className='flex flex-col items-center max-w-2xl md:px-8'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8 bg-red-500'>
                    <div>
                        <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                            Brand new
                        </p>
                    </div>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='relative inline-block'>
                            <span className='relative'>The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem
                        aperiam, eaque ipsa quae.
                    </p>
                </div>
                <a
                    href='/'
                    class='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none mb-12'
                    aria-label='Sign up'
                    title='Sign up'>
                    API CTA
                </a>
            </div>
            <img
                src='https://picsum.photos/765/438'
                className='w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md'
                alt=''
            />
        </div>
    );
};

export default Hero;
