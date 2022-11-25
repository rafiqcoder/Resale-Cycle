import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../../Components/Banner/Banner';
import CartegorySection from '../../../Components/CategorySection/CartegorySection';

const Home = () => {
  const data = useLoaderData()
  console.log(data);
    return (
      <div>
        <Banner></Banner>
        <CartegorySection data={data}></CartegorySection>
      </div>
    );
};

export default Home;