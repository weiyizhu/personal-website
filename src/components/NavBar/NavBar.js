import React, { useState } from "react";
import "./NavBar.css";
import Resume from "../../static_files/Resume.pdf";

const NavBar = (props) => {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
  //https://www.prwhite.io/blog/sticky-navbar-hides-scroll
  return (
    <nav>
      <a className="logo" href="#">
        Weiyi Zhu
      </a>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
        <li>
          <a href={Resume} download="Resume.pdf" className="download-btn2">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
