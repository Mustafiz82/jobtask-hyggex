import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="flex flex-wrap items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-48" alt="Hyggex Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex gap-10 items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:border-0">
            <NavLink
              to="/"
              activeClassName="md:hover:text-[#06286E] text-gray-900 font-inter text-base font-normal  text-left"
              onClick={toggleMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/Flashcard"
              activeClassName="md:hover:text-[#06286E] text-gray-900 font-inter text-base font-normal   text-left"
              onClick={toggleMenu}
            >
              Flashcard
            </NavLink>

            <NavLink
              to="/FAQ"
              activeClassName="md:hover:text-[#06286E] text-gray-900 font-inter text-base font-normal  text-left"
              onClick={toggleMenu}
            >
              FAQ
            </NavLink>

            <NavLink
              to="/Contact"
              activeClassName="md:hover:text-[#06286E] text-gray-900 font-inter text-base font-normal  text-left"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>

            <Link
              to="/login"
              className="text-white font-inter text-base font-medium  text-left bg-gradient-to-b from-[#06286E] to-[#164EC0] border-2 rounded-full py-2 w-32 h-12 flex flex-row justify-center items-center px-10 py-13"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
