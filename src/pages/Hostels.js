// import React, { useState } from 'react'
import "../components/DammyData.css";
import DamyData from '../components/DamyData';
// import JsonData from "./MOCK_DATA.json";
// import ReactPagination from "react-pagination"
function Hostels() {

  

  return (
    <div>
      <div className="flex flex-col flex-auto w-full">
        <div className="flex flex-row flex-auto w-full">
          {/* front */}
          <div className="flex flex-row justify-center flex-auto">
            <button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              off_Campus
            </button>
            <button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              On_campus
            </button>
          </div>
        </div>
        <div className="h-auto bg-white-700">
          {/* <div class="gallery">
            <img src={Hostel} alt="Developer1" />

            <div className="text-black-400">
              <div>
                <p>Gender:</p>
                <p>double rooms:5</p>
                <p>minutes:5</p>
                <p>minutes:5</p>
              </div>
              <button>info </button>
              <button
                className="p-1 m-2 font-bold text-white bg-blue-300 rounded hover:bg-blue-700"
                onClick={() => setButtonPopup(true)}
              >
                more info
              </button>
              <PopUpDetails
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
              ></PopUpDetails>
            </div>
          </div> */}
          <DamyData/>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default Hostels