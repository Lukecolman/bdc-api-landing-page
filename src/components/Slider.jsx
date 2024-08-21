import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { sliders, navbar } from '../constants';

export default () => {
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
                    }, 2000);
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
        <>
            <div className='relative'>
                <div ref={sliderRef} className='keen-slider  h-[350px] md:h-[300px] font-inter'>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-bdc-green text-white text-2xl lg:text-[38px] leading-tight gap-8 md:gap-28 px-4'>
                        <img
                            src='./images/bannericon1.svg'
                            alt='icon'
                            className='hidden md:block h-[192px] w-[192px]'
                        />
                        <div className='flex flex-col gap-7'>
                            <span className='font-extrabold block max-w-[42rem]'>{sliders[1].content}</span>
                            <a
                                href={navbar.soluciones.url}
                                onClick={handleScroll}
                                className='font-medium text-base bg-bdc-blue px-11 py-3 rounded w-fit'>
                                {sliders[1].buttonTxt}
                            </a>
                        </div>
                    </div>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-bdc-blue text-white text-2xl lg:text-[38px] leading-tight gap-8 md:gap-28 px-4'>
                        <img
                            src='./images/bannericon2.svg'
                            alt='icon'
                            className='hidden md:block h-[192px] w-[192px]'
                        />
                        <div className='flex flex-col gap-7'>
                            <span className='font-extrabold block max-w-[42rem]'>{sliders[2].content}</span>
                            <a
                                href={navbar.soluciones.url}
                                onClick={handleScroll}
                                className='font-medium text-base bg-bdc-green px-11 py-3 rounded w-fit'>
                                {sliders[2].buttonTxt}
                            </a>
                        </div>
                    </div>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-gray-200 text-bdc-blue text-2xl lg:text-[38px] leading-tight gap-8 md:gap-28 px-4'>
                        <img
                            src='./images/bannericon3.svg'
                            alt='icon'
                            className='hidden md:block h-[192px] w-[192px]'
                        />
                        <div className='flex flex-col gap-7'>
                            <span className='font-extrabold block max-w-[42rem]'>{sliders[3].content}</span>
                            <a
                                href={navbar.soluciones.url}
                                onClick={handleScroll}
                                className='font-medium text-base bg-bdc-green px-11 py-3 rounded w-fit'>
                                {sliders[3].buttonTxt}
                            </a>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                            disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                        />
                    </>
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
            className={`block arrow !top-[90%] md:!top-1/2 ${
                props.left ? 'md:left-5 left-1/3' : 'left-auto right-1/3 md:right-5'
            } ${disabled}`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
            {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
        </svg>
    );
}
