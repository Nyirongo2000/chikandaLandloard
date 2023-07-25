import React from "react";
import { useState } from "react";
import "../App.css";

function Navbar() {

    // const[showLinks, setShowLinks]=useState[false];

  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links">
          <a href="/home">Home</a>
          <a href="/book">Book</a>
          <a href="/about">about us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <button>open</button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="search..."/>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navbar;
