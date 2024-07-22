import React from 'react';
import { form } from '../constants';

const Form = () => {
    return (
        <div className='font-inter overflow-hidden md:px-10 mt-20 bg-bdc-green-500 bg-gradient-to-br from-bdc-green-50 via-bdc-green to-bdc-green-500'>
            <div className='px-3.5 py-16 mx-auto rounded-xl w-full md:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
                <div className='flex flex-col items-center justify-between'>
                    <div className='w-full text-center '>
                        <h2 className='max-w-lg mx-auto mb-10 text-3xl font-semibold  sm:text-5xl sm:leading-none text-white'>
                            {form.title}
                        </h2>
                        {/* <p className='max-w-xl mb-4 text-base text-gray-400 md:text-lg'>
                            sub text
                        </p> */}
                        <div className='relative  max-w-md mx-auto'>
                            <form>
                                <div className='mb-1 sm:mb-2 text-xs'>
                                    <div className='grid grid-cols-2 gap-x-5 gap-y-3'>
                                        <input
                                            placeholder='Nombre y Apellido'
                                            required
                                            type='text'
                                            className='flex-grow w-full h-9 px-3.5 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white '
                                            id='name'
                                            name='name'
                                        />

                                        <input
                                            placeholder='Email'
                                            required
                                            type='email'
                                            className='flex-grow w-full h-9 px-3.5 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white required'
                                            id='email'
                                            name='email'
                                        />

                                        <input
                                            placeholder='Teléfono'
                                            required
                                            type='tel'
                                            class='flex-grow w-full h-9 px-3.5 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white required'
                                            id='phone'
                                            name='phone'
                                        />

                                        <input
                                            placeholder='CUIT'
                                            required
                                            type='text'
                                            className='flex-grow w-full h-9 px-3.5 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white required'
                                            id='cuit'
                                            name='cuit'
                                        />

                                        <input
                                            placeholder='Razón Social'
                                            required
                                            type='text'
                                            className='col-span-2 h-9 px-3.5 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white required'
                                            id='razonSocial'
                                            name='razonSocial'
                                        />

                                        <textarea
                                            placeholder='Solución de tu interés'
                                            required
                                            className='col-span-2 h-9 p-3.5  transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white min-h-20 resize-none'
                                            id='message'
                                            name='message'
                                        />
                                    </div>
                                </div>
                                <div className='mt-6 mb-2 sm:mb-4'>
                                    <button
                                        type='submit'
                                        className='inline-flex items-center justify-center w-full h-10 px-6 font-bold tracking-wide text-bdc-gray-800 transition duration-200 rounded shadow-md bg-white focus:shadow-outline focus:outline-none'>
                                        {form.buttonText}
                                    </button>
                                </div>
                                {/* <p className='text-xs text-gray-600 sm:text-sm'>
                                    policies
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
