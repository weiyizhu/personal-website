import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";
import NinePM from "../../static_files/9PM.png";
import PersonalWebsite from "../../static_files/PersonalWebsite.PNG";
import NewsCompare from "../../static_files/News_Compare.png";

const Project = (props) => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <hr></hr>
      <ul className="projects_container">
        <div className="projects_row">
          <li>
            <ProjectItem
              imgSrc={NewsCompare}
              title={"News Compare"}
              brief_desc={
                "A website that provides news comparisons between different news sources."
              }
              desc={[
                "Customizable keywords searching, source selections, and filtering options.",
                "Implemented user authentication with access and reset tokens.",
                "Allowed users to save, manage and recover their favorite topics and news.",
              ]}
              github={"https://github.com/weiyizhu/News_Compare"}
              link={"https://news-compare.com"}
              skills={
                "MongoDB, Express, React, Node, TypeScript, Redux, Material UI, JWT authentication, React router dom, Heroku"
              }
            />
          </li>
          <li>
            <ProjectItem
              imgSrc={PersonalWebsite}
              title={"Personal Website"}
              brief_desc={"Personal Project - This Website ^_^"}
              desc={["A website about me!"]}
              github={"https://github.com/weiyizhu/personal_website"}
              link={""}
              skills={"React JS, CSS"}
            />
          </li>
        </div>
      </ul>
      <ul className="projects_container">
        <div className="projects_row">
          <li>
            <ProjectItem
              imgSrc={NinePM}
              title={"9 PM"}
              brief_desc={`Team Project - An Online Platform Helping Gamers Find Teammates.`}
              desc={[
                `An online teaming platform aiming to help gamers find teammates based on available times, games,
and teams.`,
                `Developed responsive web pages to register/login accounts, create/join teams, and edit/manage team
information.`,
              ]}
              github={"https://github.com/YueqianMa/Unicode_Hackathon"}
              link={"https://pm-teamup.web.app"}
              skills={
                "HTML, CSS, Javascript (jQuery), MySQL, Java, Spring Boot"
              }
            />
          </li>
          <li></li>
        </div>
      </ul>
    </section>
  );
};

export default Project;
