import React from "react";
import {
  LucideLinkedin,
  GithubIcon,
  Mail,
  InstagramIcon,
} from "lucide-react";
import image01 from "@/assets/imagePic01.svg";
import image02 from "@/assets/imagepic02.svg";
import profilePic from "@/assets/profilePic.png";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

function ProfileCard() {
  const notify = () => toast.success("Email Copied!");
  const copyEmailToClipboard = () => {
    const email = "sauravthakur00013jan@gmail.com"; // Replace with your actual email
    navigator.clipboard
      .writeText(email)
      .then(() => {
        notify();
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className=" overflow-hidden bg-[#FFE5D9] lg:shadow-2xl dark:bg-white text-black rounded-2xl px-[20px] py-[24px] flex flex-col relative items-center min-w-[300px] ">
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="bg-red-700 h-[300px] w-[250px] rounded-2xl overflow-hidden">
        <img
          src={profilePic.src}
          alt="profile picture"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className=" text-[#222222] text-center  font-[900] text-4xl font-sans mt-5">
        Saurav Bhooriya
      </h3>
      <Link
        href={`https://drive.google.com/file/d/1mpx3m_twmryU4_BT5Z6-setqvhspDi1K/view?usp=sharing`}
        target="_blank"
      >
        <button className="border-[1.5px] w-[200px] my-3 rounded-md uppercase  font-semibold py-1 cursor-pointer border-[#F36C38] text-[#F36C38] hover:text-white hover:bg-[#F36C38] duration-200">
          resume
        </button>
      </Link>
      <p className="text-center w-[300px] text-[20px] font-[500] text-[#5F5F5F] dark:text-[#6A6B6E] leading-[1.2] text-wrap">
        A Software Engineer who has developed countless innovative solutions.
      </p>
      <div className="flex mt-4 gap-5">
        <Link
          href="https://www.linkedin.com/in/saurav-b-146698217/"
          target="_blank"
        >
          <div className="text-[#F36C38] hover:bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md cursor-pointer duration-150">
            <LucideLinkedin size={24} />
          </div>
        </Link>

        <Link href="https://github.com/sauravthakur013" target="_blank">
          <div className="text-[#F36C38] hover:bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md cursor-pointer duration-150">
            <GithubIcon size={24} />
          </div>
        </Link>

        {/* <div className="text-[#F36C38] hover:bg-gray-100 h-8 w-8 flex justify-center items-center rounded-md "><TwitterIcon size={24} /></div> */}

        <div
          onClick={() => {
            copyEmailToClipboard();
          }}
          className="text-[#F36C38] hover:bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md cursor-pointer duration-150"
        >
          <Mail size={24} />
        </div>

        <Link href="#">
          <div className="text-[#F36C38] hover:bg-gray-100 h-10 w-10 flex justify-center items-center rounded-md  cursor-pointer duration-150">
            <InstagramIcon size={24} />
          </div>
        </Link>

        {/* <div className="text-[#F36C38] hover:bg-gray-100 h-8 w-8 flex justify-center items-center rounded-md "><FacebookIcon size={24} /></div> */}
      </div>

      <div id="image01" className="h-[100px] w-[200px] absolute -top-2 -left-2">
        <img src={image01.src} alt="image01" className="h-[100%] w-[100%]" />
      </div>

      <div
        id="image02"
        className="h-[100px] w-[200px]  absolute top-[300px] -left-20"
      >
        <img
          src={image02.src}
          alt="image01"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
