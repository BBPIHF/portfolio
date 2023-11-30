import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Hamburger, CloseBtn, navLinks } from "../Utils";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-center">
      <nav className="flex justify-between py-7 items-center nav-content gradient section z-20 fixed w-full">
        <img src={logo} alt="Logo" width={38} height={30} />
        <ul className="text-3xl md:flex hidden gap-10">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={"text-white cursor-pointer hover:text-secondary"}
            >
              <button
                onClick={() => {
                  const navElement = document.getElementById(`${link.href}`);
                  if (navElement) {
                    navElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div
          className="text-5xl text-white font-bold block md:hidden ml-auto"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <CloseBtn /> : <Hamburger />}
        </div>
        <Link
          target="_blank"
          className="bg-tertiary text-primary shadow-lg py-3 px-5 rounded-lg border-2 border-secondary font-semibold text-2xl hover:opacity-80 md:flex hidden"
          to="/resume"
        >
          Resume{" "}
        </Link>
      </nav>

      <Sidebar toggle={toggle} />
    </header>
  );
};

export default Navbar;
