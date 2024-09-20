import React, { useState } from "react";
import Leftimg from "../assets/f_1.png";
import Rightimg from "../assets/f_2.png";
import { motion } from "framer-motion";

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering1, setHovering1] = useState(false);
  return (
    <div className="w-full py-10">
      <div className="neu-font w-full px-20 py-10 text-[3.5vw]">
        <h1>Featured projects</h1>
      </div>
      <div className="w-full px-20 border-t-[1px] border-zinc-700 flex items-center justify-center gap-[1.5vw]">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="w-1/2 relative h-[80vh] my-20 cursor-pointer"
        >
          <h1 className="w-full text-[6.8vw] z-[99] overflow-hidden flex absolute uppercase top-1/2 left-full -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] founder-font tracking-tight leading-none">
            {"cardboard spaceship".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.02 }}
                className="inline-block translate-y-full"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img className="img-text rounded-[1vw]" src={Leftimg} />
        </div>
        <div
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
          className="w-1/2 relative h-[80vh] my-20 cursor-pointer"
        >
          <h1 className="w-full text-[6.8vw] z-[99] overflow-hidden flex absolute uppercase top-1/2 right-full translate-x-1/2 -translate-y-1/2 text-[#CDEA68] founder-font leading-none">
            {"ah2 & matt horn".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.76, 0, 0.24, 1], delay: index * 0.02 }}
                className="inline-block translate-y-full"
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <img className="img-text rounded-[1vw]" src={Rightimg} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
