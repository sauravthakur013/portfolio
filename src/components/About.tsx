import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Layers, LayoutGrid, ArrowRight } from "lucide-react";
import cornershapimage from "@/assets/bgimageshapcorner.svg";
import curvedlines from "@/assets/curvedlines.svg";

interface IconProps {
  className?: string; // Most icons accept className
  style?: React.CSSProperties; // Icons might accept style
  // Add any other common props your icons use
}

interface CardProps {
  icon: React.ComponentType<IconProps>; // Or React.FC<any> if it's a functional component
  title: string;
  background: string;
  textColor: string;
  width: "1/3" | "2/3" | "full"; // Assuming these are the only possible values
  bgimage: string;
  colorbg?: string; // Optional color background
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  background,
  textColor,
  width,
  bgimage,
}: CardProps) => {
  return (
    <div
      className={` relative rounded-2xl p-6 flex flex-col h-72  w-full lg:w-${width} overflow-hidden ${background}`}
    >
      <div className="absolute inset-0 opacity-60 z-0 -top-10">
        <img
          src={bgimage}
          alt="Card Background"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute inset-0 opacity-40 z-0 -bottom-80 -left-10">
        <img
          src={bgimage}
          alt="Card Background"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="relative z-10">
        <Icon className={`w-10 h-10 ${textColor}`} />
        <div className=" mt-10">
          <header className={`text-xl font-bold ${textColor}`}>{title}</header>
        </div>
      </div>

      <div className="flex justify-end absolute bottom-6 right-6">
        <button className={`p-2 border rounded-md ${textColor} border-current`}>
          <ArrowRight className={`w-5 h-5`}/>
        </button>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className=" mb-24">
      <header className=" font-[900] mt-10 lg:mt-0 lg:text-8xl md:text-7xl text-5xl text-center lg:text-left">
        SOFTWARE <span className="text-[#353334] ">ENGINEER</span>
      </header>
      <p className="text-3xl font-[600] dark:text-white my-5 text-[#FE7900] text-center lg:text-left">
        I am{" "}
        <span>
          <Typewriter
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "Front-End Developer",
              "Back-End Developer",
              "React Native Developer",
              "UX Designer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
      <p className="text-[18px] font-[400] text-[#998E8F] text-center lg:text-left">
        Crafting seamless web and mobile experiences, I specialize in full-stack
        development, blending innovation with performance. At Instavans, I build
        high-impact logistics solutions, while my journey at BookySure sharpened
        my React Native and UX expertise. Let’s build the future together!
      </p>
      <div className="flex gap-5 md:gap-14 mt-16 justify-center lg:justify-start">
        <div>
          <label className="lg:text-7xl md:text-6xl text-3xl font-[600]">+2.5</label>
          <p className="text-[#998E8F]">YEARS OF</p>
          <p className="text-[#998E8F]">EXPERIENCE</p>
        </div>
        <div>
          <label className="lg:text-7xl md:text-6xl text-3xl font-[600]">+5</label>
          <p className="text-[#998E8F]">PROJECTS</p>
          <p className="text-[#998E8F]">COMPLETED</p>
        </div>
        <div>
          <label className="lg:text-7xl md:text-6xl text-3xl font-[600]">+250</label>
          <p className="text-[#998E8F]">LEETCODE</p>
          <p className="text-[#998E8F]">SOLVED</p>
        </div>
      </div>

      <div className=" flex gap-10 mt-16 flex-col md:flex-row ">
        <Card
          icon={Layers}
          title="DYNAMIC ANIMATION, MOTION DESIGN, BACKEND, ANGULAR"
          background="bg-orange-500"
          textColor="text-white"
          width="2/3"
          bgimage={curvedlines.src}
          colorbg='#F36C38'
        />
        <Card
          icon={LayoutGrid}
          title="FRAMER, FIGMA, WORDPRESS, REACTJS, TYPESCRIPT, RESTAPIS, WEBSOCKETS"
          background="bg-lime-400"
          textColor="text-black"
          width="1/3"
          bgimage={cornershapimage.src}
          colorbg='#C5FE41'
        />
      </div>
    </div>
  );
}

export default About;