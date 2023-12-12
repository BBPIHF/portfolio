import React from "react";
import { contacts, navLinks } from "../Utils";
const Contact = () => {
  return (
    <div id="contact" className="section py-[30px] bg-slate-900">
      <h1 className="text-white lg:text-7xl md:text-5xl text-5xl flex justify-center items-center font-bold pb-10">
        Get In Touch
      </h1>
      <div className="flex gap-5 justify-center">
        {contacts.map((contact, index) => {
          return (
            <a href={contact.link} target="_blank" key={index}>
              <contact.icon className="text-white text-5xl border border-slate-500 hover:bg-primary rounded-full p-2" />
            </a>
          );
        })}
      </div>

      <div className=" flex justify-center mt-10 gap-4 flex-wrap">
        {navLinks.map((link, index) => (
          <li
            key={link.label}
            onClick={() => {
              const navElement = document.getElementById(`${link.href}`);
              if (navElement) {
                navElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={
              "text-slate-500 transition-all border border-slate-500  cursor-pointer hover:text-white hover:bg-primary"
            }
          >
            <p className=" py-2 px-4 text-3xl">{link.label}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Contact;
