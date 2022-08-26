import React from "react";
import github from "../images/github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">hancacopakova@gmail.com</div>
      <a href="https://github.com/violinie">
        <img src={github} alt="Hana's GitHub" />
      </a>
    </footer>
  );
}
