import React from 'react';
import { opportunities } from '../constants';
import ButtonScroll from './buttonScroll';
import {
    AiOutlineBarChart,
    AiOutlineThunderbolt,
    AiOutlineFileProtect,
    AiOutlineControl,
    AiOutlineDatabase,
    AiOutlineSafety,
} from 'react-icons/ai';
import { useAnimate, motion } from 'framer-motion';

const Opportunities = () => {
    return (
        <div className='px-4 py-20 mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-16'>
                <h2
                    className=' mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900 md:max-w-xl sm:text-6xl md:mx-auto text-pretty'
                    dangerouslySetInnerHTML={{ __html: opportunities.title }}
                />
                <p className='text-base text-bdc-gray-700 md:text-lg'>{opportunities.subtitle}</p>
            </div>
            <div className='hidden md:grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.0 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineBarChart className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[0].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[0].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineThunderbolt className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[1].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[1].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineFileProtect className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[2].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[2].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.6 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white '>
                            <AiOutlineControl className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[3].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[3].content}
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className='md:hidden grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.0 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineBarChart className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[0].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[0].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.0 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineThunderbolt className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[1].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[1].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.0 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white'>
                            <AiOutlineFileProtect className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[2].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[2].content}
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: '100px' }}
                    whileInView={{ opacity: 1, translateY: '0px' }}
                    transition={{ duration: 0.2, delay: 0.0 }}
                    viewport={{ margin: '-5px', once: true }}
                    className='flex flex-col justify-between p-5 border rounded shadow-sm duration-200 transform hover:-translate-y-2 hover:shadow-lg'>
                    <div>
                        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white '>
                            <AiOutlineControl className='w-12 h-12 text-bdc-blue-300' />
                        </div>
                        <h6 className='mb-2 font-semibold leading-5'>{opportunities.items[3].title}</h6>
                        <p className='mb-3 text-base font-medium text-pretty text-gray-600'>
                            {opportunities.items[3].content}
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className='text-center mt-16'>
                <ButtonScroll information={opportunities} />
            </div>
        </div>
    );
};

export default Opportunities;
