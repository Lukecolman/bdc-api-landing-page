import React from 'react';

const ButtonScroll = ({
    information,
    bgColor = 'bg-bdc-green',
    hoverColor = 'hover:bg-bdc-green-400',
    textColor = 'text-white',
}) => {
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
        <div>
            <a
                href={information.button.url}
                onClick={handleScroll}
                className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide ${textColor} transition duration-200 rounded shadow-md ${bgColor} ${hoverColor} focus:shadow-outline focus:outline-none`}>
                {information.button.text}
            </a>
        </div>
    );
};

export default ButtonScroll;
