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
      <ul>
        <li>
          <a href="#">Weiyi Zhu</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href={Resume} download="Resume.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
