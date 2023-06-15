const SingleSelectedClass = ({ singleClass }) => {
  const {
    _id,
    class_name,
    image,
    instructor_name,
    instructor_email,
    available_seats,
    number_of_students,
    price,
  } = singleClass;
  return (
    <div key={_id} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="class image" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-amber-400 font-bold text-center mb-5">
          {class_name}
        </h2>
        <p>
          <span className="text-amber-200 font-bold">Instructor:</span>{" "}
          {instructor_name}
        </p>
        <p>
          <span className="text-amber-200 font-bold">Email:</span>{" "}
          {instructor_email}
        </p>
        <p>
          <span className="text-amber-200 font-bold">Available seats:</span>{" "}
          {available_seats}
        </p>
        <p>
          <span className="text-amber-200 font-bold">Enrolled:</span>{" "}
          {number_of_students}
        </p>
        <p className="text-2xl border-amber-200">
          <span className="text-amber-200 font-bold">Price:</span> ${price}
        </p>
        <div className="card-actions justify-between items-center mt-9">
          <button className="btn btn-primary bg-green-400 hover:bg-green-600 border-none text-white">
            Pay Class
          </button>
          <button className="btn btn-primary bg-red-400 hover:bg-red-600 border-none text-white">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSelectedClass;
