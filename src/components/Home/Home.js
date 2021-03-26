import React from "react";
import "./Home.css";
import headshot from "../../static_files/Zhu.jpg";
import Resume from "../../static_files/Resume.pdf";

const Home = (props) => {
  var image =
    "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <>
      <div className="container">
        <img
          id="background_img"
          src={image}
          alt="background image"
          style={{ width: "100%" }}
        ></img>
        <div className="inner-container">
          <img id="headshot" src={headshot} alt="headshot"></img>
          <div className="text-container">
            <h5>WELCOME</h5>
            <h2 style={{ marginTop: 20 }}>MY NAME IS WEIYI ZHU</h2>
            <p style={{ marginTop: 20 }}>I'm a Software Engineer</p>
            <a href={Resume} download="Resume.pdf" className="download-btn">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
