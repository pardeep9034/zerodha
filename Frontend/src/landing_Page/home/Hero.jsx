import React from "react";
import {Link} from "react-router-dom";  //import link from react-router-dom

function Hero() {

  const handleClick = () => {
    window.location.href = "/signup";  //redirect to signup page
    
   
  }

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="Media/homeHero.png" alt="" />
        <h1>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="p-3 btn btn-primary" style={{width:"30%",margin:"0 auto"}} onClick={handleClick}>Sign up for free</button>
   
        </div>
      
    </div>
  );
}

export default Hero;