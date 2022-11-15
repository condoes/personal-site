import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithubAlt
} from "react-icons/fa";

// const SocialLinks = [
//   {
//     path: "mailto:cindy.do10@gmail.com",
//     title: "Email",
//     image: <FaEnvelope className="text-5xl hover:text-header-hover" />
//   },

//   {
//     path: "https://www.instagram.com/c1ndydonut/",
//     title: "Instagram",
//     image: <FaInstagram className="text-5xl hover:text-header-hover" />
//   },

//   {
//     path: "https://www.linkedin.com/in/cindydo-ucr/",
//     title: "LinkedIn",
//     image: <FaLinkedin className="text-5xl hover:text-header-hover" />
//   },

//   {
//     path: "https://github.com/condoes",
//     title: "Github",
//     image: <FaGithubAlt className="text-5xl hover:text-header-hover" />
//   }
// ];

function Landing() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-sand via-babyblue to-lightpink">
      <div className="font-lexend text-white text-center p-4">
        <h1 className="intro">hi, im</h1>
        <h1 className="text-9xl drop-shadow-black">
          <font color="#FFCFF2">cindy </font>
          <font color="#C3D7E9">do</font>
        </h1>
        <h1 className="p-3 drop-shadow-black">aspiring software engineer</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-cream w-1/2 items-center text-center rounded-2xl p-4 mb-5 drop-shadow-sharpblack">
          <p1 className="text-2xl font-lexend text-darkgray">
            i’m currently a 4th year computer science major attending UC
            Riverside. i’m always striving to gain knowledge every day and grow
            as a developer
          </p1>
        </div>
        <div className="flex flex-row justify-evenly bg-cream w-1/4 items-center rounded-xl p-2">
          <a href="https://www.linkedin.com/in/cindydo-ucr/">
            <FaLinkedin className="text-darkgray text-5xl hover:text-darkblue" />
          </a>

          <a href="https://github.com/condoes">
            <FaGithubAlt className="text-darkgray text-5xl hover:text-darkblue" />
          </a>

          <a href="https://www.instagram.com/c1ndydonut/">
            <FaInstagram className="text-darkgray text-5xl hover:text-darkblue" />
          </a>

          <a href="mailto: cindy.do10@gmail.com">
            <FaEnvelope className="text-darkgray text-5xl hover:text-darkblue" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
