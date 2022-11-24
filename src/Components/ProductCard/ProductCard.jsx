import React from 'react';

const ProductCard = ({children}) => {
    return (
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <div class="mt-2">
              <div className="flex justify-between">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img
                      class="object-cover h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                      alt="Avatar"
                    />
                    <div
                      class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabindex="0"
                      role="link"
                    >
                      Jone Doe
                    </div>
                  </div>
                  <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </span>
                </div>
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
              </div>
            </div>
            <div
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              I Built A Successful Blog In One Year
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
                    </p>
                  {children}
          </div>
        </div>
      </div>
    );
};

export default ProductCard;