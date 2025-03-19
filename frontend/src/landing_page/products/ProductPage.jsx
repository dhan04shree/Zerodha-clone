import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImage
        imageURL="images/kite.png"
        productName="Kite"
        productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePay=""
        appStore=""
      />
      <RightImage
       imageURL="images/console.png"
       productName="Console"
       productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       learnMore="" />
      <Universe />
    </>
  );
}

export default ProductPage;
