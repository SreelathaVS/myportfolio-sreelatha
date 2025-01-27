import React from "react";

function Tindog() {
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
        tools. Tindog is one of them. I used very basic html, css with
        bootstrap. So it will take so much time and efforts to change Tindog
        project to react and include it here. So I am just attaching it's hosted
        github link here. So that you can view them in new tab without
        disturbing the Portfolio.
      </p>
      <a
        href="https://sreelathavs.github.io/My-Portfolio/Prev-projects/TinDog%20Project/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1.3rem",
          color: "#2196F3",
          textDecoration: "underline",
        }}
      >
        View TinDog Project in new tab
      </a>
    </div>
  );
}

export default Tindog;
