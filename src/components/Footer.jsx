import React from 'react'

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="sm:col-span-2">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-green-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Company
          </span>
        </a>
        <div className="mt-6 lg:max-w-sm">
          <p className="text-sm text-gray-800">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <p className="mt-4 text-sm text-gray-800">
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold tracking-wide text-gray-900">
          Contacts
        </p>
        <div className="flex">
          <p className="mr-1 text-gray-800">Phone:</p>
          <a
            href="tel:850-123-5021"
            aria-label="Our phone"
            title="Our phone"
            className="transition-colors duration-300 text-green-400 hover:text-green-800"
          >
            850-123-5021
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Email:</p>
          <a
            href="mailto:info@lorem.mail"
            aria-label="Our email"
            title="Our email"
            className="transition-colors duration-300 text-green-400 hover:text-green-800"
          >
            info@lorem.mail
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Address:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300 text-green-400 hover:text-green-800"
          >
            312 Lovely Street, NY
          </a>
        </div>
      </div>
      <div>
        <span className="text-base font-bold tracking-wide text-gray-900">
          Social
        </span>
        <div className="flex items-center mt-1 space-x-3">


          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>

          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>

          {/* <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-green-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a> */}

        </div>
        <p className="mt-4 text-sm text-gray-500">
          Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
          spare ribs salami.
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p className="text-sm text-gray-600">
        © Copyright 2020 Lorem Inc. All rights reserved.
      </p>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-green-400"
          >
            F.A.Q
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-green-400"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-green-400"
          >
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </div>
  </div>
    )
}

export default Footer