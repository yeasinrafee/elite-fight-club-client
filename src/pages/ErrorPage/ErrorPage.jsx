import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("EliteFightClub | ErrorPage");
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-amber-50 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <FaceFrownIcon className="w-40 h-40 text-amber-400" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-amber-400">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-gray-600 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn bg-amber-400 border-none">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
