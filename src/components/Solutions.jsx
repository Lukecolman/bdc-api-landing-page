import React from 'react';

const Solutions = () => {
    return (
        <>
            <div className="mt-24 max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto">
          The quick, brown fox jumps over a lazy dog
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
            {/* SOLUTION 1 */}
            <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>

                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-4xl font-extrabold leading-none'>
                            The quick, brown fox
                            <br className='hidden md:block' />
                            jumps over <span className='inline-block text-deep-purple-accent-400'>a lazy dog</span>
                        </h5>
                        <p className='mb-6 text-gray-900'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae explicabo. Sed ut perspiciatis unde omnis
                            iste natus error sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                        </p>
                    </div>
                </div>
            </div>
            {/* SOLUTION 2 */}
            <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>

                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-4xl font-extrabold leading-none'>
                            The quick, brown fox
                            <br className='hidden md:block' />
                            jumps over <span className='inline-block text-deep-purple-accent-400'>a lazy dog</span>
                        </h5>
                        <p className='mb-6 text-gray-900'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae explicabo. Sed ut perspiciatis unde omnis
                            iste natus error sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                        </p>
                    </div>
                </div>
            </div>
            {/* SOLUTION 3 */}
            <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-14'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div>
                        <img
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                            alt=''
                        />
                    </div>

                    <div className='lg:pl-14 flex flex-col justify-center'>
                        <h5 className='mb-4 text-4xl font-extrabold leading-none'>
                            The quick, brown fox
                            <br className='hidden md:block' />
                            jumps over <span className='inline-block text-deep-purple-accent-400'>a lazy dog</span>
                        </h5>
                        <p className='mb-6 text-gray-900'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae explicabo. Sed ut perspiciatis unde omnis
                            iste natus error sit voluptatem totam rem aperiam, eaque ipsa quae explicabo.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solutions;