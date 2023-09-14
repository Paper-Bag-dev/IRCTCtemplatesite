import React, { useRef } from "react";
import {
  MdFlight,
  MdHotel,
  MdFastfood,
  MdOutlineDirectionsBus,
  MdKeyboardDoubleArrowDown
} from "react-icons/md";

import { BsFillArrowDownCircleFill, BsFillArrowDownSquareFill } from "react-icons/bs";

import {
  FaChartLine,
  FaUmbrellaBeach,
  FaTrain,
  FaMountain,
} from "react-icons/fa";

import { FaTrainTram } from "react-icons/fa6";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
const Content = () => {
  const ref = useRef(null);
  const scrollToCards = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className=" w-full h-[1000px] bg-gradient-to-b from-blue-100 from-10% via-blue-200 via-70% to-blue-300 ">
      <div className=" text-blue-900 py-24 bg-blue-100 p-16 text-5xl shadow-2xl font-semibold text-center">
        Didn't find what you were looking for?
        <br></br>
        Find a Service Suitable to you here!
      </div>

      <div className="p-28 flex-col">
        <div className="flex p-5 justify-around">
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <MdFlight size={80} />
            <span className="text-2xl mt-2">Flight</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <MdHotel size={80} />
            <span className="text-2xl mt-2">Hotel</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <FaChartLine size={80} />
            <span className="text-2xl mt-2">Rail Drishti</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <MdFastfood size={80} />
            <span className="text-2xl mt-2">E - Catering</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <MdOutlineDirectionsBus size={80} />
            <span className="text-2xl mt-2">Bus</span>
          </div>
        </div>
        <div className="flex p-5 justify-around">
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center  w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <FaUmbrellaBeach size={80} />
            <span className="text-xl mt-2">Holiday packages</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center  w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <FaTrain size={80} />
            <span className="text-2xl mt-2">Tourist Train</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center  w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <FaMountain size={80} />
            <span className="text-2xl mt-2">Hill Railways</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center  w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <FaTrainTram size={80} />
            <span className="text-2xl mt-2">Charter Train</span>
          </div>
          <div className="flex flex-col bg-blue-400 hover:bg-blue-800 duration-500 items-center text-6xl text-white justify-center  w-1/6 h-[200px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[rgba(0,_0,_0,_0.5)_0px_10px_20px] hover:-translate-y-5 rounded-2xl">
            <LuGalleryHorizontalEnd size={80} />
            <span className="text-2xl mt-2">Gallery</span>
          </div>
        </div>
      </div>
      {/* Holiday Packages */}
      <div ref={ref} className="absolute text-7xl w-full p-20 text-blue-900  font-semibold underline text-center">Holidays</div>
      <div className=" w-full flex flex-col bg-blue-300 px-10 items-center">
        <BsFillArrowDownCircleFill onClick={scrollToCards} size={70} className=" text-blue-900 shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] rounded-full hover:cursor-pointer duration-500 animate-bounce" />
        <div className="w-full py-40 px-32">

          <div className="flex justify-between">

            <div className="shadow-[rgba(0,_0,_0,_0.5)_0px_12px_32px] h-[500px] w-[300px] bg-slate-200 rounded-lg">
              <img className="rounded-t-lg" src="https://www.irctc.co.in/nget/assets/images/exterior.jpg" />
              <div className="py-4 pl-2 text-2xl font-bold text-blue-900 ">Maharajas' Express</div>
              <div className=" px-3 text-md font-normal line-clamp-6">Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World's Leading Luxury train” by World Travel Awards consecutively for last six years.
              </div>
              <BsFillArrowDownSquareFill className=" ml-32 mt-3 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] hover: cursor-pointer duration-500 hover:-translate-y-2 rounded-lg text-blue-700" size={50} />
            </div>

            <div className="shadow-[rgba(0,_0,_0,_0.5)_0px_12px_32px] h-[500px] w-[300px] bg-slate-200 rounded-lg">
              <img className="rounded-t-lg" src="https://www.irctc.co.in/nget/assets/images/Thailand.jpg" />
              <div className="py-4 pl-2 text-2xl font-bold text-blue-900 ">International Packages</div>
              <div className=" px-3 text-md font-normal line-clamp-6">Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              </div>
              <BsFillArrowDownSquareFill className=" ml-32 mt-3 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] hover: cursor-pointer duration-500 hover:-translate-y-2 rounded-lg text-blue-700" size={50} />
            </div>

            <div className="shadow-[rgba(0,_0,_0,_0.5)_0px_12px_32px] h-[500px] w-[300px] bg-slate-200 rounded-lg">
              <img className="rounded-t-lg" src="https://www.irctc.co.in/nget/assets/images/Kashmir.jpg" />
              <div className="py-4 pl-2 text-2xl font-bold text-blue-900 ">Domestic Air Packages
              </div>
              <div className=" px-3 text-md font-normal line-clamp-6">Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              </div>
              <BsFillArrowDownSquareFill className=" ml-32 mt-3 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] hover: cursor-pointer duration-500 hover:-translate-y-2 rounded-lg text-blue-700" size={50} />
            </div>

          </div>

          <div className="flex justify-evenly pt-20">
            <div className="shadow-[rgba(0,_0,_0,_0.5)_0px_12px_32px] h-[500px] w-[300px] bg-slate-200 rounded-lg">
              <img className="rounded-t-lg" src="https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg" />
              <div className="py-4 pl-2 text-2xl font-bold text-blue-900 ">Bharat Gaurav Tourist Train</div>
              <div className=" px-3 text-md font-normal line-clamp-5">IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India's rich cultural heritage.
              </div>
              <BsFillArrowDownSquareFill className=" ml-32 mt-3 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] hover: cursor-pointer duration-500 hover:-translate-y-2 rounded-lg text-blue-700" size={50} />
            </div>
            <div className="shadow-[rgba(0,_0,_0,_0.5)_0px_12px_32px] h-[500px] w-[300px] bg-slate-200 rounded-lg">
              <img className="rounded-t-lg" src="https://www.irctc.co.in/nget/assets/images/Manali.jpg" />
              <div className="py-4 pl-2 text-2xl font-bold text-blue-900 ">Rail Tour Packages</div>
              <div className=" px-3 text-md font-normal line-clamp-6">IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              </div>
              <BsFillArrowDownSquareFill className=" ml-32 mt-3 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_5px_10px] hover: cursor-pointer duration-500 hover:-translate-y-2 rounded-lg text-blue-700" size={50} />
            </div>

          </div>
          
        </div>
      </div>

      <div className="flex font-semibold bg-gradient-to-b from-gray-700 to-slate-900 text-white justify-center items-center h-32 w-full">
        Paper Bag Dev
      </div>
    </div>
  );
};

export default Content;
