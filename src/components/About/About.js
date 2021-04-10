import React from "react";
import "./About.css";
import AboutMe from '../../static_files/AboutMe.jpg'

const About = () => {
  return (
    <section id="about">
      <img src={AboutMe} alt="About Me jpg"></img>
      <div className="about-text-container">
        <h1>About Me</h1>
        <hr></hr>
        <div className="about-desc">
          <p className="about-desc-bold">
            I'm eager to secure a full-time developer position in 2021 that will
            allow me to utilize my problem solving skills and attention to
            detail to further develop my abilities in the field of computer
            science.
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
              <span>Hobbies:</span> NBA, Music, Tennis, Go (Chess).
            </li>
            <li>
              <span>Languages:</span> English, Mandarin.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
