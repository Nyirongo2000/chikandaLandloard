import React from "react";
import "./intro.css";
import { Button } from "@material-tailwind/react";
function Intro() {
  return (
    <div>
      <div
        id="fullly"
        className="flex flex-col items-center justify-between h-full"
      >
        <div className="flex flex-col items-center h-auto mt-12">
          <div className="text-md h-9"> Hello World</div>
          <div className="flex flex-row justify-center flex-auto">
            <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              <a href="/hostel">Hostel</a>
            </Button>
            <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Agents
            </Button>
            <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              On campus
            </Button>
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
