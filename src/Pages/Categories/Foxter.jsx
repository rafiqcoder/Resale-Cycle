import React from 'react';
import AdvertiseSection from '../../Components/AdvertiseSection/AdvertiseSection';
import CatBanner from '../../Components/CatBanner/CatBanner';
import foxter from "../../Assets/images/foxter2.webp";
const Foxter = () => {
    return (
      <div>
        <CatBanner title="Foxter" img={foxter}></CatBanner>
        <AdvertiseSection></AdvertiseSection>
      </div>
    );
};

export default Foxter;