import React from "react";

function RightSection({imageurl,heading,description}) {
    return (
        <div className="container ">
            <div className="row">
                
            <div className="col-5 mt-5" style={{paddingTop:"100px"}}>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <div className="row">
                    
                    <div className="col"><a href="">Learn more →</a></div>
                    </div>
                </div>
                <div className="col-7">
                    <img src={imageurl} alt="" style={{width:"100%"}} />
                </div>
            </div>
        
        </div>
    );
    }

export default RightSection;