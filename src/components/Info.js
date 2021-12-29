import React from "react";
import InfoFoto from "../images/foto.jpg";

export default function Info() {
  return (
    <header className="info">
      <img src={InfoFoto} className="info--foto" />
      <h1 className="info--heading">Hana Čopáková</h1>
      <h2 className="info--subheading">Frontend Developer</h2>
      <p>web</p>
      <button>Email</button>
      <button>LinkedIn</button>
    </header>
  );
}
