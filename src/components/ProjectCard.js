import React from "react";
import { Link } from "react-router-dom";
function ProjectCard(props) {
  return (
    <>
      <div>
        <Link className="project-card" to={props.projectLink}>
          <img alt="" src={props.image} />
          <h2>{props.name}</h2>
          <p>{props.comment}</p>
        </Link>
      </div>
    </>
  );
}

export default ProjectCard;
