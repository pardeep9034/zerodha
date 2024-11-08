import React, { useContext } from 'react'
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Tooltip,Grow } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from '@mui/icons-material';
import GeneralContext from './GeneralContext';


const WatchListItem = ({stock}) => {
    let [showWatchlistActions, setShowWatchlistActions] = React.useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchlistActions(true);
      };
    
      const handleMouseLeave = (e) => {
        setShowWatchlistActions(false);
      };
    
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListAction uid={stock.name} />}
    </li>
    
  )
}


const WatchListAction=({uid})=>{
  const generalcontext=useContext(GeneralContext);


    const handleBuyClick = (e) => {
        generalcontext.openBuyWindow(uid);
       


        };

    return(
        <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={handleBuyClick}
          >
            <button className="buy">Buy</button>
          </Tooltip>
          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    )
}
export  {WatchListItem}

