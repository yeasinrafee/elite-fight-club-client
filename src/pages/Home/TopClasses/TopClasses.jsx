// Lazy Image loading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import useClasses from "../../../hooks/useClasses";

const TopClasses = () => {
  const [classes] = useClasses();
  return (
    <div className="my-16 md:my-28 px-3 md:px-10 w-full">
      <hr className="mb-14" />
      <h1 className="text-3xl font-bold text-gray-600 text-center mb-8 uppercase">
        Popular Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-6 w-full">
        {classes &&
          classes.slice(0, 6).map((tClass) => (
            <div
              key={tClass._id}
              className="card card-compact bg-base-100 shadow-xl h-full px-3 md:px-0 w-full"
            >
              <figure>
                <LazyLoadImage
                  src={tClass.image}
                  className="w-full h-64 object-cover"
                  alt="Chefs"
                  effect="blur"
                  delayTime={300}
                  delayMethod="throttle"
                />
              </figure>
              <div className="card-body ">
                <h2 className="uppercase font-bold text-xl text-center text-gray-600">
                  {tClass.class_name}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopClasses;
