import axios from 'axios';
import React,{ useContext,useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertiseSection from '../../../Components/AdvertiseSection/AdvertiseSection';
import Banner from '../../../Components/Banner/Banner';
import CartegorySection from '../../../Components/CategorySection/CartegorySection';
import { UserContext } from '../../../Context/Context';

const Home = () => {
  const data = useLoaderData();
  const {user} = useContext(UserContext);
  const [refresh , setRefresh] = useState(false);
  const [advertisedProducts,setAdvertisedProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/advertise`)
      .then((data) => {
        setAdvertisedProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refresh,user?.email]);

  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <CartegorySection data={data}></CartegorySection>
      {advertisedProducts.length > 0 && (
        <AdvertiseSection
          products={advertisedProducts}
          refresh={refresh}
          setRefresh={setRefresh}
        ></AdvertiseSection>
      )}
    </div>
  );
};

export default Home;