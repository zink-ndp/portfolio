"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);
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
    <div className="fixed md:top-8 md:right-20 z-50 flex flex-row bg-white text-black items-center justify-center">
      <ul
        className={`bg-white p-4 md:rounded-full rounded-xl shadow-xl md:shadow-none flex flex-col right-5 lg:flex-row md:flex-col sm:flex-col fixed lg:right-15 lg:top-8 
                      sm:right-5 sm:items-end xs:right-5 xs:item-end
                      transition ease-in-out duration-500 
                      ${menuOpened ? "top-20" : "top-[-500px]"}`}
      >
        <li>
          <a
            className="nav-item"
            onClick={(e) => {
              e.preventDefault;
              scrollToElement("hero");
              setMenuOpened(false);
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            onClick={(e) => {
              e.preventDefault;
              scrollToElement("about");
              setMenuOpened(false);
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            onClick={(e) => {
              e.preventDefault;
              scrollToElement("skills");
              setMenuOpened(false);
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            onClick={(e) => {
              e.preventDefault;
              scrollToElement("projects");
              setMenuOpened(false);
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="nav-item"
            onClick={(e) => {
              e.preventDefault;
              scrollToElement("contacts");
              setMenuOpened(false);
            }}
          >
            Contacts
          </a>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => setMenuOpened(!menuOpened)}
        className={`hover:text-blue-500 hover:scale-110 transition ease-in-out duration-500 w-6 h-6 text-black fixed top-10 right-10 md:right-15 lg:hidden block `}
      >
        {!menuOpened ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        )}
      </svg>
    </div>
  );
}
