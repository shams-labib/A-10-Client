import React from "react";
import ErrorImg from "../../assets/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-[70px]">
      <div>
        <img className="w-[400px] h-[400px]" src={ErrorImg} alt="" />
      </div>
      <div className="text-center space-y-3 mt-5">
        <h1 className="text-4xl font-semibold">Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <Link
          to={"/"}
          className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg px-7"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
