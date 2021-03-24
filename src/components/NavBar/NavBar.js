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
      <div>Logo</div>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a href={Resume} download="Resume.pdf" style={{ color: "white" }}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
