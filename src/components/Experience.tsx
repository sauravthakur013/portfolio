'use client'
import React, { useState, useEffect } from "react";
import bookysureLogo from "@/assets/bookysure_logo.png";
import byjus from "@/assets/b.png";
import instavans from "@/assets/instavans.png";

const projectsData = [
  {
    title: "Instavans",
    description:
      "At Instavans, I have played a pivotal role in the development and enhancement of our logistics and transportation solutions. My responsibilities spanned across various facets of software engineering, focusing on both front-end and back-end development to deliver seamless, high-performance web applications.",
    image: instavans.src,
    date: "May 2024 - ",
    type: "Present",
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "Material UI",
      "Typescript",
      "Node.js",
      "MongoDB",
      "GitLab",
      "Angular",
      "Tailwind",
      "Express",
    ],
  },
  {
    title: "Byju's",
    description:
      "Specialized in building high-performance web applications with React, JavaScript, CSS, and REST APIs. Passionate about crafting seamless animations using vanilla CSS and modern libraries. A strong collaborator and team leader, driving innovation and delivering exceptional user experiences.",
    image: byjus.src,
    date: "Dec 2022 - Apr 2024",
    type: "",
    skills: [
      "React",
      "JavaScript",
      "Animation",
      "Axios",
      "RestAPIs",
      "Web-Sockets",
    ],
  },
  {
    title: "BookySure",
    description:
      "Front-End Developer specializing in React Native, HTML, CSS, and JavaScript. Skilled in building responsive mobile apps with smooth animations, intuitive design, and optimized performance. Proficient in testing, Git, and developing mobile-first PWAs.",
    image: bookysureLogo.src,
    date: "Dec 2022 - Dec 2023",
    type: "(Internship)",
    skills: ["React Native", "Data Fetching", "RestAPIs", "TypeScript"],
  },
];

function Projects() {
  return (
    <div className="mb-24">
      <header className=" font-[900] mt-10 lg:mt-0 lg:text-7xl md:text-7xl text-5xl text-center lg:text-left mb-5">
        <div>2.5 YEARS OF</div>
        <div className="text-[#353334] ">EXPERIENCE</div>
      </header>

      <div className="flex flex-col items-center gap-5 ">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }:any) {
  const [isHovered, setIsHovered] = useState(false);
  const [skillVisibilities, setSkillVisibilities] = useState(
    Array(project.skills.length).fill(false)
  );

  useEffect(() => {
    if (isHovered) {
      // Fade in skills
      const timer = setTimeout(() => {
        project.skills.forEach((skill:any, i:any) => {
          setTimeout(() => {
            setSkillVisibilities((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 100); // Staggered appearance
        });
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Fade out skills
      const timer = setTimeout(() => {
        for (let i = project.skills.length - 1; i >= 0; i--) {
          setTimeout(() => {
            setSkillVisibilities((prev) => {
              const next = [...prev];
              next[i] = false;
              return next;
            });
          }, (project.skills.length - 1 - i) * 100); // Staggered disappearance
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isHovered, project.skills]);

  return (
    <section
      className="rounded-2xl relative duration-300 transition-all w-[50%] min-w-[315px] lg:w-[100%] "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <header className="font-[600] text-[26px] z-10">
        {project.title}
      </header>
      <div className="flex gap-3">
        <div className="text-[#1E201E] dark:text-[#E2DFD0] font-[16px] my-3 z-10 lg:w-[60%] relative">  {/* Changed <p> to <div> */}
          {project.description}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={project.image}
              alt="Card Background"
              className="w-44 h-44 object-cover rounded-full opacity-10"
            />
          </div>
        </div>
        <div className="hidden lg:block w-[40%]">
          <div className="flex flex-wrap gap-x-2 gap-y-1.5 pt-4">
            {project.skills.map((skill:any, index:any) => (
              <div
                key={index}
                className={`bg-[#EFF3EA] h-fit text-nowrap px-2 py-1 rounded-md dark:bg-[#1C1A19] dark:text-[#988E8F] transition-opacity duration-300 ${
                  skillVisibilities[index] ? "opacity-100" : "opacity-0"
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[#988E8F] font-[16px] z-10">
        {project.date} <span className="text-red-500">{project.type}</span>
      </p>
    </section>
  );
}

export default Projects;