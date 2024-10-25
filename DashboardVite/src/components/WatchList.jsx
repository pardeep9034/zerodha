import React from "react";

import {watchlist} from "../data/data";
import { WatchListItem }  from "./watchListItem";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
       {watchlist.map((stock,index) => {
        return(
          <WatchListItem key={index} stock={stock} />)
})}
      </ul>
    </div>
  );
};

export default WatchList;
