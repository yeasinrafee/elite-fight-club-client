// Lazy Image Loading

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Card } from 'flowbite-react';

import useInstructors from '../../hooks/useInstructors';
import useTitle from '../../hooks/useTitle';

const Instructors = () => {
  useTitle('EliteFightClub | Instructors');
  const [instructors] = useInstructors();
  return (
    <div>
      <h2 className='lg:text-3xl text-2xl font-bold text-gray-500 text-center uppercase my-12'>
        Introducing Our <span className='text-yellow-300'>Honorable</span>{' '}
        Instructors
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-16 my-5 md:my-24 w-full'>
        {instructors &&
          instructors.map((instructor) => (
            <Card
              key={instructor._id}
              className='  object-cover items-center'
              imgSrc={instructor.image}
              horizontal
            >
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {instructor.name}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {instructor.email}
              </p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
