import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return(
        <div>
            <Hero />
            <LeftSection imageurl={"Media/kite.png" } heading={"kite"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}/>
            <RightSection imageurl={"Media/console.png"} heading={"console"} description={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."}/>
            <LeftSection imageurl={"Media/coin.png"} heading={"coin"} description={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."}/>
            <RightSection imageurl={"Media/kiteconnect.png" } heading={"Kite Connect Api"} description={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"}/>
            <LeftSection imageurl={"/Media/varsity.png"} heading={"Varsity Mobile"} description={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>
            <Universe />
        </div>
        
        
    )}

export default ProductPage;