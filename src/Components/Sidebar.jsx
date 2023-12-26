import React, { useRef, useEffect } from "react";
import tope from "../assets/tope.png";
import { LinkdinIn, Github, navLinks, contacts } from "../Utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  return (
    <motion.div
      className="w-[80%] min-h-screen bg-primary fixed top-0 left-[-100vw] z-50"
      animate={{
        left: toggle ? 0 : "",
      }}
      transition={{
        type: "spring",
        stiffness: "100",
        duration: 1000,
      }}
    >
      <ul className="text-3xl gap-10 ">
        <div className="w-full mt-10 text-center">
          <img
            src={tope}
            alt="photo"
            width={150}
            height={150}
            className="rounded-full border-4 border-secondary bg-tertiary mx-auto"
          />

          <h1 className="font-bold pt-3 text-white text-3xl">
            INAOLAJI TOPE MICHAEL
          </h1>

          <div className="flex gap-4 justify-center mt-3">
            <div className="w-[32px] h-[32px] bg-slate-800 cursor-pointer rounded-full flex justify-center items-center">
              <a href={contacts[0].link} target="_blank">
                <LinkdinIn className="  text-white " />
              </a>
            </div>
            <div className="w-[32px] h-[32px] bg-slate-800 cursor-pointer rounded-full flex justify-center items-center">
              <a href={contacts[1].link} target="_blank">
                <Github className="  text-white " />
              </a>
            </div>
          </div>
        </div>

        <div className="pl-[30px] mt-10">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`text-slate-500 mt-2 transition-all py-2 cursor-pointer  hover:pl-8 hover:text-white  ${
                link.active ? "active" : ""
              }`}
            >
              <button
                className="flex items-center gap"
                onClick={() => {
                  const navElement = document.getElementById(`${link.href}`);
                  if (navElement) {
                    navElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.icon && <link.icon className="text-5xl" />}
                <p className="pl-6 text-4xl">{link.label}</p>
              </button>
            </li>
          ))}
        </div>

        <div className=" absolute bottom-[10%] w-[80%] -translate-x-[50%] left-[50%] flex flex-col items-center justify-center gap-8">
          <Link
            target="_blank"
            className={`bg-secondary text-center py-3 px-5 rounded-lg ring-2 font-semibold text-2xl hover:opacity-80 w-full`}
            to="/resume"
          >
            Resume
          </Link>

          <Link
            target="_blank"
            className={`bg-secondary text-center py-3 px-5 rounded-lg ring-2 font-semibold text-2xl hover:opacity-80 w-full`}
            to="/letter"
          >
            Cover Letter
          </Link>
        </div>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
