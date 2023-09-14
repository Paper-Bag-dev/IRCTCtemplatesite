import React from 'react'
import secondarylogo from './secondry-logo.png'
import irctclogo from './irctc-logo.png'
import {AiFillNotification} from 'react-icons/ai'
import {BsCalendarDateFill} from 'react-icons/bs'
import {GrLanguage} from 'react-icons/gr'
const Navbar = () => {
  return (
    <div className=" shadow-xl bg-white shadow-[rgba(0,0,0,0.24)] p-2">
      
      <nav className=" grid grid-cols-7 items-center gap-5">
        {/* Logo */}
        <div className="secondary-logo ml-10">
          <img src={secondarylogo} width={50} />
        </div>

        {/* Main Section */}
        <div className="col-start-2 col-end-5">
          <ul className="flex justify-around font-mono">
            <li><a href="">Ask Disha</a> <div className="bg-blue-950/90 duration-500 hover:w-12 absolute translate-x-6 translate-y-[8px] w-0 h-2"></div> </li>
            <li><a href="">Book</a></li>
            <li><a href="">Loyalty</a></li>
            <li><a href="">Promotions</a></li>
            <li><a href="">More</a></li>
          </ul>
        </div>
        
        <div className=" bg-blue-900 p-2 mx-4 text-slate-100 font-semibold text-center hover: cursor-pointer shadow-slate-500 shadow-sm">
          <a href="">IRCTC Exclusive</a>
        </div>

        {/* Right section */}
        <div className="col-start-6">
          <ul className="flex justify-around">
            <li className="mt-1"><a href=""><GrLanguage size={25} /></a></li>
            <li className="mt-1"><a href=""><BsCalendarDateFill size={25} /></a></li>
            <li ><a href=""><AiFillNotification size={30} /></a></li>
          </ul>
        </div>
        <div className="secondary-logo ml-auto mr-10 col-start-7">
          <img src={irctclogo} width={50} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar