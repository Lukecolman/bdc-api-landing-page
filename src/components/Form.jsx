import React from 'react';
import { form } from '../constants';

const Form = () => {
    return (
        <div className='overflow-hidden bg-gray-900 md:px-8'>
            <div className='px-3.5 py-16 mx-auto  md:max-w-full  md:px-24 lg:px-8 lg:py-20 bg-green-400'>
                <div className='flex flex-col items-center justify-between'>
                    <div className='w-full text-center bg-red-400'>
                        <h2 className='max-w-lg mx-auto mb-6 font-sans text-3xl font-semibold text-white sm:text-5xl sm:leading-none bg-blue-500'>
                            {form.title}
                        </h2>
                        {/* <p className='max-w-xl mb-4 text-base text-gray-400 md:text-lg'>
                            sub text
                        </p> */}
                        <div className='relative  bg-violet-600 max-w-md mx-auto'>
                            <form>
                                <div className='mb-1 sm:mb-2 text-xs'>
                                    <div className='grid grid-cols-2 gap-x-5 gap-y-3'>
                                        <input
                                            placeholder='Nombre y Apellido'
                                            required
                                            type='text'
                                            className='flex-grow w-full h-9 px-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline'
                                            id='name'
                                            name='name'
                                        />

                                        <input
                                            placeholder='Email'
                                            required
                                            type='email'
                                            className='flex-grow w-full h-9 px-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline'
                                            id='email'
                                            name='email'
                                        />

                                        <input
                                            placeholder='Teléfono'
                                            required
                                            type='tel'
                                            className='flex-grow w-full h-9 px-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline'
                                            id='phone'
                                            name='phone'
                                        />

                                        <input
                                            placeholder='CUIT'
                                            required
                                            type='text'
                                            className='flex-grow w-full h-9 px-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline'
                                            id='cuit'
                                            name='cuit'
                                        />
                                    </div>
                                    <input
                                        placeholder='Razón Social'
                                        required
                                        type='text'
                                        className='flex-grow w-full h-9 px-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline mt-3'
                                        id='razonSocial'
                                        name='razonSocial'
                                    />

                                    <textarea
                                        placeholder='Solución de tu interés'
                                        required
                                        className='flex-grow w-full h-9 p-3.5  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-green-400 focus:outline-none focus:shadow-outline mt-3 min-h-20'
                                        id='message'
                                        name='message'
                                    />
                                </div>
                                <div className='mt-6 mb-2 sm:mb-4'>
                                    <button
                                        type='submit'
                                        className='inline-flex items-center justify-center w-full h-9 px-6 font-bold tracking-wide text-black transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none'>
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
