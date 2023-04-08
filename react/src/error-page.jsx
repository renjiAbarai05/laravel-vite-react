import { useNavigate, NavLink, useRouteError } from "react-router-dom";
import SvgComponent from "./components/VasePushByCatSvg";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  // navigate("/");

  return (
    <div class="h-screen w-screen bg-gray-100 flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">{error.status}</div>
          <p class="text-2xl md:text-3xl font-light leading-normal">
            {error.statusText}
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink
            to="/"
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            back to homepage
          </NavLink>
        </div>
        <div class="max-w-lg">
          <SvgComponent />
        </div>
      </div>
    </div>
  );
}
