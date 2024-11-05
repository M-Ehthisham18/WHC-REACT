// SideBarMenu.js
import React, { useState } from "react";
import MenuButton from "../MenuButton";
import Navlink from "../../components/Navlink";
function SideBarMenu() {  
  const [isOpen, setIsOpen] = useState(false) 

  return (
    <div className="flex ">
      {/* SideBarMenu */}
      <div
        className={`fixed inset-y-0 z-20 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-[#5045e5] text-white w-64 p-5`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" focus:outline-none  mb-5 w-full flex justify-end "
        >
          <svg
            class="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>

          <div></div>
        </button>
        <div className="min-h-screen p-6  ">
          {/* <h2 className="text-3xl font-bold mb-12">
            <Navlink name="Resources" route="/resources" />
          </h2> */}
          <div className="flex flex-col items-start gap-y-4 text-xl font-semibold">
            <Navlink name="Health" route="/resources-health" />
            <Navlink name="Education" route="/resources-education" />
            <Navlink name="Challenges" route="/resources-challenges" />
            <Navlink
              name="Gender Equality"
              route="/resources-gender-equality"
            />
            <Navlink name="Child & Adult" route="/resources-child-and-adult" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 max-lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuButton />
        </button>
      </div>
    </div>
  );
}

export default SideBarMenu;