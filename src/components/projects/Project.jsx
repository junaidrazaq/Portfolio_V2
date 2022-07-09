import React from "react";
import "./projects.css";

const Project = ({ heading, subHead, body, src, divider }) => {
  return (
    <>
      <div className="projects_container_grid_item">
        <h3 className="dark_text project_sub_heading_text">{heading}</h3>

        <div className="projects_container_grid_item_image">
          <img className="project_image" src={src} alt="project_image" />
        </div>

        <div className="projects_container_grid_item_text">
          <h3 className="dark_text project_body_text">{subHead}</h3>
          <h3 className="dark_text project_body_text">{body}</h3>
        </div>

        <div className="projects-buttons">
          <button>Demo</button>
          <button>GitHub</button>
        </div>
      </div>
      {divider && <div className="projects_divider" />}
    </>
  );
};

export default Project;
