import React from "react";
import Screen from "./components/Screen/Screen";
import Button from "./components/Button/Button";

function App() {
  const [screenValue, setScreenValue] = React.useState("0");
  const operationOptions = ["+", "-", "/", "X"];

  function sum(n1, n2) {
    return n1 + n2;
  }

  function subtract(n1, n2) {
    return n1 - n2;
  }

  function divide(n1, n2) {
    return n1 / n2;
  }

  function multiply(n1, n2) {
    return n1 * n2;
  }

  function operation(str) {
    if (str.includes("+")) {
      let exp = str.split("+");
      if (exp.length === 2) {
        let op = sum(Number(exp[0]), Number(exp[1]));
        setScreenValue(op.toString());
      }
    } else if (str.includes("-")) {
      let exp = str.split("-");
      if (exp.length === 2) {
        let op = subtract(Number(exp[0]), Number(exp[1]));
        setScreenValue(op.toString());
      }
    } else if (str.includes("/")) {
      let exp = str.split("/");
      if (exp.length === 2) {
        let op = divide(Number(exp[0]), Number(exp[1]));
        setScreenValue(op.toString());
      }
    } else if (str.includes("X")) {
      let exp = str.split("X");
      if (exp.length === 2) {
        let op = multiply(Number(exp[0]), Number(exp[1]));
        setScreenValue(op.toString());
      }
    } else {
      setScreenValue("0");
    }
  }

  function handleClick({ target }) {
    const clickedValue = target.value;
    if (operationOptions.includes(clickedValue)) {
      // É uma operação matemática
      if (screenValue === "0") {
        alert("Operação inválida!");
        return;
      }
      if (
        screenValue.includes("+") ||
        screenValue.includes("-") ||
        screenValue.includes("/") ||
        screenValue.includes("X")
      ) {
        alert("Só é possível efetuar operações com dois números");
        return;
      } else {
        setScreenValue(screenValue + clickedValue);
      }
    } else if (clickedValue === "C") {
      setScreenValue("0");
    } else if (clickedValue === "=") {
      operation(screenValue);
    } else {
      if (screenValue === "0") {
        setScreenValue(clickedValue);
      } else {
        setScreenValue(screenValue + clickedValue);
      }
    }
  }

  return (
    <>
      <div className="container">
        <Screen value={screenValue} disabled />
        <div className="buttons">
          <div className="grid grid-4">
            <Button onClick={handleClick}>+</Button>
            <Button onClick={handleClick}>-</Button>
            <Button onClick={handleClick}>/</Button>
            <Button onClick={handleClick}>X</Button>
          </div>

          <div className="grid grid-3">
            <Button onClick={handleClick}>7</Button>
            <Button onClick={handleClick}>8</Button>
            <Button onClick={handleClick}>9</Button>
          </div>

          <div className="grid grid-3">
            <Button onClick={handleClick}>4</Button>
            <Button onClick={handleClick}>5</Button>
            <Button onClick={handleClick}>6</Button>
          </div>

          <div className="grid grid-3">
            <Button onClick={handleClick}>1</Button>
            <Button onClick={handleClick}>2</Button>
            <Button onClick={handleClick}>3</Button>
          </div>

          <div className="grid grid-3">
            <Button color="#e3873b" onClick={handleClick}>
              C
            </Button>
            <Button onClick={handleClick}>0</Button>
            <Button onClick={handleClick}>=</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
