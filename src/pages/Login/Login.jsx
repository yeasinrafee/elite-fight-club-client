import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  useTitle("EliteFightClub | Login");

  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Password validation
    // if (user) {
    //   setError("");
    //   if (user.email !== email) {
    //     setError("Email and password could not matched");
    //   } else if (email === "" || password === "") {
    //     setError("All fields are required");
    //     return;
    //   } else if (password.length < 6) {
    //     setError("Password must be at least 6 characters");
    //     return;
    //   }
    // }

    //Login Authentication
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // Handle Google Login
  //   const handleGoogle = () => {
  //     setError("");
  //     googleLogIn()
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         navigate(from, { replace: true });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setError(err.message);
  //       });
  //   };
  return (
    <div className="w-full md:w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-amber-400">
        Please Login
      </h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
            name="password"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block bg-amber-400 border-none mt-5 hover:bg-amber-500"
        />
      </form>

      {/* Showing Error Text  */}
      <p className="text-red-500 mt-3">{error}</p>

      <div className="mt-5 w-[250px] mx-auto">
        <button>
          <img src="./images/googleSignIn.png" alt="Google sign in" />
        </button>
      </div>
      <p className="my-5 text-center text-sm">
        New to service?{" "}
        <Link to="/signup" className="text-amber-400 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
