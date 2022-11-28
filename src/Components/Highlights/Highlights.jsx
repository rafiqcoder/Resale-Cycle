import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = () => {
    return (
      <div className="xl:container 2xl:mx-auto  md:py-12 md:px-6 py-9 px-4 container mx-auto">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
          {/* Safe Shopping Grid Card */}
          <div className=" p-6 bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 3H13M12 7V3V7Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.6569 4.92871L19.0711 6.34292M15.5355 8.46424L18.364 5.63582L15.5355 8.46424Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 11V13M17 12H21H17Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.071 17.6572L17.6568 19.0714M15.5355 15.5359L18.3639 18.3643L15.5355 15.5359Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 21H11M12 17V21V17Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.34314 19.0713L4.92893 17.6571M8.46446 15.5358L5.63603 18.3642L8.46446 15.5358Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13L3 11M7 12H3H7Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.92896 6.34277L6.34317 4.92856M8.46449 8.46409L5.63606 5.63567L8.46449 8.46409Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              Safe Shopping
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              Our all outlets have industry-leading health precautions
            </p>
            <Link className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </Link>
          </div>

          {/* Personal Shopping Grid Card */}
          <div className=" p-6 bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 21H21"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 7V8C3 8.79565 3.31607 9.55871 3.87868 10.1213C4.44129 10.6839 5.20435 11 6 11C6.79565 11 7.55871 10.6839 8.12132 10.1213C8.68393 9.55871 9 7.79565 9 7M3 7H9M3 7H21M3 7L5 3H19L21 7M9 7C9 7.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8M9 7H15V8M15 8C15 8.79565 15.3161 9.55871 15.8787 10.1213C16.4413 10.6839 17.2044 11 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8V7"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 20.9996V10.8496"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 20.9996V10.8496"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              Personal Shopping
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              Contact your local outlet to book a personal appointment
            </p>
            <Link className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </Link>
          </div>

          {/* Free Shopping Grid Card */}
          <div className=" p-6 bg-gray-50">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6">
              Secure Payment
            </p>
            <p className=" font-normal text-base leading-6 text-gray-600 my-4">
              We accept all major credit cards and stripe
            </p>
            <Link className=" cursor-pointer text-base leading-4 font-medium text-gray-800 border-b-2 border-gray-800 hover:text-gray-600 ">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Highlights;