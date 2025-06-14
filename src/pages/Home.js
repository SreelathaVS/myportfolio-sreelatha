import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import * as THREE from "three";
import myPic from "../assets/MyPhoto.jpg";
import about from "../assets/about.png";
import certification from "../assets/cerification.png";
import contactme from "../assets/contact.png";
import projects from "../assets/projects.png";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const threeContainerRef = useRef(null);
  const originalText = "I am a Web Developer";

  useEffect(() => {
    // Typing effect logic
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < originalText.length) {
        setDisplayedText(originalText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Three.js logic
    const main = threeContainerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    main.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: "#4caf50" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(2, 2, 2);
    scene.add(light);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      main.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="home">
      <div
        ref={threeContainerRef}
        style={{
          //   paddingTop: "3%",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          //   color: "#FFC107",
        }}
      ></div>
      <div className="home-sec-1">
        <div className="home-intro">
          <p className="welcome">WELCOME!</p>
          <p className="typing-text">{displayedText}</p>
          <p className="skillset">
            HTML | CSS | Python | JavaScript | React | Framer Motion | JQuery |
            Bootstrap | Tailwind CSS | DOM Js | Canva
          </p>
          <div className="animate-pulse-div">
            <span className="inline-block animate-pulse rounded-full p-2 bg-teal-400 text-white text-sm">
              <p>Scroll Down</p>
              <svg
                className="w-6 h-6 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="mypic-div">
          <img className="mypic" alt="" src={String(myPic)} />
        </div>
      </div>

      <div className="home-sec-2">
        <h2>Introducing me</h2>
        <p>
          Hi I am Sreelatha! I am a passionate WebOps specialist with a knack
          for building scalable, reliable, and efficient web infrastructures. I
          have Hands-on experience with web technologies like React, JavaScript,
          and Python.
        </p>
        <p>
          Throughout My learning path, I'll explore the latest technologies and
          frameworks that empower me to bring my ideas to life. From responsive
          design principles to accessibility standards, I'll be equipped with
          the tools to create web applications that not only look great but also
          perform flawlessly across a variety of devices and browsers.
        </p>
      </div>
      <h2 className="pages-h2">
        Check out these sections to know more about me
      </h2>
      <div className="home-sec-3">
        <div>
          <Link className="pages" to="/projects">
            <img alt="Projects" className="h-img" src={String(projects)} />
            <p>Projects</p>
          </Link>
        </div>
        <div>
          <Link className="pages" to="/certifications">
            <img
              alt="Certifications"
              className="h-img"
              src={String(certification)}
            />
            <p>Certifications</p>
          </Link>
        </div>
        <div>
          <Link className="pages" to="/about">
            <img alt="About me" className="h-img" src={String(about)} />
            <p>About me</p>
          </Link>
        </div>
        <div>
          <Link className="pages" to="/contactme">
            <img alt="Contact me" className="h-img" src={String(contactme)} />
            <p>Contact me</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
