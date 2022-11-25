import React from 'react';

const ProductCard = ({children,item}) => {
    return (
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 relative">
        <img class="object-cover w-full h-64 " src={item?.img} alt="Article" />
        <div
          className="tooltip ml-2 absolute top-0 right-0"
          data-tip="Report to Admin"
        >
          <button className=" rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-red-600 flex-shrink-0 w-8 h-8 bg-white rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div>
            <div class="mt-2">
              <div className="flex justify-between">
                <div class="flex items-center">
                  <div class="flex items-center">
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
                      <div className="text-sm font-normal">
                        {item.postingDate}
                      </div>
                    </div>
                  </div>
                  <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"></span>
                </div>
                {item.verified && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-md border border-green-600 text-green-500">
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
            <div
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {item.name}
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
            <div className="flex justify-between ">
              <div className='mt-6'>
                <h2 className="">
                  Orginal Price:<span className="text-orange-400"> {item.orginalPrice}</span> Tk
                </h2>
                <h2 className="font-semibold">
                  Sale Price: <span className="text-orange-500">{item.orginalPrice}</span> Tk
                </h2>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;