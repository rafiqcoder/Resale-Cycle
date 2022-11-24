import React from 'react';
import AdvertiseSection from '../../Components/AdvertiseSection/AdvertiseSection';
import CatBanner from '../../Components/CatBanner/CatBanner';
import phonix from "../../Assets/images/phonix.jpg";
const Phonix = () => {
    return (
      
        <div>
          <CatBanner title='Phonix' img={phonix} ></CatBanner>
          <AdvertiseSection></AdvertiseSection>
        </div>
      
    );
};

export default Phonix;