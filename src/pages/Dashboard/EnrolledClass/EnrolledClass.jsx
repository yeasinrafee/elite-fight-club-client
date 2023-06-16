import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const EnrolledClass = () => {
  const [payments, setPayments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/payments/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      });
  }, [user]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-400 text-center uppercase my-12 ">
        enrolled Classes:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-content-center items-center gap-9 my-5 md:my-24 ml-10">
        {payments &&
          payments.map((payment) => (
            <div key={payment._id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={payment.image} alt="class image" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl text-amber-400 font-bold text-center mb-5">
                  {payment.class_name}
                </h2>
                <p>
                  <span className="text-amber-200 font-bold">Instructor:</span>{" "}
                  {payment.instructor_name}
                </p>
                <p>
                  <span className="text-amber-200 font-bold">Email:</span>{" "}
                  {payment.instructor_email}
                </p>
                <p>
                  <span className="text-amber-200 font-bold">Enrollment: </span>{" "}
                  <span className="text-green-500 font-bold">Enrolled</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
