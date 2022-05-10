import React from "react";
import "./ProjectItemMobile.css";

const ProjectItemMobile = ({
  imgSrc,
  title,
  brief_desc,
  desc,
  github,
  iosLink,
  androidLink,
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
        <div className="mobile-links">
          <a className="github_btn" href={github} target="_blank">
            Github
          </a>
          <a className="link_btn" href={iosLink} target="_blank">
            IOS
          </a>
          <a className="link_btn" href={androidLink} target="_blank">
            Android
          </a>
        </div>
      </div>
      {/* <picture>
        <source media="(min-width: 650px)" srcSet={imgSrc} />
        <img src={imgSrc} alt={title} />
      </picture> */}
      <div className="projectItem-brief">
        <p className="mobile-projectItem-brief-title">
          <div style={{ textDecoration: "none", color: "black" }}>{title}</div>
        </p>
        <p className="projectItem-brief-desc">{brief_desc}</p>
        <p className="projectItem-brief-desc">
          <span style={{ textDecoration: "underline" }}>Utilized:</span>{" "}
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

export default ProjectItemMobile;
