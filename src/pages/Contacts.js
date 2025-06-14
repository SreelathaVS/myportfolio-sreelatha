import React from "react";
// const WALogo = require("../assets/what'sapp-logo.png");
// const mailLogo = require("../assets/gmail-logo-icon.png");
// const linLogo = require("../assets/linkedIn-logo.png");
// const smiley = require("../assets/Smiley.png");
import WALogo from "../assets/what'sapp-logo.png";
import mailLogo from "../assets/gmail-logo-icon.png";
import linLogo from "../assets/linkedIn-logo.png";
import smiley from "../assets/Smiley.png";

function Contacts() {
  return (
    <>
      <div className="contacts">
        <div className="contacts-sec1">
          <h1 className="contact-heading">Hey Let's Talk...</h1>
          <img className="smiley" src={String(smiley)} alt="" />
        </div>
        <div className="contacts-sec2">
          <p className="contacts-p">
            My best skill is watching Movies limitless. I also like to watch
            Memes. If you like them too..let's share them with each other. You
            are always welcome if you want to appreciate or give any advices on
            my work.
            <p style={{ color: "red" }}>
              Sorry!! I should not give Contact details as it's a project for
              resume.
            </p>
          </p>

          <ul className="contacts-ul">
            <li>
              <a href="..." target="_blank" rel="noopener noreferrer">
                <img
                  className="contact-logo"
                  src={String(linLogo)}
                  alt="Linkedin Logo"
                />
              </a>
            </li>
            <li>
              <a href="..." target="_blank" rel="noopener noreferrer">
                <img
                  className="contact-logo"
                  src={String(mailLogo)}
                  alt="GmailLogo"
                />
              </a>
            </li>
            <li>
              <a href="..." target="_blank" rel="noopener noreferrer">
                <img
                  className="contact-logo"
                  src={String(WALogo)}
                  alt="What'sApp Logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contacts;
