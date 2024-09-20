import React from "react";
import Uncle from "../assets/uncle.jpg";
function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full neu-font leading-[4vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-zinc-800 text-[3.5vw]"
    >
      <h1 className="w-[90%] p-20">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="flex px-20 py-10 w-full border-t-[1px] border-[#99ae49]">
        <div className="w-1/2">
          <h1>Our approach:</h1>
          <button className="my-[1vw] flex items-center gap-[2vw] justify-center px-[2vw] py-[1.5vw] rounded-full leading-none uppercase text-zinc-200 text-[1vw] font-semibold bg-zinc-800">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]">
          <img className="block rounded-[1vw] img-text" src={Uncle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
