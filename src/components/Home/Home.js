import React from "react";
import "./Home.css";
import headshot from "../../static_files/Zhu.jpg";
import background from "../../static_files/Background.jpeg";
import Resume from "../../static_files/Resume.pdf";

const Home = (props) => {
  return (
    <>
      <div className="container">
        <img
          id="background_img"
          src={background}
          alt="background image"
        ></img>
        <div className="inner-container">
          <img id="headshot" src={headshot} alt="headshot"></img>
          <div className="text-container">
            <h5>WELCOME</h5>
            <h2>MY NAME IS WEIYI ZHU</h2>
            <p>I'm a Software Engineer</p>
            <a href={Resume} download="WeiyiZhu(2023).pdf" className="download-btn">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
