import React from 'react';

const MyProducts = () => {
    return (
      <div>
        <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            class="object-cover w-full h-56"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />

          <div class="py-5 text-center">
            <button
              class="block text-2xl font-bold text-gray-800 dark:text-white"
              tabindex="0"
            >
              John Doe
            </button>
            <span class="text-sm text-gray-700 dark:text-gray-200">
              Software Engineer
            </span>
          </div>
        </div>
      </div>
    );
};

export default MyProducts;