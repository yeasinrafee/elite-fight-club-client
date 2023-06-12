import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("EliteFightClub | Home");
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
