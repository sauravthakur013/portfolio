import React from "react";
import './style.css'
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";



function Contact() {
  const [contactDetails, setContactDetails] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  async function sendMail() {
    const serviceID = "service_n8cpiyg";
    const templateID = "template_ur8v2xh";
    const publicKey = "dIPZaCiwbEFEaeJQX";

    const tempParams = {
      from_name: contactDetails.name,
      from_email: contactDetails.email,
      message: contactDetails.message,
      to_name: "Saurav",
    };
    console.log(contactDetails);
    try {
      emailjs
        .send(serviceID, templateID, tempParams, publicKey)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Email sent!");
          }
          setContactDetails({ name: "", email: "", message: "" });
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email.");
    }
  }
  return (
    <div className="mb-48">
      <header className=" mb-10 font-[900] mt-10 lg:mt-0 lg:text-7xl md:text-7xl text-5xl text-center lg:text-left">
        <div className=" uppercase">{"let's work"}</div>
        <div className="text-[#353334] uppercase">TOGETHER</div>
      </header>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:gap-7 gap-4">
          <div className="label-input-container">
            <label>Name</label>
           <input value={contactDetails.name}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, name: e.target.value })
              } type="text" placeholder="Your Name" className="input-text-area border-[1px] dark:bg-[#353334] dark:border-none text-black dark:text-white" />
          </div>
          <div className="label-input-container">
            <label>Email</label>
            <input value={contactDetails.email}
              onChange={(e) =>
                setContactDetails({ ...contactDetails, email: e.target.value })
              } type="text" placeholder="Your@email.com" className="input-text-area border-[1px] dark:bg-[#353334] dark:border-none text-black dark:text-white"/>
          </div>
        </div>
        {/* <div className="label-input-container">
            <label>Subject</label>
            <input type="text" placeholder="Your Subject"  className="input-text-area border-[1px] dark:bg-[#353334] dark:border-none text-black dark:text-white"/>
        </div> */}
        <div className="label-input-container">
            <label>Message</label>
            <textarea value={contactDetails.message}
              onChange={(e) =>
                setContactDetails({
                  ...contactDetails,
                  message: e.target.value,
                })
              } placeholder="Your Message" className="input-text-area border-[1px] dark:bg-[#353334] dark:border-none text-black dark:text-white" />
        </div>
        <button type="submit" onClick={(e) => {
              e.preventDefault();
              sendMail();
            }} className="contact-submit uppercase font-extrabold">submit</button>
      </form>
    </div>
  );
}

export default Contact;
