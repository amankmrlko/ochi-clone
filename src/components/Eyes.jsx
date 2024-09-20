import React from "react";
import Eyesonly from "./Eyesonly";

function eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="w-full h-full relative bg-cover bg-center bg-[url('./assets/bg-view.jpg')]"
      >
        <Eyesonly />
      </div>
    </div>
  );
}

export default eyes;
