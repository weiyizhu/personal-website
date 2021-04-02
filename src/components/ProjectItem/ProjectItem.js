import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({imgSrc, title, desc, github, link, skills}) => {
  return (
    <div className="projectItem-container">
      <div className="projectItem-img-desc">
        <img src={imgSrc} alt={title} />
        <p className="projectItem-desc">desc: {desc}</p>
      </div>
      {/* <picture>
        <source media="(min-width: 650px)" srcSet={imgSrc} />
        <img src={imgSrc} alt={title} />
      </picture> */}
      <div className="projectItem-brief">
        <p><h5 className="projectItem-brief-title">{title}</h5></p>
        <p>github: {github}</p>
        <p>link: {link}</p>
        <p>skills: {skills}</p>
      </div>
    </div>
  );
  
};

export default ProjectItem;
