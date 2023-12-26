import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error-img.jpg";
const Error = () => {
  return (
    <div className="text-center flex justify-center items-center h-[100vh] flex-col">
      <div className=" ">
        <img src={error} alt="erro-image" className="w-[600px]" />
      </div>

      <Link
        to="/"
        className="bg-secondary p-3 text-white hover:opacity-90 text-3xl rounded-md"
      >
        Back home
      </Link>
    </div>
  );
};

export default Error;
