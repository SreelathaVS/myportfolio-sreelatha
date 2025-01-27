import React from "react";
import TimelineSection from "../components/TimelineSection.js";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { HiCommandLine } from "react-icons/hi2";

import "../styles/OtherPages.css";

const myPic = require("../assets/MyPhoto.jpeg");

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={String(myPic)} alt="Your Name" className="hero-image" />
          <div>
            <h1>Hi, I'm Sreelatha</h1>
            <p>
              A WebOps Specialist passionate about building scalable and
              reliable infrastructure solutions.
            </p>
            {/* <button className="cta-button">Download Resume</button> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <span style={{ color: "#FFC107" }}>Frontend Development: </span>
            HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Framer
            Motion, jQuery, DOM Manipulation (DOM JS).
            <div className="skill-icons">
              <FaHtml5 />
              <IoLogoCss3 />
              <FaJsSquare />
              <FaBootstrap />
              <RiTailwindCssFill />
              <FaReact />
              <SiFramer />
              <SiJquery />
            </div>
          </div>
          <div className="skill-category">
            <span style={{ color: "#FFC107" }}>Tools and Platforms: </span>
            GitHub, GitLab, Codesandbox, VS Code, Command Line.
            <div className="skill-icons">
              <FaGithub />
              <FaGitlab />
              <FiCodesandbox />
              <VscVscodeInsiders />
              <HiCommandLine />
            </div>
          </div>
          <div className="skill-category">
            <span style={{ color: "#FFC107" }}>Soft skills: </span>
            team management, problem-solving, Leadership.
          </div>
        </div>
      </section>

      <TimelineSection />

      {/* Fun Facts Section
      <section className="fun-facts">
        <h2>Fun Facts</h2>
        <div className="facts-grid">
          <div className="fact-card">Built my first website at 14.</div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
