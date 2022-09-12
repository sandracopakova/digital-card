import React from "react";

export default function About(props) {
  return (
    <section className="side">
      <h2 className={`side__heading ${props.darkMode ? "side__heading--dark" : ""}`}>About</h2>
      <p className={props.darkMode ? "side__text--dark" : ""}>I am a junior frontend developer and am always looking for new things to learn. Now I'm interested in React.</p>
    </section>
  );
}
