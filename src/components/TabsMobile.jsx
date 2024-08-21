import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { solutions } from '../constants';

const TabsMobile = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
            loop: true,
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;

                function clearNextTimeout() {
                    clearTimeout(timeout);
                }

                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 3000);
                }

                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });

                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('updated', nextTimeout);
            },
        ]
    );

    return (
        <>
            <div className='navigation-wrapper h-full z-30 '>
                <div ref={sliderRef} className='keen-slider'>
                    {solutions.items.map((item, index) => (
                        <div key={index} className='keen-slider__slide'>
                            <div className=' md:flex flex-row items-center md:h-[550px] py-10 p-5 md:py-5'>
                                <div className='flex-shrink-0 w-full md:w-1/2 md:py-32 md:pr-20'>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className='w-32 md:w-full h-full mx-auto md:mx-0'
                                    />
                                </div>
                                <div className='w-full md:w-1/2 md:pl-4 text-bdc-blue gap-3 flex flex-col text-pretty'>
                                    <h3 className='text-4xl md:text-5xl font-bold text-bdc-green'>{item.title}</h3>
                                    <p className='mt-2 font-semibold text-base'>{item.content}</p>
                                    <ul className='list-disc ml-6 md:ml-0 mt-2 text-base flex flex-col gap-5'>
                                        {item.bullet.map((bulletPoint, idx) => (
                                            <li key={idx}>{bulletPoint}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <div className='dots w-full z-40 absolute center transition-all duration-300 ease-in-out '>
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => instanceRef.current?.moveToIdx(idx)}
                                className={`bg-gray-300 transition-all duration-300 ease-in-out dot${
                                    currentSlide === idx ? ' active ' : ''
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

function Arrow(props) {
    const disabled = props.disabled ? ' arrow--disabled' : '';
    return (
        <svg
            onClick={props.onClick}
            className={`block arrow !bottom-0  ${props.left ? 'left-5 ' : 'left-auto  right-5'} ${disabled}`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
            {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
        </svg>
    );
}

export default TabsMobile;
