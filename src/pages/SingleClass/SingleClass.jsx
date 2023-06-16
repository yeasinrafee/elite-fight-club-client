import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const SingleClass = ({ singleClass }) => {
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
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelectClass = (singleClass) => {
    console.log(singleClass);
    if (user && user.email) {
      const selectedClass = {
        classId: _id,
        class_name,
        image,
        instructor_name,
        instructor_email,
        available_seats,
        number_of_students,
        price,
        email: user.email,
      };
      fetch("https://elite-fight-club-server.vercel.app/selected", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your class has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div key={_id} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="class image" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-amber-400 font-bold text-center">
          {class_name}
        </h2>
        <p>
          <span className="text-amber-200 font-bold">Instructor:</span>{" "}
          {instructor_name}
        </p>
        <p>
          <span className="text-amber-200 font-bold">Available seats:</span>{" "}
          {available_seats}
        </p>
        <div className="card-actions justify-between items-center mt-6">
          <p className="text-2xl  border border-amber-200 p-1 rounded-md mr-16">
            <span className="text-amber-200 font-bold">Price:</span> ${price}
          </p>
          <button
            onClick={() => handleSelectClass(singleClass)}
            className="btn btn-primary bg-amber-400 hover:bg-amber-600 border-none text-white"
            disabled={available_seats === 0 ? true : false}
          >
            select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
