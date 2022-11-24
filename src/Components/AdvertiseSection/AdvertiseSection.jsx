import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const AdvertiseSection = () => {
    return (
      <section class="bg-white dark:bg-gray-900 my-20">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Best Sellers
          </h1>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard children>
              
              <button className="btn btn-success mt-5">Book Now</button>
            </ProductCard>
          </div>
        </div>
      </section>
    );
};

export default AdvertiseSection;