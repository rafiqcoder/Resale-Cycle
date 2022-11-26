import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseSection from '../../../Components/AdvertiseSection/AdvertiseSection';
import Banner from '../../../Components/Banner/Banner';
import CartegorySection from '../../../Components/CategorySection/CartegorySection';

const Home = () => {
  const data = useLoaderData();

  const [advertisedProducts,setAdvertisedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/advertise")
      .then((data) => { setAdvertisedProducts(data.data) })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <CartegorySection data={data}></CartegorySection>
      <AdvertiseSection products={advertisedProducts}></AdvertiseSection>
    </div>
  );
};

export default Home;