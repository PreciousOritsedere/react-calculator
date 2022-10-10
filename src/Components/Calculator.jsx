import React from "react";
import { useState } from "react";

const operators = ["+", "x", "÷", "."];
const minus = ["-"];
function Calculator() {
  //Usestate
  const [output, setOutput] = useState("");

  const displayNum = (value) => {
    if (
      (operators.includes(value) && output === "") ||
      (operators.includes(value) && operators.includes(output.slice(-1)))
    ) {
      return;
    }

    if (
      (value === "-" && output === "-") ||
      (minus.includes(value) && minus.includes(output.slice(-1)))
    ) {
      return;
    }

    if (value === "0" && output === "0") {
      return;
    }

    setOutput(output + value);
  };

  const clear = () => {
    setOutput("");
  };

  const deleteNum = () => {
    setOutput(output.slice(0, -1));
  };

  const percentage = () => {
    setOutput (output/100)
  };
  
  const equal = () => {
    setOutput(eval(output).toString());
  };
  return (
    <>
      <div className="output">
        <div className="textarea">{output || "0"}</div>
      </div>
      <div className="btnContainer">
        <button className="btn light-grey" onClick={clear}>
          C
        </button>
        <button className="btn light-grey" onClick={deleteNum}>
          Del
        </button>
        <button className="btn light-grey" onClick={percentage}>
          %
        </button>
        <button className="btn orange" onClick={() => displayNum("/")}>
          ÷
        </button>
        <button className="btn" onClick={() => displayNum('7')}>
          7
        </button>
        <button className="btn" onClick={() => displayNum('8')}>
          8
        </button>
        <button className="btn" onClick={() => displayNum('9')}>
          9
        </button>
        <button className="btn orange" onClick={() => displayNum("*")}>
          x
        </button>
        <button className="btn" onClick={() => displayNum('4')}>
          4
        </button>
        <button className="btn" onClick={() => displayNum('5')}>
          5
        </button>
        <button className="btn" onClick={() => displayNum('6')}>
          6
        </button>
        <button className="btn orange" onClick={() => displayNum("-")}>
          -
        </button>
        <button className="btn" onClick={() => displayNum('1')}>
          1
        </button>
        <button className="btn" onClick={() => displayNum('2')}>
          2
        </button>
        <button className="btn" onClick={() => displayNum('3')}>
          3
        </button>
        <button className="btn orange" onClick={() => displayNum("+")}>
          +
        </button>
        <button className="btn zero" onClick={() => displayNum('0')}>
          0
        </button>
        <button className="btn" onClick={() => displayNum(".")}>
          .
        </button>
        <button className="btn orange" onClick={equal}>
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
