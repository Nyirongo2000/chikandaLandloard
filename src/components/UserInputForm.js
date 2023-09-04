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
         
    });

    const handleChange =(e) =>{
      const value = e.target.value;
      setHostel({ ...hostel, [e.target.name]: value });
    }
    const saveHostel=(e)=>{
      e.preventDefault();
      LandlordService.saveHostel(hostel)
      .then((Response)=> {
        console.log(Response)
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
          <Typography variant="h4" color="blue-gray" >
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
              <div className="flex flex-row gap-10 ">
                <Radio
                  name="gender"
                  label="male"
                  value={hostel.gender}
                  onChange={(e) => handleChange(e)}
                />
                <Radio
                  name="gender"
                  label="female"
                  value={hostel.gender}
                  onChange={(e) => handleChange(e)}
                  defaultChecked
                />
              </div>
              <Input
                label="minutes from campus"
                type="number"
                name="timeTaken"
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
              <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option selected>single room</option>
                <option>Double</option>
                <option>triple</option>
              </select>
              <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                <option selected>Room condition</option>
                <option>Good</option>
                <option>not bad</option>
                <option>Great</option>
              </select>
            </div>
            <hr />
            <Typography color="gray" className="mt-1 font-normal">
              Location
            </Typography>
            <Input
              size="sm"
              label="Name"
              className="fill "
              name="locationName"
              // value={landlord.landlordName}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <Textarea
              label="Description"
              placeholder="word limit"
              name="description"
              value={hostel.description}
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
              value={hostel.gender}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <Input
              size="sm"
              label="Phone number ie (0882748301)"
              className="fill"
              name="phone"
              value={hostel.id}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <select
              name="description"
              value={hostel.description} // Make sure this matches one of the option values
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
            <Input text="email" label="student email..." />
            <Button className="mt-6" fullWidth onClick={saveHostel}>
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
