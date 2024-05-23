import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#64ffda]">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl font-bold text-[#ccd6f6]">
          Dolapo Evangel Kolawole
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mt-3">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am glad to have you here. I am passionate about crafting seamless
          digital experiences.
        </p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-black  hover:font-bold">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
