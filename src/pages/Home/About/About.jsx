import { Fade, Zoom } from 'react-awesome-reveal';
import img2 from '/assets/images/Banner/about.webp';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-16 px-4 bg-gray-50 rounded-lg shadow-md'>
      {/* Text Section */}
      <div className='md:w-1/2 p-6 space-y-10 text-center md:text-left'>
        <Zoom triggerOnce>
          <h1 className='text-2xl md:text-3xl font-bold tracking-wider uppercase text-gray-800 mb-6'>
            Discover the{' '}
            <span className='text-yellow-300'>Elite Fight Club</span>
          </h1>
        </Zoom>
        <Fade delay={300} triggerOnce>
          <p className='text-lg md:text-xl text-gray-600 mb-4'>
            Welcome to Elite Fight Club, where the pursuit of excellence meets
            the art of combat. We offer a transformative journey through martial
            arts, building not only physical strength but also mental
            resilience.
          </p>
        </Fade>
        <Fade delay={600} triggerOnce>
          <p className='text-md md:text-lg text-gray-500 '>
            Join a community of dedicated practitioners and expert instructors
            who are here to guide you through high-intensity training programs
            that foster discipline, confidence, and growth.
          </p>
        </Fade>
      </div>

      {/* Image Section */}
      <div className='md:w-5/12 mt-8 md:mt-0 md:pl-8'>
        <Zoom triggerOnce>
          <img
            src={img2}
            alt='Elite Fight Club'
            className='w-full h-auto rounded-lg transform transition duration-500 hover:scale-105 shadow-lg'
          />
        </Zoom>
      </div>
    </div>
  );
};

export default About;
