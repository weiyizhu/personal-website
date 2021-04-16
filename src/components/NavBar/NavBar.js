import React, { useState } from "react";
import "./NavBar.css";
import Resume from "../../static_files/Resume.pdf";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <a className="logo" href="#">
        Weiyi Zhu
      </a>
      <div className="hamburger" onClick={handleClick}>
        {clicked ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={clicked ? "nav-list-mobile" : "nav-list"}>
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
          <a href={Resume} download="Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
