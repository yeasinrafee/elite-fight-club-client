import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClasses(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl text-amber-400 font-bold text-center">
        Your Classes
      </h2>
    </div>
  );
};

export default MyClasses;
