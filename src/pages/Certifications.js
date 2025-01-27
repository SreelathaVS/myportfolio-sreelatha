import React from "react";
import "../styles/OtherPages.css";
const thCoc = require("../assets/techHighsCOC.png");
const thCoe = require("../assets/techHighsCOE.png");

function Certifications() {
  return (
    <>
      <div className="cerifications">
        <h2>Certifications</h2>
        <img alt="" src={String(thCoe)} />
        <img alt="" src={String(thCoc)} />
      </div>
    </>
  );
}

export default Certifications;
