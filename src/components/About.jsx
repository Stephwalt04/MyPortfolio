import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 mt-[-200px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-2xl font-bold">
            <p>Hi. I'm Dolapo. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-[#8892b0] text-justify">
              I am Passionate about crafting digital experiences that seamlessly
              blend innovation and functionality, I'm a Full Stack Developer
              with a creative flair and a knack for problem-solving. I thrive in
              architecting robust solutions that push the boundaries of
              technology. Equipped with a diverse skill set spanning HTML, CSS,
              JavaScript, React.js, Node.js, Express.js, MySQL, Wordpress and
              beyond, I relish the opportunity to tackle complex challenges and
              turn visions into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
