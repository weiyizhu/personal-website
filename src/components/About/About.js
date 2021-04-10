import React from "react";
import "./About.css";
import AboutMe from '../../static_files/AboutMe.jpg'

const About = () => {
  return (
    <section id="about">
      <img src={AboutMe} alt="About Me jpg"></img>
      <p>
        <h1>About Me</h1>
        <hr></hr>
        I'm eager to secure a full-time developer position at 2021 that will
        allow me to utilize my problem solving skills and attention to detail to
        further develop my abilities in the field of computer science.
      </p>
    </section>
  );
};

export default About;
