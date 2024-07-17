import React from 'react'
import { useState } from 'react';
import { bdc, navbar } from '../constants';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative">
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <a
            href={bdc.urlMainWeb}
            className="inline-flex items-center mr-8"
            target='_blank'
          >
            <img src={bdc.logo} className='h-10' alt={bdc.alt}/>
          </a>
        </div>
        
        {/* MENU */}
        <ul className="hidden items-center  space-x-8 lg:flex">
            <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.integracion.title}
              </a>
            </li>
            <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.soluciones.title}
              </a>
            </li>
            <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.contacto.title}
              </a>
            </li>
          </ul>
        {/* <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
        </ul> */}

        {/* MOBILE */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-green-50 focus:bg-green-50 bg-red-400"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className=" top-0 z-50 left-0 w-full  fixed inset-0  lg:hidden bg-yellow-500">
              <div className="py-5 flex flex-col item-center bg-red-400 h-full px-4 md:px-24">
                <div className="flex items-center justify-between mb-4">
                  <div>
                  <a
            href={bdc.urlMainWeb}
            className="inline-flex items-center mr-8"
            target='_blank'
          >
            <img src={bdc.logo} className='h-10' alt={bdc.alt}/>
          </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className='justify-between items-center bg-green-500 h-full  flex flex-col'>
                  <ul className="space-y-10 text-center text-4xl bg-violet-700 flex-1 mt-20">
                  <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.integracion.title}
              </a>
            </li>
            <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.soluciones.title}
              </a>
            </li>
            <li>
              <a
                href={navbar.soluciones.url}
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
              >
                {navbar.contacto.title}
              </a>
            </li>

                  </ul>
                  <a
                    href={navbar.ctaMobile.url}
                    className='max-w-md w-full mt-24 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none mb-8'
                    >
                    {navbar.ctaMobile.title}
                </a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar