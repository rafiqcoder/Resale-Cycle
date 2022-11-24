import React from "react";
import UseTitle from "../../hooks/UseTitle";

const Blog = () => {
  //seting title
  UseTitle("Blog");
  
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="relative py-16 bg-gradient-to-b from-indigo-700 to-indigo-600 flex justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white">
            How can we help you?
          </h1>
          <div className="bg-indigo-800 rounded relative mt-6 lg:mt-14 py-4 pl-4 flex items-center w-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for answers"
              className=" ml-4 w-full bg-transparent text-base leading-none text-white placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="pt-14 xl:px-0 px-4 ">
        <div className="w-full lg:flex sm:px-10">
          <div className="lg:w-1/2">
            <img
              alt=" "
              src="https://miro.medium.com/max/1200/1*d3EJxXuQOK-ktAJkovdqSA.jpeg"
              className="w-full rounded-xl"
            />
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-xl font-semibold leading-7">
                Q: Difference Between SQL and NoSQL ?
              </h1>
              <p className=" f-m-m leading-loose mt-2 text-sm">
                Ans: SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>
              <div className="mt-6">
                <div>
                  <p className="  text-base font-semibold f-m-m">
                    There are five practical differences between SQL and NoSQL:
                    <li>Language</li> <li>Scalability</li> <li>Structure</li>{" "}
                    <li>Properties</li> <li>Support</li>{" "}
                    <li>and communities</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://www.appknox.com/hs-fs/hubfs/JWT.jpg?width=1999&name=JWT.jpg"
                className="sm:w-60 sm:h-80 rounded-lg"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8 text-xl" >
                  Q: What is JWT, and how does it work?
                </h1>
                <p className=" f-m-m leading-loose mt-2 text-sm">
                  Ans: JSON Web Token (JWT) is an open standard (RFC 7519) for
                  securely transmitting information between parties as JSON
                  object. It is compact, readable and digitally signed using a
                  private key/ or a public key pair by the Identity
                  Provider(IdP)
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://blog.logrocket.com/wp-content/uploads/2019/07/ES-modules-ESM-node.png"
                className="w-full sm:w-60 sm:h-60 rounded-xl"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-xl font-semibold leading-7 lg:mt-0 mt-8 ">
                  Q: What is the difference between javascript and NodeJS?
                </h1>

                <p className=" f-m-m leading-loose mt-2 text-sm">
                  Ans: JavaScript is a simple programming language that can be
                  used with any browser that has the JavaScript Engine
                  installed. Node.js, on the other hand, is an interpreter or
                  execution environment for the JavaScript programming language.
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                alt=" "
                src="https://i.ibb.co/6mHyPkG/Top-Companies-Using-Node-JS-1024x538.png"
                className="w-full sm:w-60 sm:h-60"
              />
              <div className="lg:ml-6">
                <h1 className="f-m-m text-xl font-semibold leading-7 lg:mt-0 mt-8">
                  Q: How does NodeJS handle multiple requests at the same time?
                </h1>
                <p className="text-sm f-m-m leading-loose mt-2">
                  Ans: NodeJS receives multiple client requests and places them
                  into EventQueue. NodeJS is built with the concept of
                  event-driven architecture. NodeJS has its own EventLoop which
                  is an infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue.
                </p>
                <div className="mt-4">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-16 w-full">
        <button className=" hover:bg-gray-200  border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
          Browse More
        </button>
      </div>
      <div />
    </div>
  );
};

export default Blog;
