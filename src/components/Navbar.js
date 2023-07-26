import React from "react";
import { useState } from "react";
import "../App.css";
// import ReorderIcon from "@material-ui/icons/Reorder";
// import SearchIcon from "@material-ui/icons/Search";
function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftSide">
        {/* if showlinks =true then set id to hidden else empty id */}
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/book">Book</a>
          <a href="/about">about us</a>
          <a href="/contact">Contact Us</a>
        </div>
        {/* sets to the oposite of initial on click */}
        <button onClick={()=> setShowLinks(!showLinks)}>open</button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="search..."/>
        <button>SearchIcon</button>
      </div>
    </div>
  );
}

export default Navbar;
