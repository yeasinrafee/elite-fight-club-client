import { Fade, Slide } from "react-awesome-reveal";
import img2 from "/assets/images/Banner/about.webp";

const About = () => {
  return (
    <div className="px-2">
      <Slide>
        <h1 className="text-4xl text-gray-500 font-bold text-center uppercase mb-8 md:mb-0">
          About elite fight Club
        </h1>
      </Slide>
      <div className="hidden md:block ">
        <Fade
          delay={1e3}
          cascade
          damping={1e-1}
          className="text-gray-600 ml-10 mt-12 mb-5 "
        >
          At Elite Fight Club, we are dedicated to empowering individuals
          through the art of martial arts.Experience the thrill of our
          high-intensity training programs, designed to build strength,
          confidence, and discipline.
        </Fade>
      </div>
      <Fade
        delay={1e3}
        cascade
        damping={1e-1}
        className="text-gray-500 mb-8 md:mb-12"
      >
        <p className="text-center font-bold text-md md:text-lg">
          <span className="text-gray-600">Join</span> our community of
          passionate instructors and students, and embark on a transformative
          journey of self-defense and personal growth.
        </p>
      </Fade>
      <br />
      <Fade delay={1e3} cascade damping={1e-1}>
        <img
          className="w-full rounded drop-shadow-2xl"
          src={img2}
          alt="about-image"
        />
      </Fade>
    </div>
  );
};

export default About;
