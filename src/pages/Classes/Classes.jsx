import useClasses from "../../hooks/useClasses";
import useTitle from "../../hooks/useTitle";

const Classes = () => {
  useTitle("EliteFightClub | Classes");
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        checkout our brilliant courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-9 my-5 md:my-24">
        {classes &&
          classes.map((singleClass) => (
            <div
              key={singleClass._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={singleClass.image} alt="class image" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl text-amber-400 font-bold text-center">
                  {singleClass.class_name}
                </h2>
                <p>
                  <span className="text-amber-200 font-bold">Instructor:</span>{" "}
                  {singleClass.instructor_name}
                </p>
                <p>
                  <span className="text-amber-200 font-bold">
                    Available seats:
                  </span>{" "}
                  {singleClass.available_seats}
                </p>
                <div className="card-actions justify-between items-center mt-6">
                  <p className="text-2xl  border border-amber-200 p-1 rounded-md mr-16">
                    <span className="text-amber-200 font-bold">Price:</span> $
                    {singleClass.price}
                  </p>
                  <button className="btn btn-primary bg-amber-400 hover:bg-amber-600 border-none text-white">
                    select
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Classes;
