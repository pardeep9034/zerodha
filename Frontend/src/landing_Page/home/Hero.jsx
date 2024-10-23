import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="Media/homeHero.png" alt="" />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="p-3 btn btn-primary" style={{width:"30%",margin:"0 auto"}}>Sign Up for free</button>
   
        </div>
      
    </div>
  );
}

export default Hero;