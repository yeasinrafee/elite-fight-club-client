import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='mt-10 mb-10'>
      <div className='h-[550px]'>
        <Carousel>
          {/* Slide 1 - Boxing */}
          <div className='relative h-full'>
            <img
              src='https://i.ibb.co.com/jGm2gLp/boxing.jpg'
              alt='Boxing Banner'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
              <h1 className='lg:text-5xl text-2xl  tracking-wider uppercase font-bold '>
                Train Like a <span className='text-yellow-300'>Champion</span>
              </h1>
              <p className='lg:text-xl text-sm tracking-wide lg:mt-10 mt-20 lg:mb-10'>
                Unlock your potential with world-class boxing training and
                fitness tips.
              </p>
              <Link to='/classes'>
                {' '}
                <button className='bg-yellow-300 text-black lg:text-base text-sm font-semibold px-2 py-1 lg:py-2 lg:px-4 lg:mt-2 mt-6 rounded-lg hover:bg-yellow-600'>
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 2 - Fitness */}
          <div className='relative h-full'>
            <img
              src='https://i.ibb.co.com/ByfCD9p/fitness.jpg'
              alt='Fitness Banner'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-30'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
              <h1 className='lg:text-5xl text-2xl  tracking-wider uppercase font-bold '>
                Elevate Your <span className='text-yellow-300'>Fitness</span>{' '}
                Game
              </h1>
              <p className='lg:text-xl text-sm tracking-wide lg:mt-10 mt-20 lg:mb-10'>
                Discover the best fitness routines and diet plans to achieve
                your goals.
              </p>
              <Link to='/classes'>
                {' '}
                <button className='bg-yellow-300 text-black lg:text-base text-sm font-semibold px-2 py-1 lg:py-2 lg:px-4 lg:mt-2 mt-6 rounded-lg hover:bg-yellow-600'>
                  Explore Routines
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 - Martial Arts */}
          <div className='relative h-full'>
            <img
              src='https://i.ibb.co.com/NsYr5TN/martial.jpg'
              alt='Martial Arts Banner'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
              <h1 className='lg:text-5xl text-2xl  tracking-wider uppercase font-bold '>
                Master the{' '}
                <span className='text-yellow-300'>Art of Combat</span>
              </h1>
              <p className='lg:text-xl text-sm tracking-wide lg:mt-10 mt-20 lg:mb-10'>
                Learn martial arts techniques from experts and push your limits.
              </p>
              <Link to='/classes'>
                {' '}
                <button className='bg-yellow-300 text-black lg:text-base text-sm font-semibold px-2 py-1 lg:mt-2 lg:py-2 lg:px-4 mt-6 rounded-lg hover:bg-yellow-600'>
                  Join The Journey
                </button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
