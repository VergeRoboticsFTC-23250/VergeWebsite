import { useEffect, useState } from "react";
import { clamp } from "../../utils/helpers";

export default function HomePage(){
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    const element = document.getElementById('scrollable');
    if(!element) return;
    element.onscroll = () => {
      const percent = element.scrollTop / window.innerHeight;
      setScrollPercent(percent);
    }

    return () => {
      element.onscroll = null;
    };
  }, []);

  return(
    <div className="h-full overflow-y-scroll overflow-x-clip w-[100vw]" id="scrollable">
      <div className="absolute -z-20 w-[100vw] h-full center">
        <img src="/Chassis.png" className="w-full object-cover" style={{opacity: 0}} alt="Verge Robotics Chassis"/>
      </div>
      <div className="absolute -z-20 w-[100vw] h-full center">
        <img src="/TeamPic.jpg" className="w-full object-cover" style={{opacity: 0}} alt="Team Picture"/>
      </div>
      <div className="relative center flex-col h-full">
        <img className="absolute -z-10" src="/VectorV.svg" alt="Verge Logo"/>

        <h1 data-value='23250' className="font-anton h-[18vw] overflow-clip center text-[15vw] transition-all duration-300 w-[100vw] select-none
        bg-gradient-to-r from-secondary-dark via-secondary-light  to-primary text-transparent bg-clip-text bg-300% animate-numbers"
        >
          23250
        </h1>

        <h2 className="text-[3vw] font-quicksand flex tracking-[2vw] -mr-[2vw] select-none">
          Verge Robotics
        </h2>
      </div>
      <div className="h-screen flex items-end p-8">
        <div>
          <h1 className="font-bold text-2xl text-text-light mb-1">About Us</h1>
          <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pulvinar urna, at fringilla mi pretium a. Nulla sed arcu eu justo sodales molestie eget ut libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque id purus vitae ex consequat sollicitudin eget eu sapien.</p>
        </div>
      </div>
      <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/>
    </div>
  )
}