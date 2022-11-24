import React from 'react';
import { Link } from 'react-router-dom';

const CartegorySection = () => {
    return (
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Categories
          </h1>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 cat_bg_1">
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Best Veloce Collectctions
                </h2>
                <Link
                  to="/veloce"
                  class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 btn"
                >
                  View All
                </Link>
              </div>
            </div>
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 cat_bg_2">
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Best Phonix collections
                </h2>
                <Link
                  to="/phonix"
                  class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 btn"
                >
                  View All
                </Link>
              </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 cat_bg_3">
              <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                  Best Foxster Collections
                </h2>
                <Link
                  to="/foxter"
                  class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 btn"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CartegorySection;