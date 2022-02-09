import React from "react";
import { Navbar1 } from "../../../components/Navbar/Navbar";
import { HeroSection } from "../../../components/Home/HeroSection";
import { DetailWardrobe } from "../DetailWardrobe";
const ProfiloSliding = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <HeroSection heading="WARDROBE ALEXIA" />
      </div>
      <DetailWardrobe />
    </>
  );
};

export default ProfiloSliding;
