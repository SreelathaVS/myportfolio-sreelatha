import React, { useState } from "react";
import "../calculator/Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("0");

  function appendCharacter(character) {
    if (display === "0") {
      setDisplay(character);
    } else {
      setDisplay(display + character);
    }
  }

  function clearDisplay() {
    setDisplay("0");
  }

  function deleteCharacter() {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  }

  function calculateResult() {
    let expression = display;
    expression = expression
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/%/g, "/100");
    try {
      // eslint-disable-next-line
      const result = eval(expression); // Use `eval` carefully.
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  }

  return (
    <div className="calc-body">
      <div className="calculator">
        <h1 className="calc-h1">
          <span style={{ color: "black" }}>💗 Calculator 💗</span>
        </h1>
        <div className="display" id="display">
          {display}
        </div>
        <div className="calc-buttons">
          <button className="calc-button ac" onClick={clearDisplay}>
            AC
          </button>
          <button
            className="calc-button aqua"
            onClick={() => appendCharacter("%")}
          >
            %
          </button>
          <button
            className="calc-button aqua"
            onClick={() => appendCharacter("÷")}
          >
            <i style={{ color: "black" }}>&#247;</i>
          </button>
          <button className="calc-button del" onClick={deleteCharacter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              fill="black"
              className="bi bi-backspace"
              viewBox="0 0 16 16"
            >
              <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
              <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
            </svg>
          </button>
          <button className="calc-button" onClick={() => appendCharacter("7")}>
            7
          </button>
          <button className="calc-button" onClick={() => appendCharacter("8")}>
            8
          </button>
          <button className="calc-button" onClick={() => appendCharacter("9")}>
            9
          </button>
          <button
            className="calc-button aqua"
            onClick={() => appendCharacter("-")}
          >
            -
          </button>
          <button className="calc-button" onClick={() => appendCharacter("4")}>
            4
          </button>
          <button className="calc-button" onClick={() => appendCharacter("5")}>
            5
          </button>
          <button className="calc-button" onClick={() => appendCharacter("6")}>
            6
          </button>
          <button
            className="calc-button aqua"
            onClick={() => appendCharacter("+")}
          >
            +
          </button>
          <button className="calc-button" onClick={() => appendCharacter("1")}>
            1
          </button>
          <button className="calc-button" onClick={() => appendCharacter("2")}>
            2
          </button>
          <button className="calc-button" onClick={() => appendCharacter("3")}>
            3
          </button>
          <button
            className="calc-button aqua"
            onClick={() => appendCharacter("×")}
          >
            &#215;
          </button>
          <button className="calc-button" onClick={() => appendCharacter("00")}>
            00
          </button>
          <button className="calc-button" onClick={() => appendCharacter("0")}>
            0
          </button>
          <button className="calc-button" onClick={() => appendCharacter(".")}>
            .
          </button>
          <button className="calc-button green" onClick={calculateResult}>
            <span style={{ fontSize: "30px", color: "black" }}>=</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
