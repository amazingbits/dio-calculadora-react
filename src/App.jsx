import React from "react";
import Screen from "./components/Screen/Screen";
import Button from "./components/Button/Button";

function App() {
  const [screenValue, setScreenValue] = React.useState("0");
  const operationOptions = ["+", "-", "/", "*"];

  function makeOperation(n1, n2, operation) {
    if (operationOptions.includes(operation)) {
      return eval(`${n1} ${operation} ${n2}`);
    }
    return false;
  }

  function getResults(screenText) {
    const operator = screenText.replace(/[0-9]/g, "");
    if (operationOptions.includes(operator)) {
      const exp = screenText.split(operator);
      if (exp.length === 2) {
        return makeOperation(Number(exp[0]), Number(exp[1]), operator);
      }
      return false;
    }
    return false;
  }

  function handleClick({ target }) {
    const clickedValue = target.value;
    const operator = screenValue.replace(/[0-9]/g, "");
    if (operationOptions.includes(clickedValue)) {
      if (screenValue === "0") {
        alert("Operação inválida");
        return;
      }
      if (operationOptions.includes(operator)) {
        alert("Só é possível efetuar operações com dois números");
        return;
      }
      setScreenValue(screenValue + clickedValue);
    } else if (clickedValue === "C") {
      setScreenValue("0");
    } else if (clickedValue === "=") {
      const results = getResults(screenValue);
      if (!results) {
        alert("Houve um problema com a operação");
        return;
      }
      setScreenValue(results.toString());
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
            <Button onClick={handleClick} title="Somar">
              +
            </Button>
            <Button onClick={handleClick} title="Subtrair">
              -
            </Button>
            <Button onClick={handleClick} title="Dividir">
              /
            </Button>
            <Button onClick={handleClick} title="Multiplicar">
              *
            </Button>
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
            <Button color="#e3873b" onClick={handleClick} title="Limpar tela">
              C
            </Button>
            <Button onClick={handleClick}>0</Button>
            <Button onClick={handleClick} title="Calcular resultado">
              =
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
