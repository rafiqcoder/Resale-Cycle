import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseSection from '../../../Components/AdvertiseSection/AdvertiseSection';
import Banner from '../../../Components/Banner/Banner';
import CartegorySection from '../../../Components/CategorySection/CartegorySection';
import Highlights from '../../../Components/Highlights/Highlights';
import NewsLetter from '../../../Components/NewsLetter/NewsLetter';
import { UserContext } from '../../../Context/Context';

const Home = () => {
  const data = useLoaderData();
  const {user} = useContext(UserContext);
  const [refresh , setRefresh] = useState(false);
  const [advertisedProducts,setAdvertisedProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://usedcycle-server.vercel.app/advertise`)
      .then((data) => {
        setAdvertisedProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh,user?.email]);

  console.log(data);
  return (
    <div className="bg-white overflow-hidden">
      <Banner></Banner>
      <CartegorySection data={data}></CartegorySection>
      {advertisedProducts.length > 0 && (
        <AdvertiseSection
          products={advertisedProducts}
          refresh={refresh}
          setRefresh={setRefresh}
        ></AdvertiseSection>
      )}

      <Highlights></Highlights>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;