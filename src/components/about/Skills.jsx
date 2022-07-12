import React from "react";
import "./about.css";

const Skills = ({ skills, className }) => {
  return (
    <div className={className}>
      {skills.map((skill) => {
        return <h2 className="about_skills">{skill}</h2>;
      })}
    </div>
  );
};

export default Skills;
