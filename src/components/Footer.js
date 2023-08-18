import FacebookIcon from "../resources/icons8_facebook_64px.png"
import TwiterIcon from "../resources/icons8_twitter_64px.png"
import InstaIcon from "../resources/icons8_instagram_64px_1.png"
import React from "react"
const Footer = () => {
    return (
      <>
         <div className="flex flex-row flex-wrap justify-between w-full h-full p-4 bg-gray-900">        
            {/* first */}
            <div className="p-2 m-1 ml-1 ">
              <p className="text-4xl text-white">Download info lorem links </p>
              <p className="text-sm text-white">view models  </p>
              <p className="text-sm text-white">buy magazine  </p>
            </div>
            {/* second */}
            <div className="p-2 m-1 ml-1 ">
            <p className="text-sm text-white">Download info lorem links</p>
              <p className="text-sm text-white">view models</p>
              <p className="text-sm text-white">buy magazine </p>         
            </div>
            {/* third */}
            <div className="ml-24" >
              
                <div className="flex flex-row ">
                  {/* use onclick */}
                  <div className="p-1"><img src={FacebookIcon} width="25px" height="25px" alt="facebook link"/></div>
                  <div className="p-1"><img src={TwiterIcon} width="25px" height="25px" alt="Twiter link"/></div>
                  <div className="p-1"><img src={InstaIcon} width="25px" height="25px" alt="Instagam link"/></div>         
                </div>
                <form post className="flex flex-col flex-wrap">
                      <input type="text" placeholder="Enter Your Email address" className="p-1 m-1 text-sm rounded-md " ></input>
                      <textarea type="text" className="p-1 m-1 text-sm rounded-md"></textarea>
                      <button className="w-20 p-1 m-1 text-white bg-blue-400 rounded-md hover:bg-blue-500">subscribe</button>
                </form>
            </div>           
            {/* subscribe to a get notiications */}
             <hr/>

          </div> 
          <div className="text-sm text-center text-white bg-gray-900 h-fill">
            <hr className="mx-24"/>
           <p  >A website by... 2023 ©</p>
          </div>         
      </>    
    )
  }
  export default Footer;