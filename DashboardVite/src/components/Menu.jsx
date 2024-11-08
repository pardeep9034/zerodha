import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Menu = () => {
  
    let [selectedMenu, setSelectedMenu] = useState(0);
  // let[isProfileOpen,setIsProfileOpen]=useState(false);

  const handleLogoutClick=async()=>{
    const response=await axios.get("https://zerodha-backend-five.vercel.app/?vercelToolbarCode=p9KbVrjl3W8-V49/logout",{withCredentials:true})

    window.location.href = response.data.redirect;
    
  }

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const menuClass="menu"
  const activeMenuClass="menu selected"

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>

            <Link to="/" onClick={()=>{handleMenuClick(0)}} style={{textDecoration:"none"}}><p
            className={selectedMenu === 0 ? activeMenuClass : menuClass}
            
             >Dashboard</p></Link>
            
          </li>
          <li>
          <Link to="/orders" onClick={()=>{handleMenuClick(1)}} style={{textDecoration:"none"}}><p  className={selectedMenu === 1 ? activeMenuClass : menuClass}>orders</p></Link>
          </li>
          <li>
            <Link to="/holdings" onClick={()=>{handleMenuClick(2)}} style={{textDecoration:"none"}}><p  className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link>
          </li>
          <li>
            <Link to="/positions" onClick={()=>{handleMenuClick(3)}} style={{textDecoration:"none"}}><p  className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link>
            </li>
            <li>
            <Link to="/funds" onClick={()=>{handleMenuClick(4)}} style={{textDecoration:"none"}}><p  className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p></Link>
            </li>
            <li>
            <Link to="/apps" onClick={()=>{handleMenuClick(5)}} style={{textDecoration:"none"}}><p  className={selectedMenu === 5 ? activeMenuClass : menuClass}>apps</p></Link>
            </li>
            



         
        </ul>
        <hr />
        <div className="profile" onClick={handleLogoutClick}>

          <p className="username">logout</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
