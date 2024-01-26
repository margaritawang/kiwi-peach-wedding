"use client";

import Link from "next/link";
import { useState } from "react";
import { getGlobalData } from "@/util/getGlobalData";
import { BodyText } from "@/components/BodyText";

const navLinks = getGlobalData().navLinks;

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={`inline-flex items-center p-2 m-3 text-md rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:text-slate-900 fixed top-1 right-1 bg-white`}
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
        </svg>
      </button>
      <div
        className={`absolute right-0 top-0 bottom-0 lg:static h-vh bg-white lg:bg-inherit w-1/2 lg:w-full lg:block ${
          showMenu ? "" : "hidden"
        } p-4 lg:p-0 z-50
        `}
      >
        <div className="text-left lg:hidden text-slate-500 text-xs">
          <p>August 20, 2024</p>
          <p>Stavanger, Norway</p>
        </div>
        <div className="flex text-left lg:text-center justify-center align-center mx-auto pt-5 pb-3 flex-col lg:flex-row">
          {navLinks.map((l) => (
            <div
              className="my-2 lg:my-0 lg:mx-5 hover:underline hover:decoration-wavy"
              key={l.display}
            >
              <Link href={l.url} onClick={() => setShowMenu(false)}>
                <BodyText>{l.display}</BodyText>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
