import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div>
        <a className="project-card" href={props.projectLink}>
          <img alt="" src={props.image} />
          <h2>{props.name}</h2>
          <p>{props.comment}</p>
        </a>
      </div>
    </>
  );
}

export default ProjectCard;
