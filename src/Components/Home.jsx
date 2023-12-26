import React from "react";
import homeImg from "../assets/homeImg.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      id="home"
      className="section min-h-screen w-full home-bg test flex flex-col lg:flex-row items-center lg:gap-[5rem]  justify-evenly"
    >
      <motion.div
        className="lg:max-w-[60%] lg:text-left pt-[50px]"
        animate={{
          y: 0,
        }}
        initial={{
          y: "100vw",
        }}
        transition={{
          duration: 1,
        }}
      >
        <p className="text-secondary text-3xl md:text-5xl font-mono lg:text-3xl">
          Hi, my name is
        </p>
        <h1 className="lg:text-7xl md:text-6xl text-[22px] font-bold pt-8 md:pt-10 md:pb-4  text-white">
          INAOLAJI TOPE MICHAEL.
        </h1>
        <h2 className="lg:text-7xl md:text-6xl text-[22px] font-bold text-slate-400">
          Frontend Developer
        </h2>
        <p className="text-3xl  md:text-4xl text-slate-400  leading-[1.3] md:leading-[1.5] pt-10 md:pt-20">
          I’m a Frontend Developer currently based in Nigeria, I like to craft
          solid and scalable frontend products with great user experience, eager
          to embark on a journey of professional growth.
        </p>

        <div className="mt-[40px] flex flex-col md:flex-row  gap-7">
          <Link
            target="_blank"
            className="text-3xl text-secondary rounded-md px-[40px] py-5 md:py-5 border-[1px] border-secondary hover:bg-secondary hover:text-white lg:text-4xl text-center"
            to={"/letter"}
          >
            Cover Letter
          </Link>

          <a href="#projects">
            <button className="text-3xl  text-secondary rounded-md px-[40px]  py-5 md:py-5 border-[1px] border-secondary hover:bg-secondary hover:text-white lg:text-4xl w-full text-center">
              Project
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block max-lg:w-[80%] max-lg:mt-[30px] pt-[50px]"
        animate={{
          scale: 1,
        }}
        initial={{
          scale: 0,
        }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: "100",
          delay: 1.5,
        }}
      >
        <img src={homeImg} alt="Photo" />
      </motion.div>
    </div>
  );
};

export default Home;
