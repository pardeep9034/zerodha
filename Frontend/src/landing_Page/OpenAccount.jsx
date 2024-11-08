import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h1 className="mb-3">Open a Zerodha account</h1>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <button className="p-3 btn btn-primary" style={{width:"30%",margin:"0 auto"}} onClick={()=>{window.location.href="/Signup"}}>Sign Up for free</button>
   
        </div>
      
    </div>
  );
}

export default OpenAccount;