import React from "react";
import "./ProjectItem.css";
import { Explore, GitHub } from "@material-ui/icons";

const ProjectItem = ({
  imgSrc,
  title,
  brief_desc,
  desc,
  github,
  link,
  skills,
}) => {
  return (
    <div className="projectItem-container">
      <div className="projectItem-img-desc">
        <img src={imgSrc} alt={title} />
        <div className="projectItem-desc">
          {desc.map((bullet, i) => {
            return <p key={bullet}>• {bullet}</p>;
          })}
        </div>
        <div className="links">
          <a className="link_btn" href={github} target="_blank">
            <GitHub fontSize="small" />
          </a>
          <a className="link_btn" href={link} target="_blank">
            <Explore />
          </a>
        </div>
      </div>
      {/* <picture>
        <source media="(min-width: 650px)" srcSet={imgSrc} />
        <img src={imgSrc} alt={title} />
      </picture> */}
      <div className="projectItem-brief">
        <p className="projectItem-brief-title">
          <a href={link} style={{ textDecoration: "none", color: "black" }}>
            {title}
          </a>
        </p>
        <p className="projectItem-brief-desc">{brief_desc}</p>
        <p className="projectItem-brief-desc">
          <span style={{ textDecoration: "underline" }}>Utitlized:</span>{" "}
          {skills}
          {"."}
        </p>
        {/* <span>
          <a href={github}>Github</a>
        </span> */}
      </div>
    </div>
  );
};

export default ProjectItem;
