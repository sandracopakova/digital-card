import React from "react";
import github from "../images/github.png";

export default function Footer(props) {
  return (
    <footer className={`footer ${props.darkMode ? "footer--dark" : ""}`}>
      <div className={`footer__info ${props.darkMode ? "footer__info--dark" : ""}`}>hancacopakova@gmail.com</div>
      <a href="https://github.com/violinie">
        <img src={github} alt="Hana's GitHub" />
      </a>
    </footer>
  );
}
