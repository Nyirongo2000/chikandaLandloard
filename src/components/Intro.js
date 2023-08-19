import React from "react";
import "./intro.css";
function Intro() {
  return (
    <div>
      <div id="fullly" >
          <div className="flex flex-col justify-center w-40 h-auto">
               <div className="h-9"> hello</div>
            <div className="flex flex-row justify-center flex-auto">
                   
                    <button className="p-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                      Hostels
                    </button>
                    <button className="p-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                      Agents
                    </button> 
                               
            </div>
            <input className="w-fill" type="text" placeholder="search..." /> 
            
          </div>
      </div>
    </div>
  );
}

export default Intro;
