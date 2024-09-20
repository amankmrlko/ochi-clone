import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Image from "../assets/content-image01.jpg";
import { motion } from "framer-motion";

function Landingpage() {
  const [pic, setPic] = useState(false);

  useEffect(() => {
    const pic = setTimeout(() => {
      setPic(true);
    }, 3200);
    return () => {
      clearTimeout(pic);
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.5"
      className="w-full h-screen pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: pic && "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="overflow-hidden mr-[1vw] rounded-md w-[8vw] h-[5.1vw] relative top-[0.9vw]"
                  >
                    <img className="img-text" src={Image} alt="" />
                  </motion.div>
                )}
                <h1 className="flex items-center uppercase text-[8vw] leading-[6vw]  tracking-thighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center neu-font px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2 cursor-pointer">
          <div className="px-5 py-2 uppercase border-[2px] border-zinc-500 rounded-full font-light text-md">
            start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex justify-center items-center rotate-[45deg]">
            <FaArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
