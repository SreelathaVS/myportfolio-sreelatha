import React from "react";
import { ProjectDetails } from "../components/ProjectDetails.js";
import ProjectCard from "../components/ProjectCard.js";
import "../styles/OtherPages.css";

function Projects() {
  return (
    <>
      <div className="projects-section">
        {ProjectDetails.map((project, index) => (
          <ProjectCard
            projectLink={project.projectLink}
            image={project.Imglink}
            name={project.Name}
            comment={project.comment}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
