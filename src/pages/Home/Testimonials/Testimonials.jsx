const Testimonials = () => {
  return (
    <div className='relative  mt-24 px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-50 text-gray-900 sm:rounded-lg shadow-md'>
      <div className='absolute right-0 bottom-0 hero-pattern w-64 h-56'></div>
      <div className='relative'>
        <div>
          <h2 className='text-center text-2xl lg:text-3xl uppercase text-black font-bold leading-tight'>
            Testimonials
          </h2>
          <div className='my-4 mx-auto w-12 h-2 border-4 border-yellow-300'></div>
          <div className='text-center tracking-wider text-gray-700 font-light'>
            Here are what some of our amazing customers are saying ...
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-12'>
          {/* Testimonial 1 */}
          <div className='relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between'>
            <div className='-ml-4'>
              <svg
                className='w-8 opacity-50 text-yellow-300'
                xmlns='http://www.w3.org/2000/svg'
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
                imageRendering='optimizeQuality'
                fillRule='evenodd'
                clipRule='evenodd'
                viewBox='0 0 640 640'
                fill='currentColor'
              >
                <path d='M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z' />
              </svg>
            </div>
            <div className='mt-2'>
              I felt disorganized. Pieces of paper everywhere. I was constantly
              making new lists, losing old ones, crossing off items and adding
              new ones. I was forever worried things were slipping and not
              getting done. My brain was tired.
            </div>
            <div>
              <div className='mx-auto w-full border border-yellow-300 my-8'></div>
              <div className='flex items-center'>
                <div>
                  <img
                    className='w-12 h-12 rounded-full border-2 border-indigo-400'
                    src='https://avatars2.githubusercontent.com/u/2741?s=64&v=4'
                    alt='David H. Hansson'
                  />
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>David H. Hansson</div>
                  <div className='text-sm text-gray-600 mt-1'>
                    CTO,{' '}
                    <a href='https://timerse.com/7-steps-to-boost-your-metabolism/'>
                      Boosting Metabolism
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial 1 */}
          <div className='relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between'>
            <div className='-ml-4'>
              <svg
                className='w-8 opacity-50 text-yellow-300'
                xmlns='http://www.w3.org/2000/svg'
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
                imageRendering='optimizeQuality'
                fillRule='evenodd'
                clipRule='evenodd'
                viewBox='0 0 640 640'
                fill='currentColor'
              >
                <path d='M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z' />
              </svg>
            </div>
            <div className='mt-2'>
              I felt disorganized. Pieces of paper everywhere. I was constantly
              making new lists, losing old ones, crossing off items and adding
              new ones. I was forever worried things were slipping and not
              getting done. My brain was tired.
            </div>
            <div>
              <div className='mx-auto w-full border border-yellow-300 my-8'></div>
              <div className='flex items-center'>
                <div>
                  <img
                    className='w-12 h-12 rounded-full border-2 border-indigo-400'
                    src='https://avatars2.githubusercontent.com/u/2741?s=64&v=4'
                    alt='David H. Hansson'
                  />
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>David H. Hansson</div>
                  <div className='text-sm text-gray-600 mt-1'>
                    CTO,{' '}
                    <a href='https://timerse.com/7-steps-to-boost-your-metabolism/'>
                      Boosting Metabolism
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className='mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between'>
            <div className='-ml-4'>
              <svg
                className='w-8 opacity-50 text-yellow-300'
                xmlns='http://www.w3.org/2000/svg'
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
                imageRendering='optimizeQuality'
                fillRule='evenodd'
                clipRule='evenodd'
                viewBox='0 0 640 640'
                fill='currentColor'
              >
                <path d='M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z' />
              </svg>
            </div>
            <div className='mt-2'>
              I felt disorganized. Pieces of paper everywhere. I was constantly
              making new lists, losing old ones, crossing off items and adding
              new ones. I was forever worried things were slipping and not
              getting done. My brain was tired.
            </div>
            <div>
              <div className='mx-auto w-full border border-yellow-300 my-8'></div>
              <div className='flex items-center'>
                <div>
                  <img
                    className='w-12 h-12 rounded-full border-2 border-indigo-400'
                    src='https://avatars0.githubusercontent.com/u/810438?s=100'
                    alt='Dan Abramov'
                  />
                </div>
                <div className='ml-4'>
                  <div className='font-bold'>Dan Abramov</div>
                  <div className='text-sm text-gray-600 mt-1'>
                    Creator, <a href='https://swift.org/'>Java</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
