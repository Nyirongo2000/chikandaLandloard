import React from "react";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import "../App.css";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div id="Navbar" className="bg-indigo-500 ">
      <div className="leftSide ">
        {/* if showlinks =true then set id to hidden else empty id */}
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/">Home</a>
          <a href="/hostel">Hostel</a>
          <a href="/about">About us</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </div>
        {/* sets to the oposite of initial on click */}
        <button
          className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
          onClick={() => setShowLinks(!showLinks)}

        >
        <FaBars /> {/* Hamburger menu icon */}  
        </button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="search..." />
        <button className="font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Search</button>
      </div>
    </div>
  );
}

export default Navbar;
