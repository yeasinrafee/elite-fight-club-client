import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleSelectedClass = ({ singleClass, refetch }) => {
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

  const handleDelete = (singleClass) => {
    console.log(singleClass);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selected/${singleClass._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
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
            <Link to="/dashboard/payment">Pay Class</Link>
          </button>
          <button
            onClick={() => handleDelete(singleClass)}
            className="btn btn-primary bg-red-400 hover:bg-red-600 border-none text-white"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSelectedClass;
