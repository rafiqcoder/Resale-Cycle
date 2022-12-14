import React from 'react';
import { Link } from 'react-router-dom';
import notFound from "../../Assets/images/404.jpg";
const NotFound = () => {
  //seting title
  // UseTitle('Not Found');
    return (
      <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <img className="hidden lg:block" src={notFound} alt="" />
          <img className="hidden md:block lg:hidden" src={notFound} alt="" />
          <img className="md:hidden" src={notFound} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="my-10">
            <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="py-1 text-base text-gray-800">
              The content you’re looking for doesn’t exist. Either it was
              removed, or you mistyped the link.
            </p>
            <p className=" text-base text-gray-800 ">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
          </div>
          <Link
            to="/"
            className="w-full lg:w-auto border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Go back to Homepage
          </Link>
        </div>
      </div>
    );
};

export default NotFound;