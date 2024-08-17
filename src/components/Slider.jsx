// import React from 'react';
// import 'keen-slider/keen-slider.min.css';
// import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module

// const Slider = () => {
//     const [sliderRef, instanceRef] = useKeenSlider(
//         {
//             slideChanged() {
//                 console.log('slide changed');
//             },
//             loop: true,
//         },
//         [
//             // add plugins here
//         ]
//     );
//     return (
//         <div ref={sliderRef} className='keen-slider bg-red-500 h-96'>
//             <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-green-500 text-white text-9xl'>
//                 1
//             </div>
//             <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-violet-500 text-white text-9xl'>
//                 2
//             </div>
//             <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-orange-500 text-white text-9xl'>
//                 3
//             </div>
//         </div>
//     );
// };

// export default Slider;

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import './styles.css';

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

    return (
        <>
            <div className='relative'>
                <div ref={sliderRef} className='keen-slider bg-red-500 h-96'>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-green-500 text-white text-9xl'>
                        1
                    </div>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-violet-500 text-white text-9xl'>
                        2
                    </div>
                    <div className='keen-slider__slide h-full w-full flex items-center justify-center bg-orange-500 text-white text-9xl'>
                        3
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
            {/* {loaded && instanceRef.current && (
                <div className='dots'>
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={'dot' + (currentSlide === idx ? ' active' : '')}></button>
                        );
                    })}
                </div>
            )} */}
        </>
    );
};

function Arrow(props) {
    const disabled = props.disabled ? ' arrow--disabled' : '';
    return (
        <svg
            onClick={props.onClick}
            className={`hidden md:block arrow ${props.left ? 'left-5' : 'left-auto right-5'} ${disabled}`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            {props.left && <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />}
            {!props.left && <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />}
        </svg>
    );
}
