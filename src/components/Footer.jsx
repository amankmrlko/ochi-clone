import React from "react";
import Eyesonly from "./Eyesonly";

function footer() {
  return (
    <div className="px-20 relative py-32 w-full min-h-screen bg-[#CDEA68] flex items-center justify-center">
      <Eyesonly />
      <div className="text-center founder-font text-[16vw] leading-[12vw] tracking-tight text-zinc-800 uppercase">
        {["ready", "to start", "the project?"].map((item, index) => (
          <h1>{item}</h1>
        ))}
      </div>
    </div>
  );
}

export default footer;
