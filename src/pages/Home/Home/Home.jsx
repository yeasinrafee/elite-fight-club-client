import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import TopClasses from "../TopClasses/TopClasses";

const Home = () => {
  useTitle("EliteFightClub | Home");
  return (
    <div>
      <Banner />
      <TopClasses />
    </div>
  );
};

export default Home;
