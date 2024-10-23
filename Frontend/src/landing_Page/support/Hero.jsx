import React from "react";
import "./hero.css";


function Hero() {
    return ( 
        <div className="support-portal">
      {/* Header Section */}
      <div className="header">
        <h1>Support Portal</h1>
        <a href="#">Track tickets</a>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <h2>
          Search for an answer or browse help topics to create a ticket
        </h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="links-container">
        <div className="links">
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday margins</a>
          <a href="#">Kite user manual</a>
        </div>

        <div className="featured">
          <h3>Featured</h3>
          <ol>
            <li>
              <a href="#">Connectivity issue - Support telephone line [Resolved]</a>
            </li>
            <li>
              <a href="#">MCX Option contracts expiry - October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
        
    )
    }

    export default Hero;