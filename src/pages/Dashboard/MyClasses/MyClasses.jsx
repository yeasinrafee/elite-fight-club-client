import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch(`https://elite-fight-club-server.vercel.app/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, [user?.email]);
  return (
    <div className="ml-8 mt-24">
      <h2 className="text-3xl text-gray-600 uppercase font-bold text-center">
        Your Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-9 my-7 md:mb-24">
        {myClasses &&
          myClasses.map((singleClass) => (
            <div
              key={singleClass._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={singleClass.image} alt="class image" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl text-gray-500 uppercase font-bold text-center">
                  {singleClass.class_name}
                </h2>
                <p>
                  <span className="text-gray-600 font-bold">Instructor:</span>{" "}
                  {singleClass.instructor_name}
                </p>
                <p>
                  <span className="text-gray-600 font-bold">Email:</span>{" "}
                  {singleClass.instructor_email}
                </p>
                <p>
                  <span className="text-gray-600 font-bold">
                    Available seats:
                  </span>{" "}
                  {singleClass.available_seats}
                </p>
                <p>
                  <span className="text-gray-600 font-bold">Price:</span> $
                  {singleClass.price}
                </p>
                <p>
                  <span className="text-gray-600 font-bold">Status: </span>
                  <span className="uppercase">{singleClass.status}</span>
                </p>
                {singleClass.status == "denied" && (
                  <p>
                    <span className="text-gray-600 font-bold">Feedback: </span>
                    {singleClass.feedback}
                  </p>
                )}
                <div className="card-actions justify-between items-center mt-6">
                  <button className="btn btn-primary btn-sm bg-gray-700 hover:bg-gray-400 border-none text-white">
                    update
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyClasses;
