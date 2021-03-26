import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";

const Project = (props) => {
  return (
    <>
      <h1>Projects</h1>
      <hr></hr>
      <ul>
        <li>
          <ProjectItem />
        </li>
        <li>
          <ProjectItem />
        </li>
      </ul>
    </>
  );
};

export default Project;
