import React from "react";
import Twitter from "../images/Twitter.png";
import Facebook from "../images/Facebook.png";
import Instagram from "../images/Instagram.png";
import GitHub from "../images/GitHub.png";

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} alt="twitter icon"/>
      <img src={Facebook} alt="twitter icon"/>
      <img src={Instagram} alt="twitter icon"/>
      <img src={GitHub} alt="twitter icon"/>
    </footer>
  );
}
