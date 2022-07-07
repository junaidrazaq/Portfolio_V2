import React from "react";
import "./projects.css";
import NearU from "../../assets/Images/NearU.png";

const Project = ({ heading, subHead, body }) => {
  return (
    <div className="projects_container_grid_item">
      <h3 className="project_heading_text">{heading}</h3>

      <div className="projects_container_grid_item_image">
        <img className="project_image" src={NearU} alt="project_image" />
      </div>

      <div className="projects_container_grid_item_text">
        <h3 className="project_body_text">{subHead}</h3>
        <h3 className="project_body_text">{body}</h3>
      </div>

      <div className="projects-buttons">
        <button>Demo</button>
        <button>GitHub</button>
      </div>
    </div>
  );
};

export default Project;
