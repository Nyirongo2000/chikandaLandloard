import React from 'react'
import './DammyData.css'
import Hostel from "../resources/hostel.jpg";
import smile from "../resources/relaxedLady.jpg";
import PopUpDetails from './PopUpDetails';
import { useState } from 'react';
const DamyData = () => {
  const [buttonPopup,setButtonPopup]= useState(false);
  return (
    <div>
      <div id="makeFull">
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src={Hostel} alt="Developer1" />
          </a>
          <div className="text-red-400">
            <div>
              <p>Gender:</p>
              <p>double rooms:5</p>
              <p>minutes:5</p>
              <p>minutes:5</p>
            </div>
            <button>info </button>
            <button
              className="close-modal"
              onClick={() => setButtonPopup(true)}
            >
              more info
            </button>
            <PopUpDetails trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopUpDetails>
          </div>
        </div>
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src={Hostel} alt="Developer1" />
          </a>
          <div className="text-red-400">
            <div>
              <p>Gender:</p>
              <p>double rooms:5</p>
              <p>minutes:5</p>
              <p>minutes:5</p>
            </div>
            <button>info </button>
            <button
              className="close-modal"
              onClick={() => setButtonPopup(true)}
            >
              more info
            </button>
            <PopUpDetails trigger={buttonPopup} setTrigger={setButtonPopup}>
            </PopUpDetails>
          </div>
        </div>
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src={Hostel} alt="Developer1" />
          </a>
          <div className="text-red-400">
            <div>
              <p>Gender:</p>
              <p>double rooms:5</p>
              <p>minutes:5</p>
              <p>minutes:5</p>
            </div>
            <button>info </button>
            <button
              className="close-modal"
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
                          <h1 className="text-blue-900">MAGAZINE TITLE/Issue</h1>
                        </div>
                        <div className="bg-white h-fill">
                          <p className="text-sm text-gray-600">
                            Lorem ipsum magazine meta-deta everything is posible
                            hjabskcl;asvj ijs;lkbkj
                          </p>
                          <div className="flex h-full my-1 bg-white flex-rol">
                            <p className="ml-1 text-sm text-gray-600">30 pages-</p>
                            <p className="ml-1 text-sm text-gray-600">2023-</p>
                            <p className="ml-1 text-sm text-gray-600">23 MB-</p>
                            <p className="ml-1 text-sm text-gray-600">
                              203 Downloads
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row flex-wrap">
                          <button className="text-sm text-white bg-blue-600 hover:bg-blue-900 p-0.5 m-0.5 rounded-md">
                            Download
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
    </div>
  );
};

export default DamyData;