import React from "react";
import{Link} from "react-router-dom";


function Team() {

    return (
        <div className="container">
             <div className="row  mb-5">
                <h2 className="text-center mt-5 mb-5">People</h2>
                <div className="col-6 text-center">
                    <img src="Media/nithinKamath.jpg" alt="" style={{width:"60%", borderRadius:"100%"}}/>
                    <h4>Nithin Kamath</h4>
                    <h6>Fouber , CEO</h6>
                </div>
                <div className="col-6">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p >Connect on <Link to="/" style={{textDecoration:"none"}}>HomePage</Link> / <Link to="#" style={{textDecoration:"none"}}>TradingQnA</Link> / <a href="" style={{textDecoration:"none"}}>Twitter</a> </p>
                   

                </div>
            
            </div>
        
        
        </div>
    );
    }
export default Team;