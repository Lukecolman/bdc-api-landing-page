import React, { useState } from 'react';
import { form } from '../constants';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        cuit: '',
        razonSocial: '',
        message: '',
    });

    const [resultMessage, setResultMessage] = useState('');
    const [resultClass, setResultClass] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResultMessage('Por favor, espere...');
        setResultClass('text-bdc-gray-600 bg-white/80 font-bold rounded-full w-fit mx-auto px-4 border-2 py-1 ');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'bb78a49b-f193-4731-a22a-495aee780078',
                    from_name: formData.name,
                    subject: 'Nueva Consulta - BDC Conecta',
                    'Nombre y Apellido': formData.name,
                    Email: formData.email,
                    Teléfono: formData.phone,
                    CUIT: formData.cuit,
                    'Razón Social': formData.razonSocial,
                    Mensaje: formData.message,
                }),
            });

            const json = await response.json();

            if (response.status === 200) {
                setResultMessage('Mensaje enviado con éxito.');
                setResultClass('text-bdc-green bg-white/80 font-bold rounded-full w-fit mx-auto px-4 border-2 py-1 ');
            } else {
                setResultMessage('Hubo un error al enviar el mensaje.');
                setResultClass('text-red-500 bg-white/80 font-bold rounded-full w-fit mx-auto px-4 border-2 py-1 ');
            }
        } catch (error) {
            setResultMessage('Algo salió mal. Inténtalo de nuevo.');
            setResultClass('text-red-500 bg-white/80 font-bold rounded-full w-fit mx-auto px-4 border-2 py-1');
        }

        setFormData({
            name: '',
            email: '',
            phone: '',
            cuit: '',
            razonSocial: '',
            message: '',
        });

        setTimeout(() => {
            setResultMessage('');
        }, 4000);
    };

    return (
        <div
            className='font-inter overflow-hidden md:px-10 bg-bdc-green-500 bg-gradient-to-br from-bdc-green-50 via-bdc-green to-bdc-green-500'
            id='contact'>
            <div className='px-3.5 py-16 mx-auto rounded-xl w-full md:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
                <div className='flex flex-col items-center justify-between'>
                    <div className='w-full text-center'>
                        <h2 className=' mx-auto mb-10 text-4xl font-semibold sm:text-6xl sm:leading-none text-white'>
                            {form.title}
                        </h2>
                        <div className='relative max-w-lg mx-auto'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-1 sm:mb-2 text-base'>
                                    <div className='grid grid-cols-2 gap-x-5 gap-y-3'>
                                        <input type='hidden' name='from_name' value='Mission Control' />

                                        <input
                                            placeholder='Nombre y Apellido'
                                            type='text'
                                            className='flex-grow w-full h-10 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white'
                                            id='name'
                                            name='name'
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            placeholder='Email'
                                            type='email'
                                            className='flex-grow w-full h-10 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white'
                                            id='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            placeholder='Teléfono'
                                            type='tel'
                                            className='flex-grow w-full h-10 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white'
                                            id='phone'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            placeholder='CUIT'
                                            type='text'
                                            className='flex-grow w-full h-10 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white'
                                            id='cuit'
                                            name='cuit'
                                            value={formData.cuit}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            placeholder='Razón Social'
                                            type='text'
                                            className='col-span-2 h-10 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white'
                                            id='razonSocial'
                                            name='razonSocial'
                                            value={formData.razonSocial}
                                            onChange={handleChange}
                                        />

                                        <textarea
                                            placeholder='Solución de tu interés'
                                            className='col-span-2 h-40 pt-2 px-4 transition duration-200 bg-white bg-opacity-10 border-2 border-white/35 rounded shadow-sm appearance-none focus:border-white/75 focus:outline-none focus:shadow-outline placeholder:text-white text-white min-h-20 resize-none'
                                            id='message'
                                            name='message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='mt-6 mb-2 sm:mb-4'>
                                    <button
                                        type='submit'
                                        className='inline-flex items-center justify-center w-full h-12 px-6 font-bold tracking-wide text-bdc-gray-800 transition duration-200 rounded shadow-md bg-white focus:shadow-outline focus:outline-none'>
                                        Enviar mensaje
                                    </button>
                                </div>
                                {resultMessage && (
                                    <span
                                        className={`mt-4 text-xs text-center left-0 right-0 absolute ${resultClass}`}
                                        id='result'>
                                        {resultMessage}
                                    </span>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
