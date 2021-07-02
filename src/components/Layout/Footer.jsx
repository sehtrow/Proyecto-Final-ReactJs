import React from "react";
import "../../assets/styles/components/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="madeby">
      Final Proyect ReactJS {" "}
      by
      <a
        href="https://cl.linkedin.com/in/basti%C3%A1n-bast%C3%ADas-977640135/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
      >
        <span className="logo-img"></span> <span> &#123; Bastián Bastías &#125;</span>
      </a>
    </div>
  </footer>
);

export default Footer;