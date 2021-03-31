import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({imgSrc, title, desc, github, link, skills}) => {
  return (
    <div>
      <p>imgSrc: {imgSrc}</p>
      <p>title: {title}</p>
      <p>desc: {desc}</p>
      <p>github: {github}</p>
      <p>link: {link}</p>
      <p>skills: {skills}</p>
    </div>
  );
  
};

export default ProjectItem;
