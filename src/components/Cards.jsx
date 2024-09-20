import React from "react";
import Img1 from "../assets/logo002.svg";
import Img2 from "../assets/logo003.png";

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full  px-20 pb-10 flex  gap-[1.5vw] justify-center"
    >
      <div className="relative w-1/2 h-[52vh] rounded-xl bg-[#004D43] flex items-center justify-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
        <p className="absolute bottom-2 neu-font left-2 m-[1vw] text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-full px-2 py-1">
          &copy; 2019-2022
        </p>
      </div>
      <div className="w-1/2 h-[52vh] flex items-center gap-[1.5vw] justify-center">
        <div className="relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img src={Img1} />
          <p className="absolute neu-font text-[0.9vw] cursor-pointer uppercase bottom-2 left-2 m-[1vw] border-[1px] rounded-full px-2 py-1">
            Rating 5.0 on clutch
          </p>
        </div>
        <div className="relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img className="w-[7vw]" src={Img2} />
          <p className="uppercase text-[0.9vw] cursor-pointer neu-font absolute bottom-2 left-2 m-[1vw] border-[1px] rounded-full px-2 py-1">
            business bootcamp alumni
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
