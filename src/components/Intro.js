import React from "react";
import "./intro.css";
import girlImage from "../resources/someGirl.jpg"
import { Input, Button } from "@material-tailwind/react";
import Display from "./Display";
 
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
          <div className="text-4xl text-white h-9"> Hello World</div>
          <div className="flex flex-row justify-center flex-auto">
            <a href="/hostel">
              {" "}
              <Button
                id="btn"
                className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Hostel
              </Button>
            </a>

            <a href="/addAHostel">
              <Button
                id="btn"
                className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                add{" "}
              </Button>
            </a>

            <Button
              id="btn"
              className="p-1 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              On campus
            </Button>
          </div>
          <div>
            <div className="relative  flex w-full max-w-[24rem] ">
              <Input
                type="email"
                value={email}
                onChange={onChange}
                placeholder="search..."
                className="min-w-full pr-20 text-black bg-white rounded-md border-blue-gray-900"
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
        <div className="flex flex-row items-center gap-5 h-30">
          <div className="w-1/2 m-3 ">
            <p className="p-2 text-sm h-auto text-center content-center text-white bg-red-400 rounded-md start-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
              Welcome to your ultimate destination for hassle-free hostel
              hunting in Chikanda! We understand the challenges that students
              face when searching for suitable accommodation, and that's why
              we're here to make your life easier.
            </p>
          </div>
          {/* <div className="w-1/2 m-2 ">
            <img
              className="p-2  h-36 w-7/12 text-sm  text-white bg-red-400 rounded-md start-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "
              src={girlImage}
            /> */}
          {/* <p className="p-3 text-sm  text-white bg-red-400 rounded-md start-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
            
            Welcome to your ultimate destination for hassle-free hostel hunting
            in Chikanda! We understand the challenges that students face when
            searching for suitable accommodation, and that's why we're here to
            make your life easier.
          </p> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
