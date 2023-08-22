import React from "react";
import "./DammyData.css";
import Hostel from "../resources/hostel.jpg";
import smile from "../resources/relaxedLady.jpg";
import PopUpDetails from "./PopUpDetails";
import { useState } from "react";
const DamyData = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div id="makeFull">
        <div class="gallery">
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
        </div>
        <div class="gallery">
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
        </div>
        <div class="gallery">
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
        </div>
        <div class="gallery">
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
            <PopUpDetails trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className=" flex flex-row m-0.5 mr-2 p-1 bg-white rounded-md shadow-md">
                <div className="h-24">
                  <img
                    className="h-full bg-cover hover:rounded-md"
                    src={smile}
                    alt="magazine"
                  />
                </div>
                <div
                  id="pdfgeeDiv"
                  className=" flex flex-col w-full m-0.5 flex-wrap"
                >
                  <div className=" bg-white my-0.5 ">
                    <h1 className="text-blue-900">Name of hostel</h1>
                  </div>
                  <div className="bg-white h-fill">
                    <p className="text-sm text-gray-600">
                      Lorem ipsum meta-deta everything is posible
                    </p>
                    <div className="flex h-full my-1 bg-white flex-rol">
                      <p className="ml-1 text-sm text-gray-600">6 rooms-</p>
                      <p className="ml-1 text-sm text-gray-600">
                        tags: single ,doube
                      </p>
                      <p className="ml-1 text-sm text-gray-600">10 minutes</p>
                      <p className="ml-1 text-sm text-gray-600">
                        phone #:0882748301{" "}
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
      </div>
      <hr />

      {/* <section className="h-20 bg-slate-200">
        <div className="">
           <a href="/hostel">see more...</a>
        </div>
        
      </section> */}
    </div>
  );
};

export default DamyData;
