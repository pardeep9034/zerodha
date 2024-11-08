import React from 'react'

const Universe = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row text-center text-muted pt-5 my-5">
                <h1>The Zerodha Universe</h1>
                <p> Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row mt-5 text-center " style={{fontSize:"12px",margin:" 0% auto"}}>
                <div className="col-4">
                    <img src="Media/zerodhaFundhouse.png" alt="" style={{ width: "70%" }} />
                    <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4">
                    <img src="Media/sensibullLogo.svg" alt="" style={{ width: "80%" }} />
                    <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4">
                    <img src="Media/smallcaseLogo.png" alt="" style={{ width: "70%" }} />
                    <p>Investment research platform that offers detailed insights on stock sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className="row mt-5 text-center " style={{fontSize:"12px"}}>
                <div className="col-4">
                    <img src="Media/streakLogo.png" alt="" style={{ width: "70%" }} />
                    <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4">
                    <img src="Media/dittoLogo.png" alt="" style={{ width: "70%" }} />
                    <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4">
                    <img src="Media/smallcaseLogo.png" alt="" style={{ width: "70%" }} />
                    <p>Investment research platform that offers detailed insights on stock sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className="row mt-5 mb-5">
            <button className="p-3 btn btn-primary" style={{width:"30%",margin:"0 auto"}} onClick={()=>{window.location.href="/Signup"}}>Sign Up for free</button>
            </div>

          

        </div>
    )
}

export default Universe
