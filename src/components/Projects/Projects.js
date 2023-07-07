import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.css";
import NinePM from "../../static_files/9PM.png";
import PersonalWebsite from "../../static_files/PersonalWebsite.PNG";
import NewsCompare from "../../static_files/News_Compare.png";
import Hablink from "../../static_files/Hablink.png";
import BirdCompiler from "../../static_files/BirdCompiler.png";
import ProjectItemMobile from "../ProjectItemMobile/ProjectItemMobile";

const Project = (props) => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <hr></hr>
      <ul className="projects_container">
        <div className="projects_row">
          <li>
            <ProjectItem
              imgSrc={BirdCompiler}
              title={"Bird Compiler"}
              brief_desc={
                "A compiler in OCaml that parses, transforms, and compiles the “bird” language into x86-64 assembly."
              }
              desc={[
                "Implemented language features including loops, conditionals, tuples, first-class functions and partial application.",
                "Optimized performance and memory use by implementing mark-compact garbage collection and tail-call optimization.",
              ]}
              github={"https://github.com/weiyizhu/bird-compiler"}
              skills={"OCaml, x86-64 assembly, nasm, clang"}
            />
          </li>
          <li>
            <ProjectItemMobile
              imgSrc={Hablink}
              title={"Hablink"}
              brief_desc={
                "A mobile application that allows users to create and share habits with friends."
              }
              desc={[
                "Create, edit, and track habits.",
                "Set daily, weekly, and monthly goal.",
                "Share habits with friends of your choice.",
                "Compete with friends to instill the habits in your routine.",
              ]}
              github={"https://github.com/weiyizhu/habitlink"}
              iosLink={"https://apps.apple.com/us/app/hablink/id1623658227"}
              androidLink={
                "https://play.google.com/store/apps/details?id=com.habitlink"
              }
              skills={"React Native, TypeScript, Tailwind CSS, Firebase"}
            />
          </li>
        </div>
      </ul>
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
              github={"https://github.com/weiyizhu/news-compare"}
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
              brief_desc={"This Website ^_^"}
              desc={["A website about me!"]}
              github={"https://github.com/weiyizhu/personal-website"}
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
              brief_desc={`An online platform helping gamers find teammates.`}
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
