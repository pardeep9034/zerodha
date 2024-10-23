import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
               
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
                        <div className="col-2">
                            <img src="Media/logo.svg" alt="" style={{width:"80%"}}/>
                            
                        </div>
                        <div className="col-10 ">
                        <ul className="navbar-nav nav-opt ">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Home</Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/product" className="nav-link">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pricing" className="nav-link">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/support" className="nav-link">Support</Link>
                                </li>
                                
                            </ul>
                    
                        </div>
                    </nav>
                
        
       
        
    
    );
    }

export default Navbar;