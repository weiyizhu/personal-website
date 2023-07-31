import React from "react";
import "./About.css";
import AboutMe from "../../static_files/AboutMe.jpg";

const About = () => {
  return (
    <section id="about">
      <img src={AboutMe} alt="About Me jpg"></img>
      <div className="about-text-container">
        <h1>About Me</h1>
        <hr></hr>
        <div className="about-desc">
          <p className="about-desc-bold">
            I enjoy creating programs that solve complex problems with clear,
            well-structured code. In my spare time you can find me messing with
            different tech stacks, playing Go, or watching the NBA
          </p>
          <ul className="about-desc-bulletpt">
            <li>
              <span>Programming Languages:</span> Python, JavaScript, Java,
              OCaml, C++, C#.
            </li>
            <li>
              <span>Frameworks:</span> React (Native), Node, Express,
              TypeScript, SQL, MongoDB, Firebase, .NET, GraphQL, Redux
            </li>
            <li>
              <span>AWS:</span> OpenSearch (ElasticSearch), Lambda, Step
              Functions, DynamoDB, S3, API Gateway
            </li>
            <li>
              <span>Tools:</span> Git, Unix/Linux, Figma, Vim
            </li>
            <li>
              <span>Languages:</span> English (fluent), Mandarin (fluent)
            </li>
            <li>
              <span>Hobbies:</span> NBA, Music, Tennis, Go (Chess)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
