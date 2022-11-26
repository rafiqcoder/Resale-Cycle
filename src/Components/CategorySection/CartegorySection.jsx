import React from 'react';
import { Link } from 'react-router-dom';

const CartegorySection = ({ data }) => {
  // cat_bg_1;
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Categories
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {data.map((item) => (
              <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96 "
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                  <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                    Best {item.categoryName} Collectctions
                  </h2>
                  <Link
                    to={`/${item.categoryName}/${item._id}`}
                    className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 btn"
                  >
                    View All
                  </Link>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </section>
    );
};

export default CartegorySection;