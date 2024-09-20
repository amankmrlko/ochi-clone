import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".05"
      className="w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="founder-font leading-none uppercase text-[25vw] -mb-[2vw] -mt-[5vw]"
        >
          we are ouchi&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="founder-font leading-none uppercase text-[25vw] -mb-[2vw] -mt-[5vw]"
        >
          we are ouchi&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
          className="founder-font leading-none uppercase text-[25vw] -mb-[2vw] -mt-[5vw]"
        >
          we are ouchi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
