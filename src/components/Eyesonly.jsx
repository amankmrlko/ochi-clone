import React, { useEffect, useState } from "react";

function Eyesonly() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseY = e.clientY;
      let mouseX = e.clientX;
      let y = mouseY - window.innerHeight / 2;
      let x = mouseX - window.innerWidth / 2;

      var angle = Math.atan2(y, x) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="flex gap-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
      <div className="flex items-center justify-center h-[11vw] w-[11vw] rounded-full bg-zinc-100">
        <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-800">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-[20%]"
          >
            <div className="h-[1.5vw] w-[1.5vw] bg-zinc-100 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[11vw] w-[11vw] rounded-full bg-zinc-100">
        <div className="relative h-2/3 w-2/3 rounded-full bg-zinc-800">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-[20%]"
          >
            <div className="h-[1.5vw] w-[1.5vw] bg-zinc-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyesonly;
