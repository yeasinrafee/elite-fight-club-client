// Lazy Image Loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import useInstructors from "../../hooks/useInstructors";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
  useTitle("EliteFightClub | Instructors");
  const [instructors] = useInstructors();
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-500 text-center uppercase my-12">
        Introducing Our Honorable Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-16 my-5 md:my-24 w-full">
        {instructors &&
          instructors.map((instructor) => (
            <div
              key={instructor._id}
              className="card w-80 h-96 mx-auto bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <LazyLoadImage
                  src={instructor.image}
                  className="w-full h-64 object-cover"
                  alt="Chefs"
                  effect="blur"
                  delayTime={300}
                  delayMethod="throttle"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-gray-500 font-bold">
                  {instructor.name}
                </h2>
                <p>Email: {instructor.email}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
