import React from 'react';
import AdvertiseSection from '../../Components/AdvertiseSection/AdvertiseSection';
import CatBanner from '../../Components/CatBanner/CatBanner';
import veloce from "../../Assets/images/veloce1.jpg";
const Veloce = () => {
    return (
        <div>
            <CatBanner img={veloce} title='Veloce'></CatBanner>
            <AdvertiseSection ></AdvertiseSection>
        </div>
    );
};

export default Veloce;