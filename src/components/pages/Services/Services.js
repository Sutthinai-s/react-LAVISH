import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Service() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default Service;