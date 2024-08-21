import React, { useState, useEffect } from 'react';
import { bdc, footer, socialMedia } from '../constants';

function Signature() {
    return fetch(
        'https://docs.google.com/spreadsheets/d/160aFLoi9WkkpOtw_mFrF1sOptqgQ-sI9hw5jQtdMigg/pub?output=csv'
    ).then((res) => res.text());
}

const Footer = () => {
    const [signature, setSignature] = useState('');
    const [linkText, setLinkText] = useState('');
    const [linkName, setLinkName] = useState('');
    const [linkHref, setLinkHref] = useState('');

    useEffect(() => {
        const fetchSignature = async () => {
            const data = await Signature();
            setSignature(data);

            const lines = data.split('\n');
            if (lines.length > 1) {
                const firstLine = lines[1];
                const [text, name, href] = firstLine.split(',');
                setLinkText(text);
                setLinkName(name);
                setLinkHref(href);
            }
        };

        fetchSignature();
    }, []);

    return (
        <div className='font-inter px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='sm:col-span-2'>
                    <a href={bdc.urlMainWeb} className='inline-flex items-center mr-8' target='_blank'>
                        <img src={bdc.logo} className='h-14' alt={bdc.alt} />
                    </a>
                </div>
                <div className='space-y-2 text-sm'>
                    <p className='text-base font-bold tracking-wide text-gray-900'>{footer.contacto.title}</p>
                    <div>
                        <p className='mr-1 text-gray-800'>{footer.contacto.phone.label}</p>
                        <a
                            href={footer.contacto.phone.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors duration-300 text-bdc-green hover:text-bdc-green-400'>
                            {footer.contacto.phone.info}
                        </a>
                    </div>
                    <div>
                        <p className='mr-1 text-gray-800'>{footer.contacto.email.label}</p>
                        <a
                            href={footer.contacto.email.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors duration-300 text-bdc-green hover:text-bdc-green-400'>
                            {footer.contacto.email.info}
                        </a>
                    </div>
                    <div>
                        <p className='mr-1 text-gray-800'>{footer.contacto.address.label}</p>
                        <a
                            href={footer.contacto.address.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors duration-300 text-bdc-green hover:text-bdc-green-400'>
                            {footer.contacto.address.info}
                        </a>
                    </div>
                </div>
                <div>
                    <span className='text-base font-bold tracking-wide text-gray-900'>{socialMedia.title}</span>
                    <div className='flex items-center mt-1 space-x-3'>
                        <a
                            href={socialMedia.instagram.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 transition-colors duration-300 hover:text-bdc-green'>
                            <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                                <circle cx='15' cy='15' r='4' />
                                <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
                            </svg>
                        </a>

                        <a
                            href={socialMedia.linkedin.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-500 transition-colors duration-300 hover:text-bdc-green'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'>
                                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center pt-5 pb-5 border-t'>
                <div className='flex flex-col md:flex-row '>
                    <p className='text-sm text-gray-600'>{footer.copyright}</p>
                    <span className='hidden md:block px-2 text-sm'>-</span>
                    <p className='text-sm text-gray-600'>{footer.reservedRights}</p>
                </div>
                <div className='pt-2'>
                    <a
                        href={linkHref}
                        className='text-sm text-gray-500 hover:text-bdc-green'
                        target='_blank'
                        rel='noopener noreferrer'>
                        {linkText} <span className='font-bold'>{linkName}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
