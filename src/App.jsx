import { useRef, useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from './navbar'
import Sidebar from './sidebar'
import Hero from './hero'
import Content from './content'
import Falsefoot from './falsefoot';

function App() {
  const [currIndex, setcurrIndex] = useState(0);
  const myImages = [
    {url: "https://images.unsplash.com/photo-1592844002373-a55ecd7af140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
    {url: "https://images.unsplash.com/photo-1611908700765-78763392651c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"},
    {url: "https://images.unsplash.com/photo-1637995735729-c43250f1ef47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"},
    {url: "https://images.unsplash.com/photo-1628144527410-a4ba57eff3ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
  ];

  const SlideclickLeft = () => {
    const newIndex = currIndex == 0 ? myImages.length - 1 : currIndex - 1;
    setcurrIndex(newIndex);
  }
  const SlideclickRight = () => {
    const newIndex = currIndex == myImages.length - 1 ? 0 : currIndex + 1;
    setcurrIndex(newIndex);
  }

  useEffect(() => {
    const slideTimer = setInterval(SlideclickRight, 10000);
    return () => {
      clearInterval(slideTimer);
    };
  }, [currIndex]);

  return (
    <div>
      <Navbar />

      <div>
        <div className="absolute w-full select-none h-[800px] bg-gradient-to-r from-transparent via-black/70 to-black "></div>
        <div className="h-[800px] bg-transparent absolute w-3/5 group">
          
          <div onClick={SlideclickLeft} className="hidden group-hover:block absolute hover:cursor-pointer text-white/50 hover:text-white top-[50%] translate-y-[-50%] left-5"> <BsChevronCompactLeft size={100} /> </div>
          <div onClick={SlideclickRight} className="hidden group-hover:block absolute hover:cursor-pointer text-white/50 hover:text-white top-[50%] translate-y-[-50%] right-5"> <BsChevronCompactRight size={100} /> </div>
          
          <div className="flex absolute bottom-8 left-[40%] ">
            {myImages.map((slide, indexNo) => (
              <div key={indexNo} className={`text-3xl duration-1000 cursor-pointer ${currIndex === indexNo ? "text-white/90" : "text-white/40"}`}> <RxDotFilled /> </div>
            ))}
          </div>

        </div>
        <div className=" absolute text-7xl pt-20 pl-32 text-slate-200/90 font-mono select-none" > Indian Railways </div>
        <div className=" absolute text-3xl pt-40 pl-40 text-slate-200/70 font-mono select-none" > Safety • Security • Punctuality </div>
        <div className="duration-500 select-none h-[800px] w-full -z-50" style={{backgroundImage: `url(${myImages[currIndex].url})`, backgroundSize: "contain"}} />
      </div>
      
      <Hero />
      <Content />
      </div>
  )
}

export default App
