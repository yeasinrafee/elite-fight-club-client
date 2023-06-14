import useClasses from "../../hooks/useClasses";

const AllClasses = () => {
  const [classes] = useClasses();
  return (
    <div>
      <h2 className="text-3xl font-bold text-amber-400 text-center mb-8 uppercase">
        All Classes: {classes?.length}
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
                  <span className="text-amber-300 font-bold">Instructor:</span>{" "}
                  {singleClass.instructor_name}
                </p>
                <p>
                  <span className="text-amber-300 font-bold">Email:</span>{" "}
                  {singleClass.instructor_email}
                </p>
                <p>
                  <span className="text-amber-300 font-bold">
                    Available seats:
                  </span>{" "}
                  {singleClass.available_seats}
                </p>
                <p>
                  <span className="text-amber-300 font-bold">Price:</span> $
                  {singleClass.price}
                </p>
                <p>
                  <span className="text-amber-300 font-bold">Status: </span>
                  <span className="uppercase">{singleClass.status}</span>
                </p>
                <div className="card-actions justify-between items-center mt-6">
                  <button className="btn btn-primary btn-sm bg-green-400 hover:bg-green-600 border-none text-white">
                    approve
                  </button>
                  <button className="btn btn-primary btn-sm bg-red-400 hover:bg-red-600 border-none text-white">
                    Deny
                  </button>
                  <button className="btn btn-primary btn-sm bg-amber-400 hover:bg-amber-600 border-none text-white">
                    feedback
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllClasses;
