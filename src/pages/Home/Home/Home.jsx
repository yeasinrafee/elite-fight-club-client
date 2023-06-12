import useTitle from "../../../hooks/useTitle";
import TopInstructors from "../../TopInstructors/TopInstructors";
import Banner from "../Banner/Banner";
import TopClasses from "../TopClasses/TopClasses";

const Home = () => {
  useTitle("EliteFightClub | Home");
  return (
    <div>
      <Banner />
      <TopClasses />
      <TopInstructors />
    </div>
  );
};

export default Home;
