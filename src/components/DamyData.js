import React from "react";
import "./DammyData.css";
import Hostelpic from "../resources/hostel.jpg";
import smile from "../resources/relaxedLady.jpg";
import PopUpDetails from "./PopUpDetails";
import { useState } from "react";
import LandlordService from '../services/LandlordService';
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import Hostel from "./Hostel";
const DamyData = () => {
  //ease navigation
  const navigate =useNavigate();
  //fetch data
  //hostel data
  const [hostels, setHostels]=useState(null);
  const [loading, setLoading] =useState(true);
  
  useLayoutEffect(() =>{
    const fetchData= async()=>{
      setLoading(true);
      try{
        const response = await LandlordService.getHostels();
        setHostels(response.data)
      }
      catch(error){
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  },[])
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div>
      <div id="makeFull">
        {!loading && (
          <div>{hostels.map((hostell)=>(
            <Hostel hostel={hostell}
            key={hostell.id}>

           </Hostel>
          ))
       
          }
          </div>
        )}
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
