import React from 'react';
import "../App.css";
import Airbnblogo from "./airbnb.svg";
function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <img src={Airbnblogo} alt="airbnb logo" className="logo" />
    </nav>
    </div>
  );
}
export default Navbar;
