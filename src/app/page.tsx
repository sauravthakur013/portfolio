"use client";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Projects from "@/components/Projects";
import { useEffect, useState, useRef } from "react";
import Experience from "@/components/Experience";
import ToolSkills from "@/components/ToolSkills";
import Contact from "@/components/Contact";
import toast, { Toaster } from "react-hot-toast";
import {ArrowBigUpDashIcon, FileArchiveIcon, } from "lucide-react";

// Configuration for scrolling behavior
const SCROLL_DURATION = 1500; // milliseconds - adjust for desired speed
const SCROLL_EASING = "easeOutCubic"; // Choose from easing functions below

// Easing functions (copied for simplicity - consider a utility file)
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedNavitem, setSelectedNavitem] = useState<string>("about");

  // Create refs for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const toolsSkillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Ref for the scrollable container itself
  const scrollableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to scroll to the selected section
  useEffect(() => {
    if (selectedNavitem && scrollableContainerRef.current) {
      let element: HTMLDivElement | null = null;

      switch (selectedNavitem) {
        case "about":
          element = aboutRef.current;
          break;
        case "experience":
          element = experienceRef.current;
          break;
        case "projects":
          element = projectsRef.current;
          break;
        case "toolsSkills":
          element = toolsSkillsRef.current;
          break;
        case "contact":
          element = contactRef.current;
          break;
        default:
          element = aboutRef.current; // Default to about
      }

      if (element) {
        const containerRect = scrollableContainerRef.current.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const targetScrollTop = elementRect.top - containerRect.top + scrollableContainerRef.current.scrollTop;
        const startScrollTop = scrollableContainerRef.current.scrollTop;
        const distance = targetScrollTop - startScrollTop;

        let startTime: null | number = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;

          const progress = Math.min(timeElapsed / SCROLL_DURATION, 1); // Ensure progress doesn't exceed 1

          // Apply easing function
          const easedProgress = easeOutCubic(progress);

          scrollableContainerRef.current!.scrollTop = startScrollTop + distance * easedProgress; //Non-null assertion operator

          if (timeElapsed < SCROLL_DURATION) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }
  }, [selectedNavitem]);

  if (!mounted) return null;
  console.log(selectedNavitem);

  return (
    <div className="relative h-full w-full">
      <div className="fixed left-1/2 -translate-x-1/2 top-5 z-50">
        <Navbar setSelectedNavitem={setSelectedNavitem} />
      </div>
      <div
        id="main-container"
        className="mt-24 mx-6 lg:mx-16 flex gap-14 mb-6 lg:mt-36 lg:gap-20 "
      >
        <div
          id="profile-card-container-big-screen"
          className="hidden lg:block w-1/3"
        >
          <ProfileCard />
        </div>
        <div
          id="scrollable-container"
          className="w-full lg:w-2/3 max-h-[calc(100vh-120px)] overflow-y-auto lg:max-h-[calc(100vh-168px)] "
          ref={scrollableContainerRef} // Add ref to the container
        >
          <div id="profileCard" className="lg:hidden">
            <ProfileCard />
          </div>
          <div id="about" ref={aboutRef}>
            <About />
          </div>
          <div id="experience" ref={experienceRef}>
            <Experience />
          </div>
          <div id="projects" ref={projectsRef}>
            <Projects />
          </div>
          <div id="toolsSkills" ref={toolsSkillsRef}>
            <ToolSkills />
          </div>
          <div id="contact" ref={contactRef}>
            <Contact />
          </div>
          {/* <div id='footer'></div> */}
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}