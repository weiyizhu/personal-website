import React, { useState } from "react";
import "./NavBar.css";
import Resume from "../../static_files/Resume.pdf";

const NavBar = (props) => {
  // const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
  return (
    <nav>
      <a className="logo" href="#">Logo</a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
