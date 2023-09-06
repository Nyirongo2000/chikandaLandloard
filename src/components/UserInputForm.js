import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Radio,
} from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
 
import LandlordService from "../services/LandlordService";
function UserInputForm() {
    const [hostel, setHostel] = useState({
      id: "",
      hostel_name: "",
      timeTaken: "",
      gender: "",
      description: "",
      rCondition: "",
      numberOfSingleRooms: "",
      numberOfDoubleRooms: "",
      phoneNumber: "",
      landlordName: "",
      landlordDescription: "",
      location_Name: "",
      location_Description: "",
      StudentEmail: "",
    });

    const handleChange =(e) =>{
      const value = e.target.value;
      setHostel({ ...hostel, [e.target.name]: value });
    }
    const navigate=useNavigate();
    const saveHostel=(e)=>{
      e.preventDefault();
      LandlordService.saveHostel(hostel)
      .then((Response)=> {
        console.log(Response);
        navigate("/");
        
      })
      .catch((Error)=>{
        console.log(Error);
      });

    }
  return (
    <div>
      <div
        id="theinputform"
        className="flex flex-row items-center justify-center flex-auto p-3"
      >
        <Card color="transparent" shadow={false} className="relative">
          <Typography variant="h4" color="blue-gray">
            Hello Chikanda
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your hostel details.
          </Typography>
          <form className="mt-8 mb-1 ">
            <div className="flex flex-col gap-4 ">
              <Input
                size="sm"
                label="Hostel Name"
                name="hostel_name"
                value={hostel.hostel_name}
                onChange={(e) => handleChange(e)}
                className="fill"
              />
              <div className="flex flex-row gap-10">
                <Radio
                  name="gender"
                  label="male"
                  value="male" // Different value for male
                  onChange={(e) => handleChange(e)}
                />
                <Radio
                  name="gender"
                  label="female"
                  value="female" // Different value for female
                  onChange={(e) => handleChange(e)}
                  // defaultChecked // Only set defaultChecked on one option if needed
                />
              </div>
              <Input
                label="minutes from campus"
                name="timeTaken"
                type="number"
                min="1"
                max="60"
                value={hostel.timeTaken}
                onChange={(e) => handleChange(e)}
              ></Input>
              {/* add authontication world limit */}
              <Textarea
                label="Description"
                name="description"
                value={hostel.description}
                onChange={(e) => handleChange(e)}
                placeholder="word limit"
              />
            </div>
            <hr />
            <Typography color="gray" className="mt-1 font-normal">
              Rooms.
            </Typography>
            <div className="flex items-center gap-4 my-4 ">
              <Input
               
                label="# of single rooms "
                class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              ></Input>
              <Input
                label="# of double rooms "
                class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              ></Input>
            </div>
            <hr />
            {/* location */}
            <Typography color="gray" className="mt-1 font-normal">
              Location
            </Typography>
            <Input
              size="sm"
              label="Name"
              className="fill "
              name="location_Name"
              value={hostel.location_Name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <Textarea
              label="Description"
              placeholder="word limit"
              name="location_Description"
              value={hostel.location_Description}
              onChange={(e) => handleChange(e)}
            />
            <hr />
            <Typography color="gray" className="mt-1 font-normal">
              Landlord
            </Typography>
            <Input
              size="sm"
              label="Landlord Name"
              className="fill"
              name="landlordName"
              value={hostel.landlordName}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <Input
              size="sm"
              label="phone # (0882748301)"
              className="fill"
              name="phoneNumber"
              value={hostel.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <select
              name="landlordDescription"
              value={hostel.landlordDescription} // Make sure this matches one of the option values
              onChange={(e) => handleChange(e)}
              className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            >
              <option value="kind">Kind of Landlord</option>
              <option value="okay">Okay</option>
              <option value="bad">Bad</option>
              <option value="great">Great</option>
            </select>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the that
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    This information is True
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Input
              type="email"
              name="StudentEmail"
              label="Student email "
              pattern="^[\w\.-]+@unima\.ac\.mw$"
              required
              value={hostel.StudentEmail}
              onChange={(e) => handleChange(e)}
            ></Input>
            <Button className="mt-6 " fullWidth onClick={saveHostel}>
              Add Hostel
            </Button>
            {/* <Typography color="gray" className="mt-4 font-normal text-center">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
          </form>
        </Card>
      </div>
    </div>
  );
}

export default UserInputForm;
