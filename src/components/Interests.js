import React from "react";

export default function Interests(props) {
  return (
    <section className="side">
      <h2 className={`side__heading ${props.darkMode ? "side__heading--dark" : ""}`}>Interests</h2>
      <p className={props.darkMode ? "side__text--dark" : ""}>Sport fanatic. Plant scholar. Ice cream buff. Travel geek.</p>
    </section>
  );
}
