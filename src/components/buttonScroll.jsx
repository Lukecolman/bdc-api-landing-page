import React from 'react';

const ButtonScroll = ({ information, bgColor = 'bg-bdc-green', hoverColor = 'bg-bdc-green-400' }) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                className={`inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md ${bgColor} hover:${hoverColor} focus:shadow-outline focus:outline-none mb-24`}>
                {information.button.text}
            </a>
        </div>
    );
};

export default ButtonScroll;
