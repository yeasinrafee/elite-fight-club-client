import useTitle from '../../../hooks/useTitle';
import TopInstructors from '../TopInstructors/TopInstructors';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import TopClasses from '../TopClasses/TopClasses';
import About from '../About/About';
import FighterSpotlight from '../FighterSpotlight/FighterSpotlight';

const Home = () => {
  useTitle('EliteFightClub | Home');
  return (
    <div>
      <Banner />
      <div className='py-10'>
        <TopClasses />
      </div>
      <div className='py-10'>
        <TopInstructors />
      </div>
      <div className='py-10'>
        <About />
      </div>
      <div className='py-10'>
        <FighterSpotlight></FighterSpotlight>
      </div>
      <div className='py-10'>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
