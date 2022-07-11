import React from "react";
import "./about.css";
import ProfilePic from "../../assets/Images/ProfilePic.png";
import Skills from "./Skills";
import { allSkills } from "./AllSkills";

const About = () => {
  return (
    <>
      <div className="container about_container">
        <Skills
          className="about_skills_container_top"
          skills={allSkills.slice(0, 8)}
        />

        <div className="about_content_container">
          <div className="about_img_container">
            <img className="about_image" src={ProfilePic} alt="project_image" />
          </div>
          <div className="about_text_container">
            <h2 className="about_text_heading">
              Hey! My name's Junaid Razaq and I'm a web/mobile developer.
            </h2>
            <h2 className="about_text_paragaph">
              I specialise in creating responsive web and mobile applications. I
              have utilised my skills in both commercial and non-commercial
              projects.
            </h2>
          </div>
        </div>

        <Skills
          className="about_skills_container_bottom"
          skills={allSkills.slice(8, 15)}
        />
      </div>

      <div className="divider"></div>
    </>
  );
};

export default About;
