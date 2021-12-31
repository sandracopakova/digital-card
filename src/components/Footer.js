import React from "react";
import github from "../images/github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">sandracopakova@gmail.com</div>
      <a href="https://github.com/sandracopakova">
        <img src={github} alt="github icon" />
      </a>
    </footer>
  );
}
