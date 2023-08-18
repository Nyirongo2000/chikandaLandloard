import React from 'react'
import './DammyData.css'
import Hostel from "../resources/hostel.jpg";
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
              <h2>my popup</h2>
              <div>
                <div className="leftDetails">
                  <p> image slider</p>
                  <img src={Hostel} alt="Developer1" />
                </div>
                <div className="rightDetails"></div>
              </div>
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
              <h2>my popup</h2>
              <div>
                <div className="leftDetails">
                  <p> image slider</p>
                  <img src={Hostel} alt="Developer1" />
                </div>
                <div className="rightDetails"></div>
              </div>
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
              <h2>my popup</h2>
              <div>
                <div className="leftDetails">
                  <p> image slider</p>
                  <img src={Hostel} alt="Developer1" />
                </div>
                <div className="rightDetails"></div>
              </div>
            </PopUpDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamyData;