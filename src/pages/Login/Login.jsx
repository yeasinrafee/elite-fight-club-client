import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  useTitle("EliteFightClub | Login");
  const { logIn, googleLogIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //Login Authentication
    logIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // Handle Google Login
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          role: "student",
        };
        fetch("https://elite-fight-club-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log(user);
            }
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full md:w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-gray-600">
        Please Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*()-=_+|;':",.<>?]).*/,
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password Must be 6 characters
                </span>
              )}
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password Must be less than 20 characters
                </span>
              )}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              {" "}
              {errors.password && (
                <span className="text-red-500">
                  Password must be have one uppercase and one special character
                </span>
              )}
            </p>
          )}
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block bg-gray-700 border-none mt-5 hover:bg-gray-400 text-white"
        />
      </form>

      <div className="mt-5 w-[250px] mx-auto">
        <button onClick={handleGoogle}>
          <img src="./assets/images/googleSignIn.webp" alt="Google sign in" />
        </button>
      </div>
      <p className="my-5 text-center text-sm">
        New here?{" "}
        <Link to="/signup" className="text-gray-500 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
