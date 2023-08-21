import React from "react";
import "./intro.css";
function Intro() {
  return (
    <div>
      <div id="fullly" className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center h-auto mt-12">
          <div className="h-9"> hello</div>
          <div className="flex flex-row justify-center flex-auto">
            <button id="btn" className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Hostels
            </button>
            <button id="btn" className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Agents
            </button>
            <button id="btn" className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              On campus 
            </button>
          </div>
          <div>
            <input
              id="inputBtn"
              className="min-w-full p-2 "
              type="text"
              placeholder="search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
