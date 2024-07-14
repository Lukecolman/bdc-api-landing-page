import React from 'react'

const Integration = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col lg:flex-row">
      <div className="max-w-xl pr-16 mx-auto mb-10">
        <h5 className="mb-6 text-3xl font-extrabold leading-none">
          The quick, brown fox jumps over a lazy dog
        </h5>
        <p className="mb-6 text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
          omnis iste natus.
        </p>
        <div className="flex items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="flex flex-col shadow-2xl">
        {/* ITEM 1 */}
        <div className="flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200">
          <div className="flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-green-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-700 max-w-[280px]">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
        </div>
        {/* ITEM 2 */}
        <div className="flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200">
          <div className="flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-green-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-700 max-w-[280px]">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
        </div>
        {/* ITEM 3 */}
        <div className="flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200">
          <div className="flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-green-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-700 max-w-[280px]">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
        </div>
        {/* ITEM 4 */}
        <div className="flex gap-6 max-w-md py-8 px-12 border-b-2 border-gray-100 duration-150 transition-all hover:bg-green-200">
          <div className="flex items-center justify-center min-w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-green-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-700 max-w-[280px]">
            A flower in my garden, a mystery in my panties. Heart attack never
            stopped old Big Bear. I didn't even know we were calling him Big
            Bear.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Integration