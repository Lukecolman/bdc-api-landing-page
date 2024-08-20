import React, { useState, useRef } from 'react';
import { bdcApplicants } from '../constants';
import { AiOutlineWallet, AiOutlineShoppingCart, AiOutlineMedicineBox, AiOutlineRead } from 'react-icons/ai';
import { CgGym } from 'react-icons/cg';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const BDCApplicants = () => {
    const applicant = bdcApplicants[0];

    const Item = ({ title, icon: Icon, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        const contentRef = useRef(null);

        return (
            <div className='border-b w-full max-w-2xl mx-auto '>
                <button
                    type='button'
                    aria-label='Open item'
                    title='Open item'
                    className='flex items-center justify-between w-full p-4 focus:outline-none hover:bg-bdc-blue-50/40 rounded-t-xl'
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex items-center'>
                        <Icon className='w-6 h-6 mr-3 sm:w-7 sm:h-7 text-bdc-green sm:mr-4' />
                        <p className='text-base sm:text-lg font-medium text-white'>{title}</p>
                    </div>
                    <svg
                        viewBox='0 0 24 24'
                        className={`w-4 text-bdc-blue-50 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}>
                        <polyline
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeMiterlimit='10'
                            points='2,7 12,17 22,7'
                            strokeLinejoin='round'
                        />
                    </svg>
                </button>
                <div
                    ref={contentRef}
                    className='overflow-hidden transition-all duration-500 ease-in-out'
                    style={{
                        maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                    }}>
                    <div className='p-7  pt-6 text-white '>
                        <p>{children}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='font-inter px-4 py-16 w-full  lg:px-8 lg:py-32 bg-bdc-blue'>
            <div className=' mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-16'>
                <h2
                    className='max-w-7xl mb-6 text-4xl font-bold leading-none tracking-tight text-white sm:text-4xl md:text-6xl md:mx-auto text-balance'
                    dangerouslySetInnerHTML={{ __html: applicant.title }}
                />
                <p className='max-w-2xl mx-auto text-base text-white md:text-lg text-pretty'>{applicant.subtitle}</p>
            </div>
            <div className='space-y-4 max-w-2xl mx-auto'>
                <Item title={applicant.item1[0].title} icon={AiOutlineWallet}>
                    {applicant.item1[0].content}
                </Item>
                <Item title={applicant.item2[0].title} icon={AiOutlineShoppingCart}>
                    {applicant.item2[0].content}
                </Item>
                <Item title={applicant.item3[0].title} icon={AiOutlineMedicineBox}>
                    {applicant.item3[0].content}
                </Item>
                <Item title={applicant.item4[0].title} icon={AiOutlineRead}>
                    {applicant.item4[0].content}
                </Item>
                <Item title={applicant.item5[0].title} icon={HiOutlineBuildingOffice}>
                    {applicant.item5[0].content}
                </Item>
                <Item title={applicant.item6[0].title} icon={CgGym}>
                    {applicant.item6[0].content}
                </Item>
            </div>
        </div>
    );
};

export default BDCApplicants;
