import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <div id="footer">
      <div className="footer_container">
        <h3>Weiyi Zhu</h3>
        <div className="footer_info">
          <p>Sammamish, WA</p>
          <p>
            Email:{" "}
            <a href="mailto:wzhu1@swarthmore.edu">wzhu1@swarthmore.edu</a>
          </p>
          <p>
            Phone: <a href="tel:+19495262914">(949) 526-2914</a>
          </p>
        </div>
        <ul className="footer_socials">
          <li>Email</li>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
