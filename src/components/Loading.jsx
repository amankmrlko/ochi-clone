import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Loading() {
  const [counter, setCounter] = useState(1);
  const [startSecondAnimation, setStartSecondAnimation] = useState(false);
  const [startThirdAnimation, setStartThirdAnimation] = useState(false);
  const [expandFirstDiv, setExpandFirstDiv] = useState(false);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) return prevCounter + 1;
        clearInterval(counterInterval);
        return prevCounter;
      });
    }, 20);

    const secondTimeout = setTimeout(() => {
      setStartSecondAnimation(true);
    }, 700);

    const thirdTimeout = setTimeout(() => {
      setStartThirdAnimation(true);
    }, 1300);

    const expandTimeout = setTimeout(() => {
      setExpandFirstDiv(true);
    }, 10);

    const final = setTimeout(() => {
      setFinal(true);
    }, 2800);

    return () => {
      clearTimeout(secondTimeout);
      clearTimeout(thirdTimeout);
      clearTimeout(expandTimeout);
      clearTimeout(final);
      clearInterval(counterInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: "0" }}
      animate={{ y: final && "-100%" }}
      transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
      className="fixed z-[1000] top-0 left-0 w-full h-screen flex items-center justify-center bg-zinc-500"
    >
      <div className=" flex items-center justify-center">
        <motion.div
          initial={{ y: "100%" }}
          animate={{
            y: "0",
            width: expandFirstDiv ? "101vw" : "70vw",
            height: expandFirstDiv ? "101vh" : "70vh",
          }}
          transition={{
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
            width: { delay: 2, duration: 0.7 },
            height: { delay: 2, duration: 0.7 },
          }}
          className="flex items-end founder-font relative z-[1005] bg-zinc-900 rounded-xl w-[70vw] h-[70vh]"
        >
          <div className="counter mb-10 ml-10">
            <h1 className="text-[12vw] text-6xl text-white">{counter}%</h1>{" "}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "40%", y: "-50%", opacity: 0 }}
          animate={
            startSecondAnimation ? { x: "12%", y: "-50%", opacity: 1 } : {}
          }
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }}
          className="rounded-xl absolute top-1/2 -translate-y-1/2 translate-x-[12%] z-[1004] w-[60vw] h-[60vh] bg-zinc-800"
        ></motion.div>

        <motion.div
          initial={{ x: "40%", y: "-50%", opacity: 0 }}
          animate={
            startThirdAnimation ? { x: "15%", y: "-50%", opacity: 1 } : {}
          }
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 1 }}
          className="rounded-xl absolute top-1/2 -translate-y-1/2 translate-x-[15%] z-[1002] w-[60vw] h-[50vh] bg-zinc-700"
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default Loading;
