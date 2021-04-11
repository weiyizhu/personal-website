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
            I'm an aspiring software engineer, Swarthmore College '23. I enjoy
            creating programs that solve complex problems with clear,
            well-structured code. In my spare time you can find me messing with
            different tech stacks, playing Go, or watching the NBA.
          </p>
          <ul className="about-desc-bulletpt">
            <li>
              <span>Programming Languages:</span> Python, C#, JavaScript, C++,
              Java.
            </li>
            <li>
              <span>Frameworks/Tools:</span> React JS, Express JS, HTML, CSS,
              jQuery, SQL, NoSQL, .NET, Git, AWS, agile.
            </li>
            <li>
              <span>Languages:</span> English, Mandarin.
            </li>
            <li>
              <span>Hobbies:</span> NBA, Music, Tennis, Go (Chess).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
