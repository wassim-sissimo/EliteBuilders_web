import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

export function SNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-11">
      <li>
        <a href="#" className="p-1 text-[#F4E9B5] font-bold text-xl">
          Projects
        </a>
      </li>
      <li>
        <a href="#" className="p-1 text-[#F4E9B5] font-bold text-xl">
          Team
        </a>
      </li>
      <li>
        <a href="#" className="p-1 text-[#F4E9B5] font-bold text-xl">
          FAQ
        </a>
      </li>
      <li>
        <a href="#" className="p-1 text-[#F4E9B5] font-bold text-xl">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <nav className="relative top-0 z-10 h-max w-full px-4 py-2 lg:px-8 lg:py-4 bg-transparent">
      <div className="flex items-center justify-between w-full">
        {/* Logo à gauche */}
        <a href="#" className="text-lg font-medium z-20">
          Logo
        </a>

        {/* Navigation au centre */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navList}
        </div>

        {/* Boutons à droite */}
        <div className="flex items-center z-20">
          <button className="hidden lg:inline-block bg-[#4796A8] text-[#F4E9B5] py-2 px-6 rounded-md font-bold">
            Demander un devis
          </button>

          <button
            className="ml-auto h-6 w-6 text-inherit lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition in={openNav} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              state === "entering" || state === "entered"
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            } lg:hidden`}
          >
            {navList}
            <div className="flex items-center gap-x-1">
              <button className="w-full text-blue-gray-900 py-2">Log In</button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 px-4 rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}