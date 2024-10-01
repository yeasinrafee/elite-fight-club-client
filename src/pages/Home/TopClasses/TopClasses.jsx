// Lazy Image loading
import { Card } from 'flowbite-react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import useClasses from '../../../hooks/useClasses';

const TopClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div className='my-16 md:my-28 px-3 md:px-10 w-full'>
      <hr className='mb-14' />
      <h1 className='lg:text-3xl text-2xl font-bold text-gray-600 text-center mb-20 uppercase'>
        Popular <span className='text-yellow-300'>Classes</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12 items-center  w-full'>
        {classes &&
          classes.slice(0, 6).map((tClass) => (
            <Card
              key={tClass._id}
              className=''
              imgSrc={tClass.image}
              horizontal
            >
              <div className='space-y-3 text-sm'>
                <h5 className='text-2xl text-yellow-300 uppercase mb-6 font-bold tracking-wider dark:text-white'>
                  {tClass.class_name}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  Instructor Name: {tClass.instructor_name}
                </p>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  Number of Students: {tClass.number_of_students}
                </p>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  Available Seats: {tClass.available_seats}
                </p>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  Price: {tClass.price} $
                </p>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default TopClasses;
