import React from "react";
function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 ">
          <img src="Media/largestBroker.svg" alt=""  style={{width:"95%"}}/>
        </div>
        <div className="col-6 mt-5">
          <h2>Largest stock broker in India</h2>
          <p>3+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
          <div className="row">
            <div className="col-6">
            <ul>
            <li>Futures and Options</li>
            <li>Equity and Commodity</li>
            <li>Currency</li>
            <li>Commodity derivatives</li>
          </ul>
            </div>
            <div className="col-6">
            <ul>
            <li>Futures and Options</li>
            <li>Equity and Commodity</li>
            <li>Currency</li>
            <li>Commodity derivatives</li>
          </ul>
            </div>
          </div>
          <img src="Media/pressLogos.png" alt=""  style={{width:"80%"}}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default Awards;