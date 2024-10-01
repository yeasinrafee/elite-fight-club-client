import useInstructors from '../../../hooks/useInstructors';

const TopInstructors = () => {
  const [instructors] = useInstructors();
  console.log(instructors);

  return (
    <div>
      <hr className='mb-14' />
      <h2 className='lg:text-3xl text-2xl font-bold text-gray-600 text-center mb-20 uppercase'>
        Popular <span className='text-yellow-300'>Instructors</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-24'>
        {instructors &&
          instructors.map((instructor) => (
            <div
              key={instructor._id}
              className='relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className='w-72 h-72 mx-auto object-cover'
              />
              {/* Overlay div */}
              <div className='absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex flex-col items-center justify-center'>
                <h3 className='text-white text-2xl font-bold'>
                  {instructor.name}
                </h3>
                <p className='text-white text-lg mt-5 font-bold'>
                  {instructor.email}
                </p>
              </div>
            </div>
          ))}
      </div>
      <hr className='mb-20 md:mb-32' />
    </div>
  );
};

export default TopInstructors;
