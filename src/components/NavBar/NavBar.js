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

  const closeMobileMenu = () => {
    setClicked(false)
  }

  return (
    <nav>
      <a className="logo" href="#">
        Weiyi Zhu
      </a>
      <div className="hamburger" onClick={handleClick}>
        {clicked ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={clicked ? "nav-list active" : "nav-list"}>
        <li>
          <a href="#about" onClick={closeMobileMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMobileMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#footer" onClick={closeMobileMenu}>
            Contact
          </a>
        </li>
        <li>
          <a href={Resume} download="WeiyiZhu(2022).pdf" onClick={closeMobileMenu}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
