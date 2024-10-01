import { FaMedal } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';

const FighterSpotlight = () => {
  // Local JSON-like data array for fighters
  const fighters = [
    {
      name: 'Brandon James',
      photo: 'https://i.ibb.co.com/YWm53xc/boxing-Boy.jpg',
      bio: 'John started his martial arts journey two years ago and has become a force to be reckoned with.',
      achievements: ['Gold Medal in Kickboxing', 'Black Belt in Jiu-Jitsu'],
    },
    {
      name: 'Jane Smith',
      photo: 'https://i.ibb.co.com/K02zSPX/fighter-Girl.jpg',
      bio: 'Jane has transformed both physically and mentally since joining Elite Fight Club.',
      achievements: ['Champion of Regional MMA', 'Purple Belt in Karate'],
    },
    {
      name: 'Monica Alex',
      photo: 'https://i.ibb.co.com/MVCT3dZ/girl-Fight.png',
      bio: 'Alex has mastered various martial arts forms and continues to push his limits every day.',
      achievements: ['Silver Medal in Taekwondo', 'Black Belt in Kung Fu'],
    },
  ];

  return (
    <div className='my-24 px-4 md:px-10 bg-gray-100 py-10 rounded-lg'>
      <Slide direction='left'>
        <h2 className='lg:text-3xl text-2xl  font-bold text-center text-gray-700 mb-12 uppercase'>
          Fighter <span className='text-yellow-300'>Spotlight</span>
        </h2>
      </Slide>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {fighters.slice(0, 2).map((fighter, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg'
          >
            <Fade>
              <img
                className='w-48 h-40 rounded-full object-cover border-4 border-yellow-300 shadow-md mb-4 md:mb-0'
                src={fighter.photo}
                alt={`${fighter.name}'s photo`}
              />
            </Fade>

            <div className='md:ml-8 text-center md:text-left'>
              <Fade delay={300}>
                <h3 className='lg:text-3xl text-2xl font-bold text-gray-600 mb-4'>
                  {fighter.name}
                </h3>
                <p className='text-gray-500 mb-4'>{fighter.bio}</p>
              </Fade>

              <Fade delay={600}>
                <div className='flex justify-center md:justify-start'>
                  {fighter.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className='bg-yellow-300 p-2 mr-2 rounded-full shadow-md'
                    >
                      <FaMedal className='text-gray-800' />
                    </div>
                  ))}
                </div>

                <div className='mt-4 text-sm text-gray-600'>
                  <span className='font-bold'>Achievements: </span>
                  <ul className='list-disc list-inside'>
                    {fighter.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>

      {/* Centered rest of the fighters */}
      <div className='flex flex-wrap justify-center mt-10'>
        {fighters.slice(2).map((fighter, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg'
          >
            <Fade>
              <img
                className='w-40 h-40 rounded-full object-cover border-4 border-yellow-300 shadow-md mb-4 md:mb-0'
                src={fighter.photo}
                alt={`${fighter.name}'s photo`}
              />
            </Fade>

            <div className='md:ml-8 text-center md:text-left'>
              <Fade delay={300}>
                <h3 className='lg:text-3xl text-2xl  font-bold text-gray-600 mb-4'>
                  {fighter.name}
                </h3>
                <p className='text-gray-500 mb-4'>{fighter.bio}</p>
              </Fade>

              <Fade delay={600}>
                <div className='flex justify-center md:justify-start'>
                  {fighter.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className='bg-yellow-300 p-2 mr-2 rounded-full shadow-md'
                    >
                      <FaMedal className='text-gray-800' />
                    </div>
                  ))}
                </div>

                <div className='mt-4 text-sm text-gray-600'>
                  <span className='font-bold'>Achievements: </span>
                  <ul className='list-disc list-inside'>
                    {fighter.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FighterSpotlight;
