import React from 'react'

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
        
        <div className='bg-red-200 h-100'>
          
        </div>
        
      </div>  
    </div>
  );
}

export default Hostels