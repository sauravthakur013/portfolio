"use client";
import React, { useState } from "react";
import saasLogo from "@/assets/saas.png";
import teacherLogo from "@/assets/teacher.png";
import tickTack from "@/assets/tick-tak.png";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";


interface Project {
  title: string;
  description: string;
  image: string; // Or StaticImageData if directly imported images
  skills: string[];
  hyperlink: string;
}

const projectsData: Project[] = [
  {
    title: "SaaS Dashboard Landing Page",
    description:
      "Developed a modern SaaS dashboard with a clean, user-friendly landing page. The dashboard includes features like chats, customer testimonials, and a contact section for seamless interaction with the company. Designed for optimal performance and user engagement, the project highlights strong front-end skills and attention to detail.",
    image: saasLogo.src,
    skills: ["React", "Typescript", "Node.js", "Tailwind CSS", "Charts JS"],
    hyperlink:'https://dashboard-saas.vercel.app/'
  },
  {
    title: "Revolutionize Learning",
    description:
      "This platform allows teachers to host live classes with drawing tools, recording sessions for later access by students. It fosters real-time interaction, secure accounts, and easy access to past lessons, offering a flexible learning experience.",
    image: teacherLogo.src,
    skills: [
      "React",
      "JavaScript",
      "Animation",
      "Axios",
      "RestAPIs",
      "Node JS",
    ],
    hyperlink:''
  },
  {
    title: "Tic Tak Toe (Muiltiplayer) ",
    description:
      "Built a real-time multiplayer Tic-Tac-Toe game using Next.js, Node.js, MongoDB, Express, and WebSockets. It features seamless live gameplay, user authentication, and database integration to track matches, showcasing expertise in full-stack development and real-time communication.",
    image: tickTack.src,
    skills: ["Next Js", "Web Sockets", "RestAPIs", "TypeScript", "Node JS"],
    hyperlink:'https://tic-tac-frontend-cuo5.vercel.app/'
  },
];

function Projects() {
  return (
    <div className="mb-24">
      <header className=" font-[900] mt-10 lg:mt-0 lg:text-7xl md:text-7xl text-5xl text-center lg:text-left">
        <div>RECENT</div>
        <div className="text-[#353334] ">PROJECTS</div>
      </header>

      <div className="flex flex-col gap-7 mt-10">
        {projectsData.map((item, index) => {
          return <ProjectCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  item: Project;
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex gap-4 justify-center lg:justify-start p-2">
      <div
        className="h-[230px] w-[350px] lg:h-full  lg:w-[40%] bg-blue-300 rounded-md shadow-lg relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={item.image}
          alt="image"
          className=" h-full w-full object-cover rounded-md"
        />
        {/* Description overlay for small screens */}
        <div
          className={`lg:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white p-2 px-3 rounded-md transition-opacity duration-300  ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <header className="font-[600] text-[18px] ">{item.title}</header>
          <p className="text-sm">{item.description}</p>
          {/*  External Link Icon  */}
          <Link href={item.hyperlink} target="_blank" rel="noopener noreferrer" className="flex items-center mt-2 hover:text-gray-300">
            Learn More <ExternalLinkIcon size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      {/* Description for large screens */}
      <div className=" hidden lg:block w-[60%] -mt-2">
        <header className="font-[600] text-[26px] ">{item.title}</header>
        <p className="text-[#988E8F] font-[16px] cursor-pointer">
          {item.description}
        </p>
        <div className=" hover:text-black dark:hover:text-white duration-300 text-[#988E8F] cursor-pointer ">
          <Link href={item.hyperlink} target="_blank" rel="noopener noreferrer">Learn More <ExternalLinkIcon size={16} className=" inline mb-1" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;