import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const handleClass = (e) => {
    e.preventDefault();
    const form = e.target;
    const class_name = form.className.value;
    const image = form.classImage.value;
    const instructor_name = form.instructorName.value;
    const instructor_email = form.instructorEmail.value;
    const available_seats = parseInt(form.seats.value);
    const number_of_students = 0;
    const price = parseInt(form.price.value);
    const status = "pending";
    const feedback = "";
    const classData = {
      class_name,
      image,
      instructor_name,
      instructor_email,
      available_seats,
      number_of_students,
      price,
      status,
      feedback,
    };

    fetch("https://elite-fight-club-server.vercel.app/addClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Class Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="w-full md:w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-3xl text-amber-400 font-bold text-center">
        Add Your Class Details:{" "}
      </h1>
      <form onSubmit={handleClass}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            name="className"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            name="classImage"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            name="instructorName"
            value={user?.displayName}
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            name="instructorEmail"
            value={user?.email}
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="text" className="input input-bordered" name="seats" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" className="input input-bordered" name="price" />
        </div>
        <input
          type="submit"
          value="add class"
          className="btn btn-block bg-amber-400 border-none mt-3 hover:bg-amber-500"
        />
      </form>
    </div>
  );
};

export default AddAClass;
