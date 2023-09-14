import React from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { LuGanttChartSquare, LuArrowUpDown } from "react-icons/lu";
import {RiArrowDropDownLine} from "react-icons/ri"
const BookTicket = () => {
  return (
    <>
      <div
        className="z-50 flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white 
                        h-[38rem] w-[35rem] mt-40  mr-10 absolute top-0 right-0 rounded-md
                        "
      >
        <div className="flex w-full h-16">
          <div className=" bg-blue-900 flex rounded-tl-md p-3 text-slate-50 hover: cursor-pointer font-mono font-semibold text-[25px] w-1/2 h-16 justify-center">
            <BsClipboard2CheckFill className="m-1" size={28} /> PNR STATUS
          </div>
          <div className=" bg-blue-800 w-1 h-16" />
          <div className=" bg-blue-900 flex rounded-tr-md p-3 text-slate-50 hover: cursor-pointer  font-mono font-semibold text-[22px] w-1/2 h-16 justify-center">
            <LuGanttChartSquare className="m-1 mr-2" size={30} />{" "}
            <span className="mt-0.5">CHARTS/VACANCY</span>
          </div>
        </div>

        <div className=" text-center w-full p-5 text-3xl font-semibold font-mono text-blue-950 bg-slate-100">
          BOOK TICKET
        </div>
        <div className="w-full h-0.5 bg-slate-300" />

        {/* Booking system */}
        <div className="flex bg-slate-50">
          {/* Left Col */}
          <div className="flex flex-col mt-8">
            <input
              type="text"
              placeholder="From"
              className="flex bg-slate-100 text-lg rounded-sm p-2 mt-5 mb-5 ml-5 mr-0 w-72 ring-1 ring-blue-300 focus text-slate-500"
            />
            <LuArrowUpDown className=" ml-40" />
            <input
              type="text"
              placeholder="To"
              className="flex bg-slate-100 text-lg rounded-sm p-2 m-5 w-72 ring-1 ring-blue-300 focus text-slate-500"
            />
            <select
              placeholder="To"
              className=" bg-slate-100 text-lg rounded-sm p-2 m-5 w-72 ring-1 ring-blue-300 focus text-slate-500"
            >
              <option value="General">General</option>
              <option value="Ladies">Ladies</option>
              <option value="Lower">Lower Berth/ Sr. Citizen</option>
              <option value="PWD">Person with Disability</option>
              <option value="Tatkal">Tatkal</option>
              <option value="PTatkal">Premium Tatkal</option>
            </select>

            <div className=" font-semibold">
              <input type="checkbox" className="m-2 ml-5 p-2 rounded-sm bg-slate-100" /> 
              Person with Disability concession
            </div>
            <div className=" font-semibold">
              <input type="checkbox" className="m-2 ml-5 2 p-2 rounded-sm bg-slate-100" />
              Flexible with Date
            </div>
          </div>

          {/* Right Col */}
          <div className="mt-8">
            <input
              type="date"
              className="flex bg-slate-100 text-lg rounded-sm p-[8px] m-5 w-48 ring-1 ring-blue-300 focus text-blue-950"
            />
            <select
              className=" bg-slate-100 text-lg rounded-sm p-[8px] m-5 mt-9 w-48 ring-1 ring-blue-300 focus text-slate-500"
            >
              <option>All Classes</option>
              <option>Anubhuti Class (EA)</option>
              <option>AC First Class (1A)</option>
              <option>Vistadome AC (EV)</option>
              <option>Exec. Chair Car (EC)</option>
              <option>AC 2 Tier (2A)</option>
              <option>First Class (FC)</option>
              <option>AC 3 Tier (3A)</option>
              <option>AC 3 Economy (3E)</option>
              <option>Vistadome Chair Car (VC)</option>
              <option>AC Chair car (CC)</option>
              <option>Sleeper (SL)</option>
              <option>Vistadome Non AC (VS)</option>
              <option>Second Sitting (2S)</option>
            </select>
            <div className="py-[42px]" />
            <div className=" font-semibold">
              <input type="checkbox" className="m-2 p-2 rounded-sm bg-slate-100" />
              Train with available Berth
            </div>
            <div className=" font-semibold">
              <input type="checkbox" className="m-2 ml-[8px] p-2 rounded-sm bg-slate-100"/>
              Railway Pass concession
            </div>
          </div>

        </div>

        <div className="p-3 justify-center font-mono flex">
          <button className=" bg-blue-900 text-slate-100 px-24 rounded-l-md whitespace-nowrap text-xl">
            Book Ticket
          </button>
          <div className="bg-blue-800 w-1 h-16" />
          <div className="p-0 px-4 rounded-r-md bg-blue-900 justify-center hover:cursor-pointer">
            <RiArrowDropDownLine className=" text-slate-50 text-6xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTicket;
