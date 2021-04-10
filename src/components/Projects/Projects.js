import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";
import NinePM from "../../static_files/9PM.png";
import PersonalWebsite from "../../static_files/PersonalWebsite.PNG";

const Project = (props) => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <hr></hr>
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
          <li>
            <ProjectItem
              imgSrc={PersonalWebsite}
              title={"Personal Website"}
              brief_desc={"Personal Project - This Website."}
              desc={["A web app about taking notes in leetcode"]}
              github={"github link about leetcode project"}
              link={"leetcode link"}
              skills={"React"}
            />
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Project;
