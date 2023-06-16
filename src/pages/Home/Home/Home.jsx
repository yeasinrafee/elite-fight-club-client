import useTitle from "../../../hooks/useTitle";
import TopInstructors from "../TopInstructors/TopInstructors";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";
import TopClasses from "../TopClasses/TopClasses";
import About from "../About/About";

const Home = () => {
  useTitle("EliteFightClub | Home");
  return (
    <div>
      <Banner />
      <TopClasses />
      <TopInstructors />
      <About />
      <Testimonials />
    </div>
  );
};

export default Home;
