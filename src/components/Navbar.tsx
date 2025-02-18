"use client";
import React, { useState } from "react";
import {
  Home,
  Folder,
  Briefcase,
  Contact,
  MoonIcon,
  SunIcon,
  FileArchiveIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Import framer-motion
import Link from "next/link";

interface NavbarProps {
  setSelectedNavitem: (item: string) => void;
}

function Navbar({ setSelectedNavitem }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [hoverItem, setHoverItem] = useState<string | null>(null);

  const tooltipVariants = {
    initial: {
      opacity: 0,
      y: -10,
      onComplete: () => console.log("Initial animation complete"),
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
      onComplete: () => console.log("Animate animation complete"),
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
      onComplete: () => console.log("Exit animation complete"),
    },
  };

  return (
    <div className=" w-[300px] dark:bg-[#1C1A19] bg-[#C9CACB] flex justify-around py-4 rounded-2xl text-white dark:text-white ">
      <div
        className="relative cursor-pointer text-[black] dark:text-white"
        onMouseEnter={() => setHoverItem("Home")}
        onMouseLeave={() => setHoverItem(null)}
        onClick={() => {
          setSelectedNavitem("about");
        }}
      >
        <Home size={20} />
        {hoverItem === "Home" && (
          <motion.div
            key={hoverItem}
            className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[14px] transform -translate-x-1/2 -bottom-11"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Home
          </motion.div>
        )}
      </div>
      <div
        className="cursor-pointer text-[black] dark:text-white relative "
        onMouseEnter={() => setHoverItem("Projects")}
        onMouseLeave={() => setHoverItem(null)}
        onClick={() => {
          setSelectedNavitem("projects");
        }}
      >
        <Folder size={20} />
        {hoverItem === "Projects" && (
          <motion.div
            key={hoverItem}
            className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[19px] transform -translate-x-1/2 -bottom-11"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Projects
          </motion.div>
        )}
      </div>
      <div
        className="cursor-pointer text-[black] dark:text-white relative"
        onMouseEnter={() => setHoverItem("Experience")}
        onMouseLeave={() => setHoverItem(null)}
        onClick={() => {
          setSelectedNavitem("experience");
        }}
      >
        <Briefcase size={20} />
        {hoverItem === "Experience" && (
          <motion.div
            key={hoverItem}
            className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[27px] transform -translate-x-1/2 -bottom-11"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Experience
          </motion.div>
        )}
      </div>
      <div
        className="cursor-pointer text-[black] dark:text-white relative"
        onMouseEnter={() => setHoverItem("Contact")}
        onMouseLeave={() => setHoverItem(null)}
        onClick={() => {
          setSelectedNavitem("contact");
        }}
      >
        <Contact size={20} />
        {hoverItem === "Contact" && (
          <motion.div
            key={hoverItem}
            className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[19px] transform -bottom-11"
            variants={tooltipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Contact
          </motion.div>
        )}
      </div>

      <Link
        href={`https://drive.google.com/file/d/1HFc3JhucXnybvIgv-4fvgGZeAfG0DKcT/view?usp=sharing`}
        target="_blank"
      >
        <div
          className="cursor-pointer text-[black] dark:text-white relative"
          onMouseEnter={() => setHoverItem("Resume")}
          onMouseLeave={() => setHoverItem(null)}
        >
          <FileArchiveIcon size={20} />
          {hoverItem === "Resume" && (
            <motion.div
              key={hoverItem}
              className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[19px] transform -bottom-11"
              variants={tooltipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Resume
            </motion.div>
          )}
        </div>
      </Link>

      {theme === "dark" ? (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-[black] dark:text-white relative"
          onMouseEnter={() => setHoverItem("Dark Mode")}
          onMouseLeave={() => setHoverItem(null)}
        >
          <MoonIcon size={20} />
          {hoverItem === "Dark Mode" && (
            <motion.div
              key={hoverItem}
              className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
          -left-[25px] transform -bottom-11 text-nowrap"
              variants={tooltipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Dark Mode
            </motion.div>
          )}
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer text-[black] dark:text-white relative"
          onMouseEnter={() => setHoverItem("Light Mode")}
          onMouseLeave={() => setHoverItem(null)}
        >
          <SunIcon size={20} />
          {hoverItem === "Light Mode" && (
            <motion.div
              key={hoverItem}
              className="absolute bg-[#353334] text-white text-[12px] px-2 py-[2px] rounded-xl 
           transform  -bottom-11 -left-[26px] text-nowrap"
              variants={tooltipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Light Mode
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;