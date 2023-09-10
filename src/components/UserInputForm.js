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
    studentEmail: "",
    rentalFee: "",
    locationType: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setHostel({ ...hostel, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const saveHostel = (e) => {
    e.preventDefault();
    LandlordService.saveHostel(hostel)
      .then((Response) => {
        console.log(Response);
        navigate("/");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      {/* wertyuiop */}
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            {/* <h2 class="font-semibold text-xl text-gray-600">Hello Unima</h2>
      <p class="text-gray-500 mb-6">Enter Hostel Details.</p> */}

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <h1 class="font-medium text-3xl">Hostel Details</h1>
                  <p>Please fill out all the fields.</p>
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Hostel Name</label>
                      <input
                        type="text"
                        name="hostel_name"
                        value={hostel.hostel_name}
                        onChange={(e) => handleChange(e)}
                        className="fill"
                        id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>
                    <div className="flex flex-row gap-10">
                      <Radio
                        name="gender"
                        label="male"
                        value="male"
                        onChange={(e) => handleChange(e)}
                      />
                      <Radio
                        name="gender"
                        label="female"
                        value="female"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>minutes from campus</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="timeTaken"
                        type="number"
                        min="1"
                        max="60"
                        value={hostel.timeTaken}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label>Hostel Description</label>
                      <textarea
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="description"
                        value={hostel.description}
                        onChange={(e) => handleChange(e)}
                        placeholder="word limit"
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label># of single rooms</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="number"
                          name="numberOfSingleRooms"
                          value={hostel.numberOfSingleRooms}
                          onChange={(e) => handleChange(e)}
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                    </div>
                    <div class="md:col-span-2">
                      <label># of double rooms</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          type="number"
                          name="numberOfDoubleRooms"
                          value={hostel.numberOfDoubleRooms}
                          onChange={(e) => handleChange(e)}
                          class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>
                    </div>
                    <div class="md:col-span-1">
                      <label>Rulal/Urban</label>
                      <select
                        type="text"
                        name="locationType"
                        class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                        value={hostel.locationType}
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="Urban">Urban </option>
                        <option value="Rural">Rural </option>
                      </select>
                    </div>
                    <div class="md:col-span-5">
                      <label>Rental fee</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="rentalFee"
                        value={hostel.rentalFee}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label>Location name</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="location_Name"
                        value={hostel.location_Name}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label>Location description</label>
                      <textarea
                        placeholder="word limit"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="location_Description"
                        value={hostel.location_Description}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div class="lg:col-span-5">
                      <label>landlord Name</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="landlordName"
                        value={hostel.landlordName}
                        onChange={(e) => handleChange(e)}
                      />
                      <select
                        name="landlordDescription"
                        value={hostel.landlordDescription}
                        onChange={(e) => handleChange(e)}
                        className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md pr-9 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      >
                        <option value="kind">Kind of Landlord</option>
                        <option value="okay">Okay</option>
                        <option value="bad">Bad</option>
                        <option value="great">Great</option>
                      </select>
                    </div>
                    <div class="md:col-span-5">
                      <label> Landlord phoneNumber</label>
                      <input
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        name="phoneNumber"
                        value={hostel.phoneNumber}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div class="md:col-span-5">
                      <div class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox" />
                        <label for="billing_same" class="ml-2">
                          I agreee that all given information is true
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-5">
                      <label>Student Email</label>
                      <input
                        type="text"
                        name="studentEmail"
                        // pattern="^[\w\.-]+@unima\.ac\.mw$"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        // required
                        value={hostel.studentEmail}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={saveHostel}
                        >
                          Add Hostel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
          <a
            href="https://www.buymeacoffee.com/dgauderman"
            target="_blank"
            class="md:absolute bottom-0 right-0 p-4 float-right"
          >
            <img
              src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg"
              alt="Buy Me A Coffee"
              class="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default UserInputForm;
