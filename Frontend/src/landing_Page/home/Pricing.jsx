import React from "react";

function Pricing() {
  return (
    <div className="container mb-5" style={{marginTop:"100px"}}>
      <div className="row">
      <div className="col-4">
        <h2>Unbeatable pricing</h2>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        <div><a href="http://">See Pricing</a></div>
      </div>
      <div className="col-2"></div>
      <div className="col-2 text-center " style={{fontSize:"13px"}}>
        <img src="Media/pricing0.svg" alt="" />
        <p>Free account
opening</p>
      </div>
      <div className="col-2 text-center " style={{fontSize:"13px"}}>
        <img src="Media/pricingEquity.svg" alt="" />
        <p>Free equity delivery
and direct mutual funds</p>
      </div>
      <div className="col-2 text-center" style={{fontSize:"13px"}}>
        <img src="Media/intradayTrades.svg" alt="" />
        <p>Intraday and
F&O</p>
      </div>
      </div>

      
      
      
    </div>
  );
}


export default Pricing;