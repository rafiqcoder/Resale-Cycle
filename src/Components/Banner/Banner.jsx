import React from 'react';
import banner1 from "../../Assets/images/banner2.webp";
import banner2 from "../../Assets/images/BANNER3.jpg";


const Banner = () => {
    return (
      <div className="dark:bg-gray-900 mt-10 sm:mt-0">
        <div className="container mx-auto py-9 md:py-12 lg:py-24">
          <div className="relative mx-4">
            <img
              src={banner1}
              alt="A work table with house plants"
              className="w-full h-[600px] hidden lg:block object-cover rounded-xl"
            />
            <img
              src={banner1}
              alt="A work table with house plants"
              className="hidden sm:block lg:hidden w-full h-full rounded-xl"
            />
            <img
              src={banner1}
              alt="A work table with house plants"
              className="sm:hidden w-full h-full rounded-xl"
            />

            <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-4 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">
                Sale The old One Get a Better One
              </h1>
              <p className="text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12">
                A bike is a human-powered or motor-powered, pedal-driven,
                single-track vehicle, having two wheels attached to a frame, one
                behind the other.
              </p>
              <button className="hidden sm:flex bg-primary rounded-lg py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-secondary">
                Explore
              </button>
            </div>
            <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-secondary">
              Explore
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;