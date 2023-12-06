import React from "react";
import { useEffect } from "react";

export default function ButtonScrollDown(props: any) {
  useEffect(() => {
    scrollToElement();
  }, []);
  const scrollToElement = (id?: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault;
        scrollToElement(props.id);
      }}
      className="hidden xl:flex flex-col animate-bounce relative -mt-[100px] justify-center z-40 items-center text-black hover:text-blue-500 hover:cursor-pointer"
    >
      <p className="text-sm">{props.text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 mt-3 z-40"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}
