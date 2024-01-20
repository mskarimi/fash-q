"use client";

import {useRef} from "react";

const btnClassName =
  "flex items-center justify-center w-20 h-8 text-textPrimary/70";
const btn = ["برای خودم", "برای دیگری"];

function HomeSelectTarget() {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex items-center bg-white p-1 rounded-full shadow-xl relative text-sm pointer-events-auto">
      <div
        ref={divRef}
        className="absolute flex items-center justify-center w-20 h-8 bg-primary rounded-full text-white select-none transition-transform duration-200 ease-linear"
      >
        برای خودم
      </div>
      {btn.map((item, index) => {
        return (
          <button
            key={index}
            className={btnClassName}
            onClick={() => {
              const div = divRef.current!;
              if (index === 1) {
                div.style.transform = "translateX(-5rem)";
              } else {
                div.style.transform = "translateX(0rem)";
              }
              div.innerText = item;
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default HomeSelectTarget;
