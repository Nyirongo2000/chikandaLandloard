import React from "react";
import "./DammyData.css";
import { useState } from "react";
import LandlordService from '../services/LandlordService';
import { useLayoutEffect } from "react";
import "./DammyData.css";
import Hostelpic from "../resources/hostel.jpg";
import smile from "../resources/relaxedLady.jpg";
import PopUpDetails from "./PopUpDetails";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";
import {
  Button,
  Tooltip,
  Input,
} from "@material-tailwind/react";


const DamyData = () => {
  
  const [loading, setLoading] = useState(true);
  const [hostells, setHostells] = useState(null);

  const [search, setSearch] = React.useState("");
  const onChangeThis = ({ target }) => setSearch(target.value);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await LandlordService.getHostels();
        setHostells(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  
  const [buttonPopup, setButtonPopup] = useState(false);

  // Pagination state
  const hostelData =hostells;
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page
  // Calculate the total number of pages
  const pageCount = Math.ceil(hostelData?.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the start and end index for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display only the current page's items
  const displayedData = hostelData?.slice(startIndex, endIndex);
  return (
    <div>
      <div className="relative  flex w-full max-w-[24rem] ">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search..."
          className="min-w-full pr-20 text-black bg-white rounded-md border-blue-gray-900"
          containerProps={{
            className: "min-w-0 ",
          }}
        />
        <Button
          // onClick={(e) => setSearch(e.target.value)}
          size="sm"
          color={search ? "blue" : "white"}
          disabled={!search}
          className="!absolute right-1 top-1 rounded"
        >
          search
        </Button>
      </div>
      <div id="makeFull">
        <div>
          {!loading && (
            <div>
              {displayedData
                .filter((hostel) => {
                  const searchTerm = search.trim().toLowerCase();

                  // Check if the search term exists in any of the fields
                  return Object.values(hostel)
                    .map((value) => value.toString().toLowerCase())
                    .some((field) => field.includes(searchTerm));
                })

                .map((hostel) => (
                  <div class="gallery">
                    <img src={Hostelpic} alt="Developer1" />

                    <div className="text-black-400 ">
                      <div>
                        <h2 className="font-bold"> {hostel.hostel_name}</h2>
                        <div className="flex flex-row gap-4 ">
                          <p>minutes: {hostel.timeTaken}</p>
                          <p>double: {hostel.numberOfDoubleRooms}</p>
                        </div>
                        <div className="flex flex-row gap-4 ">
                          <p>Gender:{hostel.gender}</p>
                          <p>{hostel.locationType}</p>
                        </div>
                      </div>
                      <div className="inline-flex flex-wrap items-center gap-3 group">
                        <Tooltip content={hostel.rentalFee}>
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                              <path
                                fillRule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clipRule="evenodd"
                              />
                              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                            </svg>
                          </span>
                        </Tooltip>

                        <Tooltip content={hostel.gender}>
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content={hostel.landlordDescription}>
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M19.5 6h-15v9h15V6z" />
                              <path
                                fillRule="evenodd"
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                        <Tooltip content={hostel.timeTaken}>
                          <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            +TIME
                          </span>
                        </Tooltip>
                      </div>
                      <Button
                        className="p-1 m-2 font-bold text-white bg-blue-300 rounded hover:bg-blue-700"
                        onClick={() => setButtonPopup(true)}
                      >
                        more info
                      </Button>

                      <PopUpDetails
                        trigger={buttonPopup}
                        setTrigger={setButtonPopup}
                      >
                        <div className=" flex flex-row m-0.5 mr-2 p-1 bg-white rounded-md shadow-md">
                          <div className="h-24">
                            <img
                              className="h-full bg-cover hover:rounded-md"
                              src={smile}
                              alt={hostel.hostel_name}
                            />
                          </div>
                          <div
                            id="pdfgeeDiv"
                            className=" flex flex-col w-full m-0.5 flex-wrap"
                          >
                            <div className=" bg-white my-0.5 ">
                              <h1 className="text-blue-900">
                                {hostel.hostel_name}
                              </h1>
                            </div>
                            <div className="bg-white h-fill">
                              <p className="text-sm text-gray-600">
                                {hostel.description}
                              </p>
                              <div className="flex h-full my-1 bg-white flex-rol">
                                <p className="ml-1 text-sm text-gray-600">
                                  Single-{hostel.numberOfSingleRooms}
                                  <br />
                                  Double-{hostel.numberOfDoubleRooms}
                                </p>
                                <p className="ml-1 text-sm text-gray-600">
                                  <h2>{hostel.location_Name}</h2>
                                </p>
                                <p className="ml-1 text-sm text-gray-600">
                                  {hostel.location_Description}
                                </p>
                                <p className="ml-1 text-sm text-gray-600">
                                  ..{hostel.studentEmail}..
                                </p>
                                <p className="ml-1 text-sm text-gray-600 bg-slate-200">
                                  {hostel.phoneNumber}
                                  <Button className="text-sm text-white bg-blue-200 hover:bg-blue-400 p-0.5 m-0.5 rounded-md">
                                    Copy #
                                  </Button>
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row flex-wrap">
                              <Button className="text-sm text-white bg-blue-300 hover:bg-blue-900 p-0.5 m-0.5 rounded-md">
                                Copy 
                              </Button>
                              <Button className="text-sm text-white bg-blue-400 hover:bg-blue-600 p-0.5 m-0.5 rounded-md">
                                Preview
                              </Button>
                            </div>
                          </div>
                        </div>
                      </PopUpDetails>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <hr />
      <ReactPaginate
        className="flex flex-row justify-center gap-2 p-2 border"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"bg-blue-500 text-white"} // Use Tailwind classes for background color and text color
        previousLinkClassName="border rounded-md px-3 py-2 hover:bg-gray-200"
        nextLinkClassName="border rounded-md px-3 py-2 hover:bg-gray-200"
        pageLinkClassName="border rounded-md px-3 py-2 hover:bg-gray-200"
      />
    </div>
  );
};

export default DamyData;
