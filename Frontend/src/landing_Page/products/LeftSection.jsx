import React from "react";

function LeftSection({imageurl,heading,description}) {
    return (
        <div className="container mt-5   ">
            <div className="row">
                <div className="col-8">
                    <img src={imageurl}alt="" style={{width:"100%"}}/>
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <div className="row">
                    <div className="col"><a href="">Try demo →</a></div>
                    <div className="col"><a href="">Learn more →</a></div>
                    </div>
                    <div className="row mt-4 ">
                    <div className="col"><img src="Media/googlePlayBadge.svg" alt="" style={{width:"100%"}}/></div>
                    <div className="col"><img src="Media/appstoreBadge.svg" alt="" style={{width:"100%"}}/></div>
                    </div>
                </div>
            </div>
        
        
        </div>
    );
    }

export default LeftSection;