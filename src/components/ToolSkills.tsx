import React from "react";
import reactlogo from "@/assets/reactlogo.svg";
import nextLogo from "@/assets/nextlogo.svg";
import angularlogo from "@/assets/angularlogo.svg";
import nodelogo from "@/assets/nodelogo.svg";
import expresslogo from "@/assets/expresslogo.svg";
import mongoLogo from "@/assets/mongologo.svg";
import firebaselogo from "@/assets/firelogo.svg";
import awsLogo from "@/assets/awslogo.svg";
import dockerLogo from "@/assets/dockerLogo.svg";
import restapilogo from "@/assets/restapilogo.svg";
import reduxlogo from "@/assets/reduxlogo.svg";
import tailwindlogo from "@/assets/tailwindlogo.svg";
import scsslogo from "@/assets/scsslogo.svg";
import typescriptlogo from "@/assets/typescript.svg";
import gitlogo from "@/assets/gitlogo.svg";
import redislogo from "@/assets/redislogo.svg";

function ToolSkills() {
  const list = [
    {
      title: "React.js",
      oneLiner: "Front-End Development",
      url: reactlogo.src,
    },
    {
      title: "Next.js",
      oneLiner: "Full-Stack Framework for React",
      url: nextLogo.src,
    },
    {
      title: "Angular",
      oneLiner: "Front-End Framework by Google",
      url: angularlogo.src,
    },

    {
      title: "Node.js",
      oneLiner: "Backend JavaScript Runtime",
      url: nodelogo.src,
    },
    {
      title: "Express.js",
      oneLiner: "Minimalist Web Framework for Node.js",
      url: expresslogo.src,
    },
    // {
    //   title: "Nest.js",
    //   oneLiner: "Scalable Backend Framework",
    //   url: "",
    // },
    {
      title: "MongoDB",
      oneLiner: "NoSQL Database",
      url: mongoLogo.src,
    },
    // {
    //   title: "PostgreSQL",
    //   oneLiner: "Relational Database Management System",
    //   url: "",
    // },
    // {
    //   title: "MySQL",
    //   oneLiner: "Popular Relational Database",
    //   url: "",
    // },
    {
      title: "Firebase",
      oneLiner: "Backend-as-a-Service (BaaS)",
      url: firebaselogo.src,
    },
    {
      title: "AWS",
      oneLiner: "Cloud Computing Platform",
      url: awsLogo.src,
    },
    {
      title: "Docker",
      oneLiner: "Containerization Platform",
      url: dockerLogo.src,
    },
    // {
    //   title: "Kubernetes",
    //   oneLiner: "Container Orchestration",
    //   url: "",
    // },
    // {
    //   title: "GraphQL",
    //   oneLiner: "API Query Language",
    //   url: "",
    // },
    {
      title: "REST APIs",
      oneLiner: "Architectural Style for APIs",
      url: restapilogo.src,
    },
    {
      title: "Redux",
      oneLiner: "State Management for JavaScript Apps",
      url: reduxlogo.src,
    },
    // {
    //   title: "Zustand",
    //   oneLiner: "Lightweight State Management",
    //   url: "",
    // },
    {
      title: "Tailwind CSS",
      oneLiner: "Utility-First CSS Framework",
      url: tailwindlogo.src,
    },
    {
      title: "SASS/SCSS",
      oneLiner: "CSS Preprocessor",
      url: scsslogo.src,
    },
    {
      title: "TypeScript",
      oneLiner: "Typed JavaScript",
      url: typescriptlogo.src,
    },
    // {
    //   title: "Jest",
    //   oneLiner: "JavaScript Testing Framework",
    //   url: "",
    // },
    // {
    //   title: "Cypress",
    //   oneLiner: "End-to-End Testing Framework",
    //   url: "",
    // },
    {
      title: "Git",
      oneLiner: "Version Control System",
      url: gitlogo.src,
    },
    // {
    //   title: "GitHub Actions",
    //   oneLiner: "CI/CD Automation Tool",
    //   url: "",
    // },
    // {
    //   title: "RabbitMQ",
    //   oneLiner: "Message Broker",
    //   url: "",
    // },
    {
      title: "Redis",
      oneLiner: "In-Memory Data Store",
      url: redislogo.src,
    },
    // {
    //   title: "ElasticSearch",
    //   oneLiner: "Search & Analytics Engine",
    //   url: "",
    // },
  ];

  return (
    <div className="mb-24">
      <header className=" mb-10 font-[900] mt-10 lg:mt-0 lg:text-7xl md:text-7xl text-5xl text-center lg:text-left">
        <div className=" uppercase">Tech Stack</div>
        <div className="text-[#353334] uppercase">Expertise</div>
      </header>
      <div className="flex flex-wrap  justify-center lg:justify-start gap-3">
        {list.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="hover:bg-[#F5EFFF] dark:hover:bg-[#1C1A19]  flex  w-[350px] p-4 duration-300 gap-4 rounded-md"
            >
              <div className="h-20 min-w-20  rounded-md ">
                <img src={item.url} className="h-full w-full object-cover " />
              </div>
              <div>
                <header className="font-[600] text-[22px]">{item.title}</header>
                <p className="text-[16px] text-[#998E8F] ">{item.oneLiner}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToolSkills;
