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
        className={`inline-flex items-center p-2 m-3 text-md rounded-full lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:text-slate-900 absolute top-1 right-1 bg-white z-10`}
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
        <div>
          <div className="text-left lg:hidden text-slate-500 text-xs">
            <p>August 20, 2024</p>
            <p>Stavanger, Norway</p>
          </div>
          <button
            type="button"
            className={`inline-flex items-center p-2 m-3 text-md rounded-full lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:text-slate-900 absolute top-1 right-1 bg-white z-10`}
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                ></path>
              </g>
            </svg>
          </button>
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
