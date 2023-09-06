import React from "react";
import "./intro.css";
import { Input, Button } from "@material-tailwind/react";
 
function Intro() {

  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
 
  return (
    <div>
      <div
        id="fullly"
        className="flex flex-col items-center justify-between h-full"
      >
        <div className="flex flex-col items-center h-auto mt-12">
          <div className="text-md h-9"> Hello World</div>
          <div className="flex flex-row justify-center flex-auto">
           
              <a href="/hostel"> <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >Hostel</Button>
            </a>
            
            
              <a href="/addAHostel"><Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >add </Button></a>
           
            <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              On campus
            </Button>
          </div>
          <div>
            <div className="relative block flex w-full max-w-[24rem] ">
              <Input
                type="email"
                value={email}
                onChange={onChange}
                placeholder="search..."
                className="pr-20 text-black bg-white border-blue-gray-900 rounded-md min-w-full"
                containerProps={{
                  className: "min-w-0 ",
                }}
              />
              <Button
                size="sm"
                color={email ? "blue" : "white"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded"
              >
                search
              </Button>
            </div>
            {/* <Input
              id="inputBtn"
              className="min-w-full p-2 "
              type="text"
              placeholder="search..."
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
