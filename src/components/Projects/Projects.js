import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";

const Project = (props) => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <hr></hr>
      <ul class="projects_container">
        <li>
          <ProjectItem
            imgSrc={"imgSrc"}
            title={"9 PM"}
            desc={"An online teaming platform"}
            github={"https://github.com/YueqianMa/Unicode_Hackathon"}
            link={"https://pm-teamup.web.app"}
            skills={"HTML, CSS, JavaScript, Java"}
          />
        </li>
        <li>
          <ProjectItem
            imgSrc={"imgSrc2"}
            title={"Leetcode Plus Equal"}
            desc={"A web app about taking notes in leetcode"}
            github={"github link about leetcode project"}
            link={"leetcode link"}
            skills={"React"}
          />
        </li>
      </ul>
    </section>
  );
};

export default Project;
