import React from "react";
import MyEats from "../assets/projects/myeats.png";
import DW from "../assets/projects/DW.png";
import Netflix from "../assets/projects/netflix.png";
import Zeus from "../assets/projects/zeus.png";
import Nike from "../assets/projects/nike.png";
import Advice from "../assets/projects/advice.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">
            Projects
          </p>
          <p className="py-6"> Check Out Some Of My Works.</p>
        </div>

        {/* Grid  Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {/* DW */}
          <div
            style={{ backgroundImage: `url(${DW})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DataWeb Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://datawebs.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stephwalt04/DataWeb"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* MyEats */}
          <div
            style={{ backgroundImage: `url(${MyEats})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Delivery App
              </span>
              <div className="pt-8 text-center">
                <a href="https://myeats.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Stephwalt04/MyEat" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Netflix */}
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix Clone App
              </span>
              <div className="pt-8 text-center">
                <a href="https://mynetflixcloneapp.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stephwalt04/NetflixAppClone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Zeus */}
          <div
            style={{ backgroundImage: `url(${Zeus})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Web Store App
              </span>
              <div className="pt-8 text-center">
                <a href="https://zeusstore.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stephwalt04/fakestoreapi"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Nike */}
          <div
            style={{ backgroundImage: `url(${Nike})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Nike App
              </span>
              <div className="pt-8 text-center">
                <a href="https://nikecloneapp.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stephwalt04/Nike-Landing-Page"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Advice App */}
          <div
            style={{ backgroundImage: `url(${Advice})` }}
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Advice Generator App
              </span>
              <div className="pt-8 text-center">
                <a href="https://myadvicegenerator.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stephwalt04/AdviceGenerator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* End of Projects */}
        </div>
        {/* Container ends here */}
      </div>
    </div>
  );
};

export default Projects;
