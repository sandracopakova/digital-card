import React from "react";
import InfoFoto from "../images/foto.jpg";

export default function Info() {
  return (
    <header className="info">
      <img src={InfoFoto} className="info--foto" title="Do you wanna hire me? 🥺" alt="smiling Háňa in natural habitat" />
      <h1 className="info--heading">Hana Čopáková</h1>
      <h2 className="info--subheading">Frontend Developer</h2>
      <a href="https://bit.ly/317UyEQ" className="info--portfolio">
        portfolio
      </a>
      <div className="info-buttons">
        <a href="mailto: sandracopakova@gmail.com" className="info-buttons__btn info-buttons__btn--email">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none" viewBox="0 0 17 16">
            <path fill="#1E1F26" d="M2.102 4.707L8.5 7.906l6.398-3.199A1.6 1.6 0 0013.3 3.2H3.7a1.6 1.6 0 00-1.598 1.507z"></path>
            <path fill="#1E1F26" d="M14.9 6.494l-6.4 3.2-6.4-3.2V11.2a1.6 1.6 0 001.6 1.6h9.6a1.6 1.6 0 001.6-1.6V6.494z"></path>
          </svg>
          Email
        </a>
        <a href="https://www.linkedin.com/in/hana-copakova/" className="info-buttons__btn info-buttons__btn--linkedin">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path
              fill="#fff"
              d="M13.714 1.333H2.283a.956.956 0 00-.95.962v11.41c0 .53.426.962.95.962h11.431a.96.96 0 00.953-.962V2.295a.959.959 0 00-.953-.962zm-8.35 11.429H3.386V6.399h1.98v6.363h-.004zM4.374 5.53a1.146 1.146 0 11.001-2.293 1.146 1.146 0 01-.001 2.293zm8.396 7.232h-1.976V9.667c0-.738-.015-1.688-1.027-1.688-1.03 0-1.188.804-1.188 1.634v3.149H6.604V6.399H8.5v.869h.027c.265-.5.91-1.027 1.872-1.027 2 0 2.372 1.319 2.372 3.033v3.488z"
            ></path>
          </svg>
          LinkedIn
        </a>
      </div>
    </header>
  );
}
