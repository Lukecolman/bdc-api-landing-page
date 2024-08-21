import React, { useState } from 'react';
import { solutions } from '../constants';
import TabsMobile from './TabsMobile';

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <div className='w-full md:p-4'>
            <div className='hidden md:flex justify-center gap-10'>
                {solutions.items.map((item) => (
                    <button
                        key={item.id}
                        className={`relative pb-2 px-4 justify-center w-64 flex text-lg transition-all duration-300 ease-in-out text-white`}
                        onClick={() => setSelectedTab(item.id)}>
                        {item.title}
                        <div
                            className={`absolute bottom-1 z-10 w-full origin-bottom transition-transform rotate-180 duration-300 ease-in-out ${
                                selectedTab === item.id
                                    ? 'transform scale-y-125 bg-bdc-green'
                                    : 'transform scale-y-50 bg-gray-300'
                            }`}
                            style={{ height: '4px' }}></div>
                    </button>
                ))}
            </div>

            <div className='md:mt-10  md:px-28 bg-white md:h-[550px] rounded-xl shadow-lg  gap-6 md:flex-row items-center max-w-7xl mx-auto'>
                <div className='md:flex flex-row items-center md:h-[550px] py-10 p-5 md:py-5 hidden'>
                    <div className='flex-shrink-0 w-full md:w-1/2 md:py-32 md:pr-20'>
                        <img
                            src={solutions.items[selectedTab - 1].img}
                            alt={solutions.items[selectedTab - 1].title}
                            className='w-32 md:w-full h-full mx-auto md:mx-0'
                        />
                    </div>
                    <div className='w-full md:w-1/2 md:pl-4 text-bdc-blue gap-3 flex flex-col text-pretty'>
                        <h3 className='text-4xl md:text-5xl font-bold text-bdc-green'>
                            {solutions.items[selectedTab - 1].title}
                        </h3>
                        <p className='mt-2 font-semibold text-base'>{solutions.items[selectedTab - 1].content}</p>
                        <ul className='list-disc  ml-6 md:ml-0 mt-2 text-base flex flex-col gap-5'>
                            {solutions.items[selectedTab - 1].bullet.map((bulletPoint, index) => (
                                <li key={index}>{bulletPoint}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='md:hidden'>
                    <TabsMobile />
                </div>
            </div>
        </div>
    );
};

export default Tabs;
