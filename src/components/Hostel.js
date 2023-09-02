import React from "react";
import "./DammyData.css";
import Hostelpic from "../resources/hostel.jpg";
import smile from "../resources/relaxedLady.jpg";
import PopUpDetails from "./PopUpDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Hostel = () => {
  // creating a state

  const [buttonPopup, setButtonPopup] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div class="gallery">
        <img src={Hostelpic} alt="Developer1" />

        <div className="text-black-400 ">
          <div>
            <h2 className="font-bold">Hostel Name</h2>
            <p>minutes:.timeTake</p>
            <p>double rooms:5</p>
            <p>Gender: hostel.gender</p>
            <p>room.rCondition</p>
          </div>
          <button>info </button>
          <button
            className="p-1 m-2 font-bold text-white bg-blue-300 rounded hover:bg-blue-700"
            onClick={() => setButtonPopup(true)}
          >
            more info
          </button>
          <PopUpDetails trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className=" flex flex-row m-0.5 mr-2 p-1 bg-white rounded-md shadow-md">
              <div className="h-24">
                <img
                  className="h-full bg-cover hover:rounded-md"
                  src={smile}
                  alt="hostel details"
                />
              </div>
              <div
                id="pdfgeeDiv"
                className=" flex flex-col w-full m-0.5 flex-wrap"
              >
                <div className=" bg-white my-0.5 ">
                  <h1 className="text-blue-900">hostel.hostel_name</h1>
                </div>
                <div className="bg-white h-fill">
                  <p className="text-sm text-gray-600">Description</p>
                  <div className="flex h-full my-1 bg-white flex-rol">
                    <p className="ml-1 text-sm text-gray-600">
                      rooms.rooms-Number(total)
                    </p>
                    <p className="ml-1 text-sm text-gray-600">
                      <h2>location. name</h2>
                    </p>
                    <p className="ml-1 text-sm text-gray-600">
                      landlord.description
                    </p>
                    <p className="ml-1 text-sm text-gray-600">
                      HOstel.timeItTakes
                    </p>
                    <p className="ml-1  text-sm bg-slate-200 text-gray-600">
                      landlord.phone{" "}
                      <button className="text-sm text-white bg-blue-200 hover:bg-blue-400 p-0.5 m-0.5 rounded-md">
                        Copy
                      </button>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap">
                  <button className="text-sm text-white bg-blue-300 hover:bg-blue-900 p-0.5 m-0.5 rounded-md">
                    Copy
                  </button>
                  <button className="text-sm text-white bg-blue-400 hover:bg-blue-600 p-0.5 m-0.5 rounded-md">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </PopUpDetails>
        </div>
      </div>
    </>
  );
};
export default Hostel;
