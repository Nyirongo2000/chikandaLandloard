import React from 'react'
import './DammyData.css'
import Hostel from "../resources/hostel.jpg";
import PopUpDetails from './PopUpDetails';
const DamyData = () => {
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
            <button>more info</button>
            <PopUpDetails trigger={true}>
              <h2>my popup</h2>
            </PopUpDetails>
          </div>
        </div>
        <div class="gallery">
          <a target="_blank" href="../data/dumy.jpg">
            <img src={Hostel} alt="Developer1" />
          </a>
          <div class="desc  dark:text-gray-400">
            bsc computer science, profficient in FullStack Development
          </div>
        </div>
        <div class="gallery">
          <a target="_blank" href="img_mountains.jpg">
            <img src={Hostel} alt="Developer1" />
          </a>
          <div class="desc  dark:text-gray-400">
            bsc computer science, profficient in FullStack Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamyData;