import useClasses from '../../hooks/useClasses';
import useTitle from '../../hooks/useTitle';
import SingleClass from '../SingleClass/SingleClass';

const Classes = () => {
  useTitle('EliteFightClub | Classes');
  const [classes] = useClasses();

  return (
    <div>
      <h2 className='text-4xl font-bold text-gray-500 text-center uppercase my-12 '>
        checkout our brilliant courses
      </h2>
      <div className='grid w-11/12 mx-auto grid-cols-1 md:grid-cols-4 justify-content-center items-center gap-10 my-5 md:my-24'>
        {classes &&
          classes.map((singleClass, i) => (
            <SingleClass key={i} singleClass={singleClass} />
          ))}
      </div>
    </div>
  );
};

export default Classes;
