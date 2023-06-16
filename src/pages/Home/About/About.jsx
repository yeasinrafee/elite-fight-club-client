import { Fade, Slide } from "react-awesome-reveal";
import img2 from "/assets/images/Banner/banner-2.webp";

const About = () => {
  return (
    <>
      <Slide>
        <h1 className="text-4xl text-amber-400 font-bold text-center uppercase">
          About elite fight Club
        </h1>
      </Slide>
      <Fade
        delay={1e3}
        cascade
        damping={1e-1}
        className="text-amber-500 ml-10 mt-12 mb-5"
      >
        At Elite Fight Club, we are dedicated to empowering individuals through
        the art of martial arts.Experience the thrill of our high-intensity
        training programs, designed to build strength, confidence, and
        discipline.
      </Fade>
      <Fade delay={1e3} cascade damping={1e-1} className="text-amber-500 mb-12">
        <p className="text-center font-bold text-lg">
          Join our community of passionate instructors and students, and embark
          on a transformative journey of self-defense and personal growth.
        </p>
      </Fade>
      <br />
      <Fade delay={1e3} cascade damping={1e-1}>
        <img src={img2} alt="" />
      </Fade>
    </>
  );
};

export default About;
