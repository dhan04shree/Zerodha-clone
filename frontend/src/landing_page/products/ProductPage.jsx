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
        link1="https://kite-demo.zerodha.com/"
        link2="https://zerodha.com/products/kite"
        link3="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        link4="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />
      <RightImage
       imageURL="images/console.png"
       productName="Console"
       productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       link1="https://zerodha.com/products/console" />

        <LeftImage
        imageURL="images/coin.png"
        productName="Coin"
        productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="https://coin.zerodha.com/"
        link2="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        link3="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
      />
      <RightImage
       imageURL="images/kiteconnect.png"
       productName="Kite Connect API"
       productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
       link1="https://kite.trade/" />
        <LeftImage
        imageURL="images/varsity.png"
        productName="Varsity mobile"
        productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link3="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        link4="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <p style={{textAlign:"center"}} className="py-5 fs-4">Want to know more about our technology stack? Check out the Zerodha.tech blog. </p>
      <Universe />
    </>
    
  );
}

export default ProductPage;
