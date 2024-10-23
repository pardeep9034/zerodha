import React from "react";

function Stats() {
    return (
        <div className="container  mb-5" style={{marginTop:"100px"}}>
            <div className="row">
                <div className="col-6" style={{fontSize:"13px"}}>
                    <h2 className="mb-5">Trust with confidence</h2>
                    <h3>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>



                </div>
                <div className="col-6 mt-5">
                    <img src="Media/ecosystem.png" alt="" style={{width:"80%"}} />
                    <div className="row text-center">
                        <div className="col-6"><a href=""> explore</a></div>
                       <div className="col-6"> <a href="">Try kite Demo</a></div>
                    </div>
                </div>
            </div>
        
        
        </div>
    );
    }

export default Stats;