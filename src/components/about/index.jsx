import React from "react";
import "./about.css";
import ProfilePic from "../../assets/Images/ProfilePic.png";
import Skills from "./Skills";
import { allSkills } from "./AllSkills";
import { MdOutlineComputer } from "react-icons/md";
import useWindowDimensions from "../_Hooks";

const About = () => {
  const { width } = useWindowDimensions();

  const mobile = width < 500;
  return (
    <>
      <div className="container about_container">
        <h3 className="dark_text section_heading_text">
          Here's some information about myself
        </h3>

        {!mobile ? (
          <Skills
            className="about_skills_container_top"
            skills={allSkills.slice(0, 8)}
          />
        ) : (
          <>
            <Skills
              className="about_skills_container_top"
              skills={allSkills.slice(0, 4)}
            />
            <Skills
              className="about_skills_container_top"
              skills={allSkills.slice(4, 8)}
            />
          </>
        )}

        {/* ====== About Container ====== */}
        <div className="about_content_container">
          <div className="about_img_container">
            <img className="about_image" src={ProfilePic} alt="project_image" />
          </div>
          <div className="about_text_container">
            <h2 className="about_text_heading">About me...</h2>
            <h2 className="about_text_paragaph">
              I specialise in creating responsive web and mobile applications. I
              have utilised my skills in both commercial and non-commercial
              projects.
            </h2>
          </div>
        </div>

        {/* ======= Experiences ======= */}
        <div className="experience_container">
          <div className="experience_item web_dev_container">
            <div className="experience_icon_container">
              <MdOutlineComputer size={50} color="#333" />
            </div>
            <div className="experience_text_container">
              <h2 className="experience_item_heading">Web Development</h2>
              <h2 className="experience_text">E-Commerce, Portfolio</h2>
            </div>
          </div>
          <div className="experience_item app_dev_container">
            <div className="experience_icon_container">
              <MdOutlineComputer size={50} color="#333" />
            </div>
            <div className="experience_text_container">
              <h2 className="experience_item_heading">UI/UX Design</h2>
              <h2 className="experience_text">Mobile app, Web design</h2>
            </div>
          </div>
          <div className="experience_item app_dev_container">
            <div className="experience_icon_container">
              <MdOutlineComputer size={50} color="#333" />
            </div>
            <div className="experience_text_container">
              <h2 className="experience_item_heading">App Development</h2>
              <h2 className="experience_text">Cross-Platform, Optimizations</h2>
            </div>
          </div>
        </div>

        {mobile ? (
          <>
            <Skills
              className="about_skills_container_bottom"
              skills={allSkills.slice(8, 12)}
            />
            <Skills
              className="about_skills_container_bottom"
              skills={allSkills.slice(12, 15)}
            />
          </>
        ) : (
          <Skills
            className="about_skills_container_bottom"
            skills={allSkills.slice(8, 15)}
          />
        )}
      </div>

      <div className="divider"></div>
    </>
  );
};

export default About;
