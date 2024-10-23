import React from "react";

function Hero() {
    return (
        <div className="container text-center my-5">
            <div className="row mt-5 py-5">
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
                <div className="row text-center my-5 pt-5">
                    <div className="col-4">
                        <img src="Media/pricing0.svg" alt="" />
                       <h2>Free equity delivery</h2>
                       <p>All equity delivery investments (NSE, BSE),are absolutely free — ₹ 0 brokerage.</p>

                    </div>
                    <div className="col-4">
                        <img src="Media/intradayTrades.svg" alt="" />
                        <h2>Intraday and F&O trades</h2>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                    </div>
                    <div className="col-4"> <img src="Media/pricing0.svg" alt="" />
                    <h2>
                    Free direct MF
                    </h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                    </div>
                </div>

            </div>
       
        
        </div>
    );
    }

    export default Hero;