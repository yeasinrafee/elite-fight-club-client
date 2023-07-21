import { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch("https://elite-fight-club-server.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      });
  }, []);
  return (
    <div className="w-full ml-9">
      <h2 className="text-4xl font-bold text-gray-600 text-center uppercase my-12 ">
        your payments
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {payments &&
              payments.map((pay, i) => (
                <tr key={pay._id} className="text-center">
                  <th>{i + 1}</th>
                  <td>{pay.class_name}</td>
                  <td>{pay.instructor_name}</td>
                  <td>{pay.instructor_email}</td>
                  <td>{pay.classPrice}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
