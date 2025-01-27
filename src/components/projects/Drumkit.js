import React from "react";

function Drumkit() {
  return (
    <div
      className="redirecting-page"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{ marginBottom: "10%", lineHeight: "2rem", fontSize: "1.3rem" }}
      >
        I have built few projects before learning react and other advanced
        tools. Drumkit is one of them. I used very basic html, css with
        bootstrap. So it will take so much time and efforts to change Drumkit
        project to react and include it here. So I am just attaching it's hosted
        github link here. So that you can view them in new tab without
        disturbing the Portfolio.
      </p>
      <a
        href="https://sreelathavs.github.io/My-Portfolio/Prev-projects/Drum%20Kit%20Starting%20Files/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1.3rem",
          color: "#2196F3",
          textDecoration: "underline",
        }}
      >
        View Drumkit Project in new tab
      </a>
    </div>
  );
}

export default Drumkit;
