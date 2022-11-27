import React from 'react';

const ProductCard = ({ children,item }) => {
    console.log(children);
    return (
      <div class="max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800 relative">
        <div class="mt-2">
          <div className="flex justify-between">
            <div class="flex items-center">
              <div class="flex items-center mb-3">
                <img
                  class="object-cover h-10 rounded-full"
                  src={item?.sellerImage}
                  alt="Avatar"
                />

                <div
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200 flex flex-col"
                  tabindex="0"
                  role="link"
                >
                  <div>{item.sellerName}</div>
                  <div className="text-sm font-normal flex">
                    {item.postingDate}
                    {item.verified && (
                      <div className="flex items-center ml-6 justify-center w-4 h-4 rounded-md border  border-blue-600 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"></span>
            </div>
            {children[1]}
          </div>
        </div>
        <img class="object-cover w-full h-64 " src={item?.img} alt="Article" />

        <div class="p-6">
          <div>
            <div
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {item.name}
              <p className="text-sm font-medium text-orange-400">
                {item.location}
              </p>
              <p className="text-sm font-medium text-black">
               Purchased on {item?.purchaseYear}
              </p>
              <p className="text-sm font-medium text-black">
                {item.usedTime} Year used
              </p>
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.desc.slice(0, 100) + "..."}
            </p>
            <div className="flex justify-between ">
              <div className="mt-6">
                <h2 className="">
                  Orginal Price:
                  <span className="text-orange-400">
                    {" "}
                    {item.orginalPrice}
                  </span>{" "}
                  Tk
                </h2>
                <h2 className="font-semibold">
                  Resale Price:{" "}
                  <span className="text-orange-500">{item.sellPrice}</span>
                  Tk
                </h2>
              </div>
              {children[0]}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;