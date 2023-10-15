import React from "react";
import "./Footer.css";
import {Email, GitHub, LinkedIn} from '@material-ui/icons'

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="footer_container">
        <h3>Weiyi Zhu</h3>
        <div className="footer_info">
          <p>Redmond, WA</p>
          <p>
            Email:{" "}
            <a href="mailto:zhuwy99@gmail.com">zhuwy99@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+19495262914">949-526-2914</a>
          </p>
        </div>
        <ul className="footer_socials">
          <li>
            <a href="mailto:zhuwy99@gmail.com">
              <Email />
            </a>
          </li>
          <li>
            <a href="https://github.com/weiyizhu" target="_blank">
              <GitHub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zhuweiyi/" target="_blank">
              <LinkedIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
